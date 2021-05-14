import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import Random from "./features/randomnumber/Random";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavLink to="/">Counter</NavLink>
      |
      <NavLink to="/random">Random Number Generator</NavLink>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route component={Counter} exact path="/" />
          <Route component={Random} exact path="/random" />
        </Switch>
      </header>
    </div>
  );
}

export default App;
