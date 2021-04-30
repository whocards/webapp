import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'

const logRocketId = process.env.REACT_APP_LOG_ROCKET_ID
if (logRocketId) {
  LogRocket.init(logRocketId)
  setupLogRocketReact(LogRocket)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
