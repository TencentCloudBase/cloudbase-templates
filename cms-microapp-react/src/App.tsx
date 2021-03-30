import React, { useState } from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import About from './About'
import logo from './logo.svg'
import './App.css'

const microAppID = 'reactApp'

function App() {
  const [result, setResult] = useState('')

  // 调用云函数
  const callFunction = () => {
    window.cloudbase
      .callFunction({
        name: 'tcb-ext-cms-service',
        data: {
          options: { sort: {}, filter: {}, pageSize: 10, fuzzyFilter: {}, page: 1 },
          resource: 'fsd',
          action: 'getMany'
        }
      })
      .then((ret: any) => setResult(JSON.stringify(ret)))
      .catch((ret: any) => setResult(JSON.stringify(ret)))
  }

  return (
    <HashRouter basename={`/project/microapp/${microAppID}/`}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>CloudBase CMS 微应用</p>
          <div>
            <Link to="/" className="App-link">
              Home
            </Link>
            &nbsp;|&nbsp;
            <Link to="/about" className="App-link">
              About
            </Link>
          </div>
          <p>
            <button onClick={() => callFunction()}>调用云函数</button>
            <p>调用结果：{result}</p>
          </p>
        </header>
        <Switch>
          <Route exact path="/">
            <h2 style={{ color: '#fff' }}>Home Page</h2>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
