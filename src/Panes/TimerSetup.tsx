import { useMemo, useState } from 'react'
import { Checkbox, CheckboxGroup, FlexboxGrid, Panel } from 'rsuite'
import { useRecoilValue } from 'recoil'
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
import { PanelModes, PanelModeState } from '../state/displayMode'

function useCheckboxGroups(tableSet: TTable[]) {
  const [groupState, setGroupState] = useState<TRow>({})
  const possibleFullAssignments = useMemo(
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
          joined = possibleFullAssignments
        }
        const enabledOptions = uniq(
          joined.map((col) => col[bitName]).filter(isTruthy)
        )

        const forcedOption =
          !groupState[bitName] && enabledOptions.length === 1
            ? possibleFullAssignments[0][bitName]
            : null
        const suggestedOption =
          !groupState[bitName] && enabledOptions.length > 1
            ? possibleFullAssignments[0][bitName]
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
    [groupState, optionsPerBitName, tableSet, possibleFullAssignments]
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
type TCheckboxGroupData = ReturnType<typeof useCheckboxGroups>

const getCheckboxGroupsByGroup = (allCheckboxGroups: TCheckboxGroupData[]) =>
  allCheckboxGroups.map((checkboxGroups, i) => ({
    panelName: `Group ${i}`,
    checkboxGroups
  }))
type TCheckboxGroupByPanel = ReturnType<typeof getCheckboxGroupsByGroup>
const getCheckboxGroupsByPanel = (allCheckboxGroups: TCheckboxGroupData) =>
  map(descriptions, (bitDescriptions, panelName) => ({
    panelName,
    checkboxGroups: allCheckboxGroups
      .map(({ bitName, ...rest }) => ({
        ...rest,
        bitName: bitDescriptions[bitName]
      }))
      .filter(({ bitName }) => bitName)
  })).filter(({ checkboxGroups }) => checkboxGroups.length)

const getHiddenCheckboxGroup = (allCheckboxGroups: TCheckboxGroupData) => ({
  panelName: 'Internals',
  checkboxGroups: allCheckboxGroups
    .map(({ bitName, ...rest }) => ({
      ...rest,
      bitName
    }))
    .filter(({ bitName }) =>
      Object.values(descriptions).every(
        (bitDescriptions) => !bitDescriptions[bitName]
      )
    )
})
function TimerSetup({ timer }: { timer: TTimer }) {
  // console.time('r')

  const tableSets = useMemo(() => splitTables(timer.configs), [timer])
  const splitGroups = tableSets.map(useCheckboxGroups)
  const allCheckboxGroups = splitGroups.flat()

  const panelMode = useRecoilValue(PanelModeState)
  let byPanel: TCheckboxGroupByPanel
  switch (panelMode) {
    case PanelModes.Normal:
      byPanel = getCheckboxGroupsByPanel(allCheckboxGroups)
      break
    case PanelModes.Internal:
      byPanel = [
        getHiddenCheckboxGroup(allCheckboxGroups),
        ...getCheckboxGroupsByPanel(allCheckboxGroups)
      ]
      break
    case PanelModes.ByDependencies:
      byPanel = getCheckboxGroupsByGroup(splitGroups)
      break
  }
  const suggestedConfiguration = Object.fromEntries(
    allCheckboxGroups.map(({ bitName, suggestedOption }) => [
      bitName,
      suggestedOption
    ])
  )
  const style = { width: 100 / (byPanel.length + 1) + '%' }
  const r = (
    <div className="TimerSetup">
      <FlexboxGrid style={{ flexGrow: 1, overflow: 'scroll' }}>
        {byPanel.map(({ panelName, checkboxGroups }) => {
          return (
            <FlexboxGrid.Item key={panelName} style={style}>
              <Panel
                header={panelName}
                bordered
                shaded
                collapsible
                defaultExpanded
              >
                {checkboxGroups.map((checkboxGroupData, i) => (
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
  // console.timeEnd('r')
  return r
}

export default TimerSetup
