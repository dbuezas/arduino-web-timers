import { Checkbox, CheckboxGroup, FlexboxGrid, Panel } from 'rsuite'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { descriptions } from '../data/timers'
import { map } from 'lodash'
import './TimerSetup.css'

import Plot from '../Plot/Plot'
import Code from './Code'
import ResizePanel from 'react-resize-panel-ts'
import { PanelModes, panelModeState, userConfigBitState } from '../state/state'
import { allSplitGroupsState, TCheckboxGroupData } from './state'
import React from 'react'

type input = {
  bitName: string
  humanName?: string
  selectedOption: string | null
  forcedOption: string | null
  options: {
    isSuggested: boolean
    value: string
    isDisabled: boolean
  }[]
}

const TableConfig = React.memo(
  ({ bitName, humanName, selectedOption, forcedOption, options }: input) => {
    const setUserConfigBit = useSetRecoilState(userConfigBitState(bitName))
    return (
      <CheckboxGroup
        inline
        value={[selectedOption || forcedOption]}
        onChange={(val: string[]) => setUserConfigBit(val[1])}
      >
        <p>{humanName || bitName}</p>
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
)

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
        bitName,
        humanName: bitDescriptions[bitName]
      }))
      .filter(({ humanName }) => humanName)
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

const Column = React.memo(
  ({
    panelName,
    colCount,
    checkboxGroups
  }: {
    panelName: string
    colCount: number
    checkboxGroups: TCheckboxGroupData
  }) => {
    const style = { width: 100 / (colCount + 1) + '%' }

    return (
      <FlexboxGrid.Item key={panelName} style={style}>
        <Panel header={panelName} bordered shaded collapsible defaultExpanded>
          {checkboxGroups.map((checkboxGroupData, i) => (
            <TableConfig key={i} {...checkboxGroupData} />
          ))}
        </Panel>
      </FlexboxGrid.Item>
    )
  }
)

function TimerSetup() {
  const splitGroups = useRecoilValue(allSplitGroupsState)
  const allCheckboxGroups = splitGroups.flat()

  const panelMode = useRecoilValue(panelModeState)
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
  const style = { width: 100 / (byPanel.length + 1) + '%' }

  const r = (
    <div className="TimerSetup">
      <FlexboxGrid style={{ flexGrow: 1, overflow: 'scroll' }}>
        {byPanel.map(({ panelName, checkboxGroups }, i) => (
          <Column
            key={i}
            {...{ panelName, checkboxGroups, colCount: byPanel.length }}
          />
        ))}
        <FlexboxGrid.Item key="code" style={style}>
          <Panel header="Code" bordered shaded collapsible defaultExpanded>
            <Code />
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
        <Plot style={{ minHeight: 300 }} />
      </ResizePanel>
    </div>
  )
  return r
}

export default TimerSetup
