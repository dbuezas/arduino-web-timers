import { useMemo, useState } from 'react'
import { Checkbox, CheckboxGroup, FlexboxGrid, Panel } from 'rsuite'

import uniq from 'lodash/uniq'
import { descriptions } from '../data/timers'
import { TRow, TTable, TTimer } from '../helpers/types'
import { map } from 'lodash'
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

function useCheckboxGroups(tableSet: TTable[]) {
  const [groupState, setGroupState] = useState<TRow>({})
  const tableSetEnabled = useMemo(
    () => joinTables([[groupState], ...tableSet]),
    [groupState, tableSet]
  )
  const optionsPerBitName = useMemo(
    () => getValuesPerBitName(tableSet),
    [tableSet]
  )

  const checkboxGroupData = useMemo(
    () =>
      map(optionsPerBitName, (allOptions, bitName) => {
        const selectedWithout = { ...groupState, [bitName]: null }
        let joined: TRow[]
        if (groupState[bitName]) {
          joined = joinTables([[selectedWithout], ...tableSet])
        } else {
          // optimization
          joined = tableSetEnabled
        }
        const enabledOptions = uniq(
          joined.map((col) => col[bitName]).filter(isTruthy)
        )

        const forcedOption =
          !groupState[bitName] && enabledOptions.length === 1
            ? enabledOptions[0]
            : null
        const suggestedOption =
          !groupState[bitName] && enabledOptions.length > 1
            ? enabledOptions[0]
            : null
        const setValue = (val: string) =>
          setGroupState({
            ...groupState,
            [bitName]: val
          })

        return {
          bitName,
          selectedOption: groupState[bitName],
          suggestedOption:
            suggestedOption || forcedOption || groupState[bitName],
          forcedOption: forcedOption,
          setValue,
          setOption: (val: string[]) => setValue(val[1]),
          options: allOptions.map((value, i) => ({
            isSuggested: value === suggestedOption,
            value,
            isDisabled: !enabledOptions.includes(value) || !!forcedOption
          }))
        }
      }),
    [groupState, optionsPerBitName, tableSet, tableSetEnabled]
  )
  return checkboxGroupData
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
  const tableSets = splitTables(timer.configs)

  const allCheckboxGroups = tableSets.flatMap(useCheckboxGroups)
  const byPanel = map(descriptions, (bitDescriptions, panelName) => ({
    panelName,
    checkBoxGroups: allCheckboxGroups
      .map(({ bitName, ...rest }) => ({
        ...rest,
        bitName: bitDescriptions[bitName]
      }))
      .filter(({ bitName }) => bitName)
  })).filter(({ checkBoxGroups }) => checkBoxGroups.length)
  const suggestedConfiguration = Object.fromEntries(
    allCheckboxGroups.map(({ bitName, suggestedOption }) => [
      bitName,
      suggestedOption
    ])
  )
  const style = { width: 100 / (byPanel.length + 1) + '%' }
  return (
    <div className="TimerSetup">
      <FlexboxGrid style={{ flexGrow: 1, overflow: 'scroll' }}>
        {byPanel.map(({ panelName, checkBoxGroups }) => {
          return (
            <FlexboxGrid.Item key={panelName} style={style}>
              <Panel
                header={panelName}
                bordered
                shaded
                collapsible
                defaultExpanded
              >
                {checkBoxGroups.map((checkboxGroupData, i) => (
                  <TableConfig key={i} {...checkboxGroupData} />
                ))}
              </Panel>
            </FlexboxGrid.Item>
          )
        })}
        <FlexboxGrid.Item key="code" style={style}>
          <Panel header="Code" bordered shaded collapsible defaultExpanded>
            <Code
              fullTimerConfiguration={suggestedConfiguration}
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
          key={suggestedConfiguration.timerNr}
          bitValues={suggestedConfiguration}
          setBitValue={(bitName: string, value: string) => {
            allCheckboxGroups.forEach(({ bitName: bitName2, setValue }) => {
              if (bitName === bitName2) setValue(value)
            })
          }}
          style={{ minHeight: 300 }}
        />
      </ResizePanel>
    </div>
  )
}

export default TimerSetup
