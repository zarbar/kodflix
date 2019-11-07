import React from 'react';
import './App.css';
import Home from './Home/Home';
import Details from './Details/Details';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      < div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:details">
          <Details />
        </Route>
      </div>
    </Router >
  )
}


export default App;


