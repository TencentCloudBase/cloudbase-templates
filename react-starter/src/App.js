import React from "react";
import Hello from "./components/Hello";
import cloudbaseLogo from "./assets/cloudbase.png";
import reactLogo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" alt="CloudBase logo" src={cloudbaseLogo} />
        <img src={reactLogo} className="react-logo" alt="logo" />
      </header>
      <Hello />
    </div>
  );
}

export default App;
