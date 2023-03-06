import React from 'preact/compat'
import ReactDOM from 'preact/compat'
import './index.css'
import App from './App'
import { RegisterHashLink } from './state/state'
ReactDOM.render(
  <React.StrictMode>
    <RegisterHashLink />

    <App />
  </React.StrictMode>,
  document.getElementById('root')!
)
