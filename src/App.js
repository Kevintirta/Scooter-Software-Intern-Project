import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from './containers/HomePage/HomePage'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*" status={404}>
            <h1>Error</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
