import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Tablerow from './components/tablerow/Tablerow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome name="Eric" />
          <Clock />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <table>
          <tr>
            <th>name</th>
            <th>nickname</th>
          </tr>
          <Tablerow name="eric" nickname="douche" />
          <Tablerow  />
          <Tablerow name="Terri" nickname="McTerrison" />
          </table>
      </div>
    );
  }
}

export default App;
