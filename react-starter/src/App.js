import React from "react";
import Hello from "./components/Hello";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="logo"
          alt="CloudBase logo"
          src="/assets/cloudbase.png"
        />
        <img src="/assets/logo.png" className="react-logo" alt="logo" />
      </header>
      <Hello />
    </div>
  );
}

export default App;
