import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from "./pages/home/Home";
import './App.scss'
import Register from "./pages/register/Register";
import Login from './pages/login/Login'
import Watch from './pages/watch/Watch'



const App = () => {
  return <React.Fragment>
    <Router>

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/movies'>
          <Home type="movies" />
        </Route>

        <Route path='/series'>
          <Home type="series" />
        </Route>

        <Route path='/watch'>
          <Watch />
        </Route>

      </Switch>

    </Router>
  </React.Fragment>
};

export default App;