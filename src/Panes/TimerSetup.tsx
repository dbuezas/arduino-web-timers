import { Checkbox, CheckboxGroup, FlexboxGrid, Panel } from 'rsuite'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { descriptions } from '../data/timers'
import { difference, map, uniq } from 'lodash'
import './TimerSetup.css'

import Plot from '../Plot/Plot'
import Code from './Code'
import ResizePanel from 'react-resize-panel-ts'
import { panelModeState, userConfigBitState } from '../state/state'
import { bitOptionsState, groupsState } from './state'
import { TTable, PanelModes } from '../helpers/types'
const BitConfig = ({
  bitName,
  humanName
}: {
  bitName: string
  humanName?: string
}) => {
  const setUserConfigBit = useSetRecoilState(userConfigBitState(bitName))
  const { selectedOption, forcedOption, options } = useRecoilValue(
    bitOptionsState(bitName)
  )
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

type TPanel = {
  panelName: string
  bitNames: {
    bitName: string
    humanName?: string
  }[]
}
const getPanesByGroup = (groups: TTable[][]): TPanel[] =>
  groups.map((group, i) => ({
    panelName: `Group ${i}`,
    bitNames: group
      .map((table) => Object.keys(table[0]))
      .flat()
      .map((bitName) => ({ bitName }))
  }))

const getAllBitnamesInGroups = (groups: TTable[][]) =>
  uniq(
    groups
      .flat()
      .map((table) => Object.keys(table[0]))
      .flat()
  )
const getPanesGroupedByDescription = (groups: TTable[][]): TPanel[] => {
  const allBitnamesInGroups = getAllBitnamesInGroups(groups)
  return map(descriptions, (bitDescriptions, panelName) => ({
    panelName,
    bitNames: map(bitDescriptions, (humanName, bitName) => ({
      bitName,
      humanName
    })).filter(({ bitName }) => allBitnamesInGroups.includes(bitName))
  })).filter(({ bitNames }) => bitNames.length)
}
const getHiddenPane = (groups: TTable[][]): TPanel => {
  const allBitnames = getAllBitnamesInGroups(groups)

  const visibleBitnames: string[] = Object.values(descriptions)
    .map(Object.values)
    .flat()
  return {
    panelName: 'Internals',
    bitNames: difference(allBitnames, visibleBitnames).map((bitName) => ({
      bitName
    }))
  }
}

function TimerSetup() {
  const groups = useRecoilValue(groupsState)

  const panelMode = useRecoilValue(panelModeState)
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
        {panels.map(({ panelName, bitNames }, i) => (
          <FlexboxGrid.Item key={panelName} style={style}>
            <Panel header={panelName} bordered shaded defaultExpanded>
              {bitNames.map(({ bitName, humanName }, i) => (
                <BitConfig key={i} bitName={bitName} humanName={humanName} />
              ))}
            </Panel>
          </FlexboxGrid.Item>
        ))}
        <FlexboxGrid.Item key="code" style={style}>
          <Panel header="Code" bordered shaded defaultExpanded>
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
