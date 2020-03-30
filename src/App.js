import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage/HomePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*" status={404}>
            {/* <NoMatch /> */}
            <h1>Error</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
