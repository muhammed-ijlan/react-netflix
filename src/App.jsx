import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Home from "./pages/home/Home";
import './App.scss'
import Register from "./pages/register/Register";
import Login from './pages/login/Login'
import { AuthContext } from './authContext/AuthContext'
import Watch from './pages/watch/Watch'


const App = () => {
  const { user } = useContext(AuthContext)

  return <React.Fragment>
    <Router>

      <Switch>

        <Route exact path='/'>
          {user ? <Home /> : <Redirect to='/register' />}
        </Route>

        <Route path='/register'>
          {!user ? <Register /> : <Redirect to='/' />}
        </Route>

        <Route path='/login'>
          {!user ? <Login /> : <Redirect to='/' />}
        </Route>
        {

          user && (
            <>
              <Route path='/movies'>
                <Home type="movie" />
              </Route>

              <Route path='/series'>
                <Home type="series" />
              </Route>

              <Route path='/watch'>
                <Watch />
              </Route>
            </>
          )
        }
      </Switch>

    </Router>
  </React.Fragment>
};

export default App;