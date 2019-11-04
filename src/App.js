import React from 'react';
import './App.css';
import Home from './Home/Home';
import Details from './Details/Details';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      < div className="App" >
      </div >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Details">
          <Details />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;


