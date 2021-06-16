import { map } from 'lodash'
import { useRecoilState } from 'recoil'
import { Container, Content, Header, Icon, Nav, Navbar, Dropdown } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'

import './App.css'
import TimerSetup from './Panes/TimerSetup'
import {
  PanelModes,
  panelModeState,
  MicroControllers,
  RegisterLocationState,
  userConfigBitState
} from './state/state'
import timers from './data/lgt328p'

const App = () => {
  const [timerIdx, setTimerIdx] = useRecoilState(userConfigBitState('timer'))
  const [mcu, setMcu] = useRecoilState(userConfigBitState('mcu'))
  console.log('app')
  const [panelMode, setPanelMode] = useRecoilState(panelModeState)
  return (
    <>
      <div>
        <RegisterLocationState />
        <Container className="App">
          <Header>
            <Navbar appearance="inverse">
              <Navbar.Header>
                &nbsp; &nbsp; &nbsp;
                <Icon icon="microchip" size="lg" />
                <a
                  href="github"
                  style={{ padding: '18px 20px', display: 'inline-block' }}
                >
                  TIMERNATOR
                </a>
              </Navbar.Header>
              <Navbar.Body>
                <Nav>
                  <Dropdown
                    trigger="hover"
                    icon={<Icon icon="cog" />}
                    title={mcu}
                    placement="bottomEnd"
                  >
                    {map(MicroControllers, (aChip) => (
                      <Dropdown.Item
                        active={aChip === mcu}
                        onSelect={setMcu}
                        eventKey={aChip}
                        key={aChip}
                      >
                        {aChip}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                </Nav>
                <Nav activeKey={timerIdx} onSelect={setTimerIdx}>
                  {timers.map((_, i) => (
                    <Nav.Item
                      eventKey={i}
                      key={i}
                      icon={
                        <>
                          <Icon icon="line-chart" />
                        </>
                      }
                    >
                      Timer {i}
                    </Nav.Item>
                  ))}
                </Nav>
                <Nav pullRight>
                  <Dropdown
                    trigger="hover"
                    icon={<Icon icon="cog" />}
                    title={panelMode}
                    placement="bottomEnd"
                  >
                    {map(PanelModes, (mode) => (
                      <Dropdown.Item
                        active={mode === panelMode}
                        onSelect={setPanelMode}
                        eventKey={mode}
                        key={mode}
                      >
                        {mode}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                </Nav>
              </Navbar.Body>
            </Navbar>
          </Header>
          <Content
            style={{
              padding: 10,
              // margin: 20,
              background: '#fff',
              position: 'relative'
            }}
          >
            <TimerSetup key={timerIdx} />
          </Content>
        </Container>
      </div>
    </>
  )
}

export default App
