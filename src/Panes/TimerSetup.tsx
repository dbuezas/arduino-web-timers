import {
  Checkbox,
  CheckboxGroup,
  FlexboxGrid,
  Panel,
  Tooltip,
  Whisper
} from 'rsuite'
import { useAtomValue, useSetAtom } from 'jotai'
import { variableDescriptions, valueDescriptions } from '../data/timers'
import { difference, map, uniq } from 'lodash-es'
import './TimerSetup.css'

import Plot from '../Plot/Plot'
import Code, { CopyCodeToClipboard } from './Code'
import { panelModeState, userConfigState } from '../state/state'
import { variableOptionsState, groupsState } from './state'
import { TTable, PanelModes } from '../helpers/types'
import ResizePanel from './ResizePanel'
import { IconInfoCircled } from '../Icons'
const VariableConfig = ({
  variable,
  humanName
}: {
  variable: string
  humanName?: string
}) => {
  const setUserConfigValue = useSetAtom(userConfigState(variable))
  const { selectedOption, forcedOption, options } = useAtomValue(
    variableOptionsState(variable)
  )
  const descr = valueDescriptions[variable]
  const descrTitle = descr?.title
  return (
    <CheckboxGroup
      inline
      value={[selectedOption || forcedOption]}
      onChange={(val: string[]) => setUserConfigValue(val[1])}
    >
      <p>
        {humanName || variable}{' '}
        {descrTitle && (
          <Whisper
            placement="right"
            trigger="hover"
            speaker={<Tooltip>{descrTitle}</Tooltip>}
          >
            <IconInfoCircled />
          </Whisper>
        )}
      </p>
      {options.map(({ value, isSuggested, isDisabled }, i) => {
        const valueDescription = descr?.[value]

        return (
          <span key={i}>
            <Checkbox
              indeterminate={isSuggested}
              value={value}
              disabled={isDisabled}
            >
              {value}
            </Checkbox>{' '}
            {valueDescription && (
              <Whisper
                placement="right"
                trigger="hover"
                speaker={<Tooltip>{valueDescription}</Tooltip>}
              >
                <IconInfoCircled />
              </Whisper>
            )}
          </span>
        )
      })}
    </CheckboxGroup>
  )
}

type TPanel = {
  panelName: string
  namedVariables: {
    variable: string
    humanName?: string
  }[]
}
const getPanesByGroup = (groups: TTable[][]): TPanel[] =>
  groups.map((group, i) => ({
    panelName: `Group ${i}`,
    namedVariables: group
      .map((table) => Object.keys(table[0]))
      .flat()
      .map((variable) => ({ variable }))
  }))

const getAllVariablesInGroups = (groups: TTable[][]) =>
  uniq(
    groups
      .flat()
      .map((table) => Object.keys(table[0]))
      .flat()
  )
const getPanesGroupedByDescription = (groups: TTable[][]): TPanel[] => {
  const allVariablesInGroups = getAllVariablesInGroups(groups)
  return map(variableDescriptions, (variableDescription, panelName) => ({
    panelName,
    namedVariables: map(variableDescription, (humanName, variable) => ({
      variable,
      humanName
    })).filter(({ variable }) => allVariablesInGroups.includes(variable))
  })).filter(({ namedVariables }) => namedVariables.length)
}
const getHiddenPane = (groups: TTable[][]): TPanel => {
  const allVariables = getAllVariablesInGroups(groups)

  const visibleVariables: string[] = Object.values(variableDescriptions)
    .map(Object.values)
    .flat()
  return {
    panelName: 'Internals',
    namedVariables: difference(allVariables, visibleVariables).map(
      (variable) => ({
        variable
      })
    )
  }
}

function TimerSetup() {
  const groups = useAtomValue(groupsState)

  const panelMode = useAtomValue(panelModeState)
  let panels: TPanel[]
  switch (panelMode) {
    case PanelModes.Normal:
      panels = getPanesGroupedByDescription(groups)
      break
    case PanelModes.Internal:
      panels = [getHiddenPane(groups), ...getPanesGroupedByDescription(groups)]
      break
    case PanelModes.ByDependencies:
      panels = getPanesByGroup(groups)
      break
  }
  const style = { width: 100 / (panels.length + 1) + '%' }

  const r = (
    <div className="TimerSetup">
      <FlexboxGrid style={{ flexGrow: 1, overflow: 'scroll' }}>
        {panels.map(({ panelName, namedVariables }, i) => (
          <FlexboxGrid.Item key={panelName} style={style}>
            <Panel header={panelName} bordered shaded defaultExpanded>
              {namedVariables.map(({ variable, humanName }, i) => (
                <VariableConfig
                  key={i}
                  variable={variable}
                  humanName={humanName}
                />
              ))}
            </Panel>
          </FlexboxGrid.Item>
        ))}
        <FlexboxGrid.Item key="code" style={style}>
          <Panel
            style={{ position: 'relative' }}
            header={
              <>
                Code &nbsp;
                <CopyCodeToClipboard />
              </>
            }
            bordered
            shaded
            defaultExpanded
          >
            <Code />
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <ResizePanel>
        <Plot style={{ minHeight: 100 }} />
      </ResizePanel>
    </div>
  )
  return r
}

export default TimerSetup
