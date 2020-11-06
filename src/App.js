import React from 'react';
import './App.css';
import './assets/css/style.css';
import './assets/css/sidebar.css';
import {Route, Switch, Router} from 'react-router-dom';
import Landing from "./components/landing";
import Dashboard from "./components/dashboard";
import CreateAccount from './components/createAccount';
import Signup from './components/signup';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={CreateAccount} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>   

    </div>
  );
}

export default App;
