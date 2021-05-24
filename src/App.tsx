import React, { useState } from 'react'
//import './App.css';
import * as timer0 from './data/timer0'
import * as timer1 from './data/timer1'
import { Checkbox, CheckboxGroup, Panel } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'
import uniq from 'lodash/uniq'
import map from 'lodash/map'
import keys from 'lodash/keys'
import {
  getConsistentTimerConfigs,
  generateCode,
  joinTables,
  descriptions
} from './data/timers'
import { Table, TimerConfig } from './data/types'
import { mapValues } from 'lodash'

const timer = timer0
const allCols = timer.configs.flatMap((config) =>
  Object.values(config).flatMap((table) => Object.keys(table[0]))
)
const defaultState = Object.fromEntries(
  allCols.map((colName) => [colName, null] as [string, null | string])
)

type ConfigState = {
  [k: string]: string | null
}
type SetConfigState = (c: ConfigState) => void
function renderConfig(
  timerConfig: TimerConfig,
  selected: ConfigState,
  setSelected: SetConfigState
) {
  const consistentConfigs = getConsistentTimerConfigs(timerConfig, selected)
  return (
    <div className="App">
      {map(timerConfig, (table, tableIdx) =>
        keys(table[0]).map((colName) => {
          const regDescription = descriptions[colName]
          if (!regDescription) return ''
          const allOptions = uniq(
            Object.values(timerConfig).flatMap((rows) =>
              rows.flatMap((row) => (row[colName] ? [row[colName]] : []))
            )
          )
          const consistentSingleTable = consistentConfigs[tableIdx]
          const enabledOptions = uniq(
            consistentSingleTable.map((col) => col[colName])
          )
          const forcedOption =
            !selected[colName] && enabledOptions.length === 1
              ? enabledOptions[0]
              : null
          const suggestedOption =
            !selected[colName] && enabledOptions.length > 1
              ? enabledOptions[0]
              : null
          return (
            <div key={colName}>
              {regDescription || colName}
              <CheckboxGroup
                inline
                value={[selected[colName] || forcedOption]}
                onChange={(val) =>
                  setSelected({ ...selected, [colName]: val[1] })
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
            </div>
          )
        })
      )}
    </div>
  )
}

function App() {
  const [selected, setSelected] = useState(defaultState)
  let allCols: Record<string, string[]> = {}
  for (const config of timer.configs) {
    for (const table of config) {
      for (const row of table) {
        for (const col in row) {
          const val = row[col]
          allCols[col] = allCols[col] || []
          if (val) allCols[col].push(val)
        }
      }
    }
  }
  allCols = mapValues(allCols, uniq)
  console.log(allCols)
  const joineds: Table = timer.configs
    .map((timerConfig, i) => {
      const consistentConfigs = getConsistentTimerConfigs(timerConfig, selected)
      return joinTables(Object.values(consistentConfigs))
    })
    .map((joined) => joined[0])
    .flat()
  const fullTimerConfiguration = Object.assign({}, ...joineds)
  console.log('joineds', joineds)
  return (
    <div className="App">
      {timer.configs.map((timerConfig, i) =>
        renderConfig(timerConfig, selected, setSelected)
      )}
      <pre>{generateCode(fullTimerConfiguration, timer.registers)}</pre>
    </div>
  )
}

export default App
