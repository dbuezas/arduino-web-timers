import React from 'preact/compat'
import ReactDOM from 'preact/compat'
import './index.css'
import App from './App'
import { RecoilRoot } from 'recoil'
import { RegisterHashLink } from './state/state'
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RegisterHashLink />

      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')!
)
