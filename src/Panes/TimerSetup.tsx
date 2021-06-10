import { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup, FlexboxGrid, Panel } from 'rsuite'

import uniq from 'lodash/uniq'
import keys from 'lodash/keys'
import mapValues from 'lodash/mapValues'
import { descriptions } from '../data/timers'
import { TRow, TTable, TTimer } from '../helpers/types'
import { map, pickBy } from 'lodash'
import './TimerSetup.css'
import {
  getValuesPerBitName,
  isTruthy,
  joinTables,
  splitTables
} from '../helpers/helpers'
import Plot from '../Plot/Plot'
import Code from './Code'
import ResizePanel from 'react-resize-panel-ts'

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
    <CheckboxGroup
      inline
      value={[selectedOption || forcedOption]}
      onChange={setOption}
    >
      <p>{bitName}</p>
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

  const combinationsSet = tableSets.map((tableSet) => {
    const relevantSelected = pickBy(userBitSelection, (_, key) =>
      tableSet.some((table) => keys(table[0]).includes(key))
    )
    return joinTables([[relevantSelected], ...tableSet])
  })

  const fullTimerConfiguration = Object.assign(
    {},
    ...combinationsSet.map(
      (combinationsPerTableset) => combinationsPerTableset[0]
    )
  )

  const data = tableSets.flatMap((tableSet, i) =>
    getGroupData({ userBitSelection, setUserBitSelection, tableSet })
  )
  let columns = mapValues(descriptions, (description) =>
    data
      .map(({ bitName, ...rest }) => ({
        ...rest,
        bitName: description[bitName]
      }))
      .filter(({ bitName }) => bitName)
  )
  columns = pickBy(columns, (panelData) => panelData.length)
  const style = { width: 100 / (Object.keys(columns).length + 1) + '%' }
  return (
    <div className="TimerSetup">
      <FlexboxGrid style={{ flexGrow: 1, overflow: 'scroll' }}>
        {map(columns, (panelsData, groupName) => {
          return (
            <FlexboxGrid.Item key={groupName} style={style}>
              <Panel
                header={groupName}
                bordered
                shaded
                collapsible
                defaultExpanded
                key={groupName}
              >
                {panelsData.map((panelData, i) => (
                  <TableConfig key={i} {...panelData} />
                ))}
              </Panel>
            </FlexboxGrid.Item>
          )
        })}
        <FlexboxGrid.Item key="code" style={style}>
          <Panel header="Code" bordered shaded collapsible defaultExpanded>
            <Code
              fullTimerConfiguration={fullTimerConfiguration}
              registers={timer.registers}
            />
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <ResizePanel
        direction="n"
        style={{
          width: '100%',
          bottom: 0,
          flexGrow: 0,
          borderTop: '1px solid lightgrey',
          height: 200
        }}
      >
        <Plot
          key={fullTimerConfiguration.timerNr}
          bitValues={fullTimerConfiguration}
          style={{ minHeight: 300 }}
        />
      </ResizePanel>
    </div>
  )
}

export default TimerSetup
