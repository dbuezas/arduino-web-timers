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
const gh = 'https://github.com/dbuezas/arduino-web-timers'
const App = () => {
  const timerIdx = useRecoilValue(userConfigBitState('timer'))
  const mcu = useRecoilValue(userConfigBitState('mcu'))
  const timers = useRecoilValue(mcuTimers)
  const [panelMode, setPanelMode] = useRecoilState(panelModeState)
  const isLoading = mcuTimers === undefined || timerIdx === undefined
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css"
      />
      <div>
        <RegisterLocationState />
        {!isLoading && (
          <Container className="App">
            <Header>
              <Navbar appearance="inverse">
                <Navbar.Header>
                  &nbsp;
                  <span>
                    <img
                      src="./logo.png"
                      alt="logo"
                      style={{ width: 55.5, height: 55.5, float: 'left' }}
                    />
                    &nbsp;
                    <span
                      style={{
                        float: 'left',
                        marginTop: 7,
                        textAlign: 'center'
                      }}
                    >
                      ARDUINO WEB
                      <br />
                      TIMERS
                    </span>
                  </span>
                </Navbar.Header>
                <Navbar.Body>
                  <Nav>
                    <Dropdown
                      trigger="click"
                      icon={<Icon icon="microchip" />}
                      title={mcu}
                      placement="bottomEnd"
                    >
                      {map(MicroControllers, (aChip) => (
                        <Dropdown.Item
                          // active={aChip === mcu}
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
                      trigger="click"
                      icon={<Icon icon="cog" />}
                      title={panelMode}
                      placement="bottomEnd"
                    >
                      {map(PanelModes, (mode) => (
                        <Dropdown.Item
                          // active={mode === panelMode}
                          onSelect={setPanelMode}
                          eventKey={mode}
                          key={mode}
                        >
                          {mode}
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                    <Dropdown
                      trigger="click"
                      icon={<Icon icon="help-o" />}
                      title="About"
                      placement="bottomEnd"
                    >
                      <Dropdown.Item
                        href={gh + '/discussions/categories/show-and-tell'}
                        target="_blank"
                      >
                        Share what you used this for!
                      </Dropdown.Item>
                      <Dropdown.Item
                        href={gh + '/discussions/categories/q-a'}
                        target="_blank"
                      >
                        Q&A
                      </Dropdown.Item>
                      <Dropdown.Item
                        href={gh + '/discussions/categories/ideas'}
                        target="_blank"
                      >
                        Propose a feature
                      </Dropdown.Item>
                      <Dropdown.Item
                        href={gh + '/issues/new/choose'}
                        target="_blank"
                      >
                        Report a bug
                      </Dropdown.Item>
                    </Dropdown>
                  </Nav>
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=dbuezas&repo=arduino-web-timers&type=star&count=true"
                    frameBorder="0"
                    scrolling="0"
                    width="100"
                    height="20"
                    title="GitHub"
                    style={{ marginTop: 18, float: 'right' }}
                  ></iframe>
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
              <TimerSetup key={timerIdx + '-' + mcu} />
            </Content>
          </Container>
        )}
      </div>
      <a
        className="github-fork-ribbon right-bottom fixed"
        href={gh}
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
      >
        Fork me on GitHub
      </a>
    </>
  )
}

export default App
