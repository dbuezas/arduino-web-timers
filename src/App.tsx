import { useState } from 'react'
import { Container, Content, Header, Icon, Nav, Navbar } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'

import './App.css'
import timer0 from './data/timer0'
import timer1 from './data/timer1'
import timer2 from './data/timer2'
import timer3 from './data/timer3'
import TimerSetup from './Panes/TimerSetup'

const timers = [timer0, timer1, timer2, timer3]

const App = () => {
  const [timerIndex, setTimerIndex] = useState(0)
  const timer = timers[timerIndex]

  return (
    <>
      <div>
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
                <Nav activeKey={timerIndex} onSelect={setTimerIndex}>
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
                  <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
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
            <TimerSetup timer={timer} key={timerIndex} />
          </Content>
        </Container>
      </div>
    </>
  )
}

export default App
