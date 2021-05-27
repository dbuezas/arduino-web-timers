import React, { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup } from 'rsuite'
import { Radio, RadioGroup } from 'rsuite'

import 'rsuite/dist/styles/rsuite-default.css'
import uniq from 'lodash/uniq'
import omit from 'lodash/omit'
import keys from 'lodash/keys'
import mapValues from 'lodash/mapValues'
import { descriptions } from './data/timers'
import { Table } from './helpers/types'
import { omitBy, pickBy } from 'lodash'
//import './App.css';
import {
  generateCode,
  getValuesPerBitName,
  joinTables,
  splitTables
} from './helpers/helpers'

import * as timer0 from './data/timer0'
import * as timer1 from './data/timer1'
import * as timer2 from './data/timer2'
import * as timer3 from './data/timer3'

const timers = [timer0, timer1, timer2, timer3]

type ConfigState = {
  [k: string]: string | null
}
type SetConfigState = (c: ConfigState) => void
function renderConfig(
  combinationsPerTableset: Table,
  selected: ConfigState,
  setUserBitSelection: SetConfigState,
  valuesPerBitName: Record<string, string[]>,
  tableSet: Table[]
) {
  return (
    <div className="App">
      {keys(combinationsPerTableset[0]).map((bitName) => {
        const regDescription = descriptions[bitName]
        if (!regDescription) return ''
        const allOptions = valuesPerBitName[bitName]
        console.time('enabledOptions:' + bitName)
        const selectedWithout = omit(selected, bitName)
        const enabledOptions = uniq(
          joinTables([[selectedWithout], ...tableSet]).map(
            (col) => col[bitName]
          )
        )
        console.timeEnd('enabledOptions:' + bitName)

        const forcedOption =
          !selected[bitName] && enabledOptions.length === 1
            ? enabledOptions[0]
            : null
        const suggestedOption =
          !selected[bitName] && enabledOptions.length > 1
            ? enabledOptions[0]
            : null
        return (
          <div key={bitName}>
            {regDescription || bitName}
            <CheckboxGroup
              inline
              value={[selected[bitName] || forcedOption]}
              onChange={(val) =>
                setUserBitSelection({ ...selected, [bitName]: val[1] })
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
type DefaultState = {
  [x: string]: string | null
}

function App() {
  const [timerIndex, setTimerIndex] = useState(0)
  const timer = timers[timerIndex]
  const [userBitSelection, setUserBitSelection] = useState<DefaultState>({})
  useEffect(() => {
    const valuesPerBitName = getValuesPerBitName(timer.configs)
    const defaultState = mapValues(
      valuesPerBitName,
      () => null as null | string
    )
    setUserBitSelection(defaultState)
  }, [timer])
  const tableSets = splitTables(timer.configs)

  let valuesPerBitName = getValuesPerBitName(timer.configs)

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
    <div className="App">
      <RadioGroup
        name="radioList"
        inline
        appearance="picker"
        value={timerIndex}
        onChange={setTimerIndex}
      >
        {timers.map((timer, i) => (
          <Radio value={i}>Timer {i}</Radio>
        ))}
      </RadioGroup>
      {combinationsSet.map((combinationsPerTableset, i) =>
        renderConfig(
          combinationsPerTableset,
          userBitSelection,
          setUserBitSelection,
          valuesPerBitName,
          tableSets[i]
        )
      )}
      <pre>{generateCode(fullTimerConfiguration, timer.registers)}</pre>
    </div>
  )
}

export default App
