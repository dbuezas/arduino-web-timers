import React, { useEffect, useState } from 'react'
//import './App.css';
import * as timer0 from './data/timer0'
import * as timer1 from './data/timer1'
import { Checkbox, CheckboxGroup } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'
import uniq from 'lodash/uniq'
import keys from 'lodash/keys'
import mapValues from 'lodash/mapValues'
import intersection from 'lodash/intersection'
import { generateCode, joinTables, descriptions } from './data/timers'
import { Table } from './data/types'
import { table } from 'console'
import { pickBy } from 'lodash'

const timer = timer1

type ConfigState = {
  [k: string]: string | null
}
type SetConfigState = (c: ConfigState) => void
function renderConfig(
  combinations: Table,
  selected: ConfigState,
  setSelected: SetConfigState,
  allBitnamesAndValues: Record<string, string[]>
) {
  return (
    <div className="App">
      {keys(combinations[0]).map((colName) => {
        const regDescription = descriptions[colName]
        if (!regDescription) return ''
        const allOptions = allBitnamesAndValues[colName]
        const enabledOptions = uniq(combinations.map((col) => col[colName]))
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
      })}
    </div>
  )
}

console.time('allBitnamesAndValues')

let allBitnamesAndValues: Record<string, string[]> = {}
for (const table of timer.configs) {
  for (const row of table) {
    for (const col in row) {
      const val = row[col]
      allBitnamesAndValues[col] = allBitnamesAndValues[col] || []
      if (val) allBitnamesAndValues[col].push(val)
    }
  }
}
allBitnamesAndValues = mapValues(allBitnamesAndValues, uniq)

const splitTables = ([left, ...tables]: Table[]): Table[][] => {
  if (!left) return []
  const cluster = [left]
  let remaining: Table[] = []
  let colsLeft = Object.keys(left[0])
  let changed
  do {
    changed = false
    remaining = []

    for (const table of tables) {
      const colsRight = Object.keys(table[0])
      const match = intersection(colsLeft, colsRight).length > 0
      if (match) {
        cluster.push(table)
        colsLeft = uniq([...colsLeft, ...colsRight])
        changed = true
      } else {
        remaining.push(table)
      }
    }
    tables = remaining
  } while (changed)

  return [cluster, ...splitTables(remaining)]
}
console.time('splitTables')
const tableSets = splitTables(timer.configs)
console.log('splitTables', tableSets)
console.timeEnd('splitTables')

const defaultState = mapValues(
  allBitnamesAndValues,
  () => null as null | string
)
console.timeEnd('allBitnamesAndValues')
function App() {
  const [selected, setSelected] = useState(defaultState)
  const [combinationsSet, setCombinationsSet] = useState<Table[]>([[{}]])
  useEffect(() => {
    console.time('join')
    const newCombinations = tableSets.map((tableSet) => {
      const relevantSelected = pickBy(selected, (_, key) =>
        tableSet.some((table) => keys(table[0]).includes(key))
      )
      return joinTables([[relevantSelected], ...tableSet])
    })
    console.log('newCombinations.length', newCombinations.length)
    setCombinationsSet(newCombinations)
    console.timeEnd('join')
  }, [selected])

  const fullTimerConfiguration = Object.assign(
    {},
    ...combinationsSet.map((combinations) => combinations[0])
  )

  return (
    <div className="App">
      {combinationsSet.map((combinations) =>
        renderConfig(combinations, selected, setSelected, allBitnamesAndValues)
      )}
      <pre>{generateCode(fullTimerConfiguration, timer.registers)}</pre>
    </div>
  )
}

export default App
