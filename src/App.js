import React from 'react';
import './App.css';
import Home from './Home/Home';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      < div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/notFound">
            <NotFound />
          </Route>
          <Route path="/:details">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router >

  )
}

export default App;


