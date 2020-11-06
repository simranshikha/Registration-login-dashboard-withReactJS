import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import rockstar from '../assets/Rockstar-guru-Briha.png';
import Welcome from './welcome';
import CreateAccount from './createAccount';
import Signup from './signup';
import Login from './login';

const Landing = ({match}) => {
    return ( 
        <div className="body-wrapper">
            <div className="container">
                <img src={rockstar} className="rockstar" />
                <div className="row">
                    <div className="col-12 col-md-5 offset-md-1">
                        <Welcome />
                    </div>
                    <div className="col-12 col-md-6">        
                        <Switch>
                            <Route path={match.url} exact={true} component={CreateAccount} />
                            <Route path={`${match.url}/signup`} exact={true} component={Signup} />
                            <Route path={`${match.url}/login`} exact={true} component={Login} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default Landing;