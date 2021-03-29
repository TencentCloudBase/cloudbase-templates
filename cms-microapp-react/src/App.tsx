import React from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import About from './About'
import logo from './logo.svg'
import './App.css'

const microAppID = 'reactApp'

function App() {
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
