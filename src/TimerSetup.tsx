import React, { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup, Col, Grid, Panel, Row } from 'rsuite'

import uniq from 'lodash/uniq'
import keys from 'lodash/keys'
import mapValues from 'lodash/mapValues'
import { descriptions } from './data/timers'
import { TRow, TTable, TTimer } from './helpers/types'
import { map, pickBy } from 'lodash'
import './TimerSetup.css'
import {
  generateCode,
  getValuesPerBitName,
  isTruthy,
  joinTables,
  splitTables
} from './helpers/helpers'

type ConfigState = {
  [k: string]: string | null
}
type SetConfigState = (c: ConfigState) => void

function getGroupData({
  userBitSelection,
  setUserBitSelection,
  tableSet
}: {
  userBitSelection: ConfigState
  setUserBitSelection: SetConfigState
  tableSet: TTable[]
}) {
  const tableSetEnabled = joinTables([[userBitSelection], ...tableSet])
  return map(getValuesPerBitName(tableSet), (allOptions, bitName) => {
    const selectedWithout = { ...userBitSelection, [bitName]: null }
    let joined: TRow[]
    if (userBitSelection[bitName]) {
      joined = joinTables([[selectedWithout], ...tableSet])
    } else {
      // optimization
      joined = tableSetEnabled
    }
    const enabledOptions = uniq(
      joined.map((col) => col[bitName]).filter(isTruthy)
    )

    const forcedOption =
      !userBitSelection[bitName] && enabledOptions.length === 1
        ? enabledOptions[0]
        : null
    const suggestedOption =
      !userBitSelection[bitName] && enabledOptions.length > 1
        ? enabledOptions[0]
        : null
    return {
      bitName,
      selectedOption: userBitSelection[bitName],
      forcedOption: forcedOption,
      setOption: (val: string[]) =>
        setUserBitSelection({
          ...userBitSelection,
          [bitName]: val[1]
        }),
      options: allOptions.map((value, i) => ({
        isSuggested: value === suggestedOption,
        value,
        isDisabled: !enabledOptions.includes(value) || !!forcedOption
      }))
    }
  })
}

type input = {
  bitName: string
  selectedOption: string | null
  forcedOption: string | null
  setOption: (val: string[]) => void
  options: {
    isSuggested: boolean
    value: string
    isDisabled: boolean
  }[]
}

function TableConfig({
  bitName,
  selectedOption,
  forcedOption,
  setOption,
  options
}: input) {
  return (
    <Panel
      header={bitName}
      bordered
      key={bitName}
      bodyFill
      // style={{ width: 200 }}
    >
      <CheckboxGroup
        inline
        value={[selectedOption || forcedOption]}
        onChange={setOption}
      >
        {options.map(({ value, isSuggested, isDisabled }, i) => (
          <Checkbox
            indeterminate={isSuggested}
            key={i}
            value={value}
            disabled={isDisabled}
          >
            {value}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Panel>
  )
}

function TimerSetup({ timer }: { timer: TTimer }) {
  const [userBitSelection, setUserBitSelection] = useState<TRow>({})
  useEffect(() => {
    const valuesPerBitName = getValuesPerBitName(timer.configs)
    const defaultState = mapValues(valuesPerBitName, () => null)
    setUserBitSelection(defaultState)
  }, [timer])
  const tableSets = splitTables(timer.configs)

  console.time('combinationsSet')
  const combinationsSet = tableSets.map((tableSet) => {
    const relevantSelected = pickBy(userBitSelection, (_, key) =>
      tableSet.some((table) => keys(table[0]).includes(key))
    )
    return joinTables([[relevantSelected], ...tableSet])
  })
  console.timeEnd('combinationsSet')

  console.time('fullTimerConfiguration')
  const fullTimerConfiguration = Object.assign(
    {},
    ...combinationsSet.map(
      (combinationsPerTableset) => combinationsPerTableset[0]
    )
  )
  console.timeEnd('fullTimerConfiguration')

  const data = tableSets.flatMap((tableSet, i) =>
    getGroupData({ userBitSelection, setUserBitSelection, tableSet })
  )
  let columns = mapValues(descriptions, (description, groupName) =>
    data.filter(({ bitName }) => !!description[bitName])
  )
  columns = pickBy(columns, (panelData) => panelData.length)
  return (
    <div className="TimerSetup">
      <Grid fluid>
        <Row className="show-grid">
          {map(columns, (panelsData, groupName) => {
            return (
              <>
                <Col xs={Math.floor(24 / panelsData.length)}>
                  {groupName}
                  {panelsData.map((panelData, i) => (
                    <TableConfig key={i} {...panelData} />
                  ))}
                </Col>
              </>
            )
          })}
        </Row>
      </Grid>
      <pre>{generateCode(fullTimerConfiguration, timer.registers)}</pre>
    </div>
  )
}

export default TimerSetup
