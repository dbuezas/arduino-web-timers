import React, { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup, Col, Grid, Panel, Row } from 'rsuite'
import Masonry from 'react-masonry-component'

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
function TableConfig({
  key,
  userBitSelection,
  setUserBitSelection,
  tableSet
}: {
  key: any
  userBitSelection: ConfigState
  setUserBitSelection: SetConfigState
  tableSet: TTable[]
}) {
  const tableSetEnabled = joinTables([[userBitSelection], ...tableSet])
  return map(getValuesPerBitName(tableSet), (allOptions, bitName) => {
    const regDescription = descriptions[bitName]
    if (!regDescription) return ''
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
    return (
      <Panel
        header={regDescription || bitName}
        bordered
        key={bitName}
        bodyFill
        style={{ width: 200 }}
      >
        <CheckboxGroup
          inline
          value={[userBitSelection[bitName] || forcedOption]}
          onChange={(val) =>
            setUserBitSelection({
              ...userBitSelection,
              [bitName]: val[1]
            })
          }
        >
          {allOptions.map((value, i) => (
            <Checkbox
              indeterminate={value === suggestedOption}
              key={i}
              value={value}
              disabled={!enabledOptions.includes(value) || !!forcedOption}
            >
              {value}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Panel>
    )
  })
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

  return (
    <div className="TimerSetup">
      <Masonry className="my-masonry-grid" options={{}}>
        {/* array of JSX items */}
        {tableSets.flatMap((tableSet, i) =>
          TableConfig({
            key: i,
            userBitSelection: userBitSelection,
            setUserBitSelection: setUserBitSelection,
            tableSet: tableSet
          })
        )}
      </Masonry>

      <pre>{generateCode(fullTimerConfiguration, timer.registers)}</pre>
    </div>
  )
}

export default TimerSetup
