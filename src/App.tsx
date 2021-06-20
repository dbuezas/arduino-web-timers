import { map } from 'lodash'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Container, Content, Header, Icon, Nav, Navbar, Dropdown } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'

import './App.css'
import TimerSetup from './Panes/TimerSetup'
import { PanelModes, MicroControllers } from './helpers/types'
import {
  panelModeState,
  RegisterLocationState,
  mcuTimers,
  userConfigBitState
} from './state/state'
import { setHashFromObject } from './state/useHash'

const App = () => {
  const timerIdx = useRecoilValue(userConfigBitState('timer'))
  const mcu = useRecoilValue(userConfigBitState('mcu'))
  const timers = useRecoilValue(mcuTimers)
  const [panelMode, setPanelMode] = useRecoilState(panelModeState)
  const isLoading = mcuTimers === undefined || timerIdx === undefined
  return (
    <>
      <div>
        <RegisterLocationState />
        {!isLoading && (
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
                          onSelect={(mcu) =>
                            setHashFromObject({
                              mcu,
                              timer: '0'
                            })
                          }
                          eventKey={aChip}
                          key={aChip}
                        >
                          {aChip}
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                  </Nav>
                  <Nav
                    activeKey={timerIdx}
                    onSelect={(timer) =>
                      setHashFromObject({
                        mcu,
                        timer
                      })
                    }
                  >
                    {timers.map((_: any, i) => (
                      <Nav.Item
                        eventKey={'' + i}
                        key={'' + i}
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
        )}
      </div>
    </>
  )
}

export default App
