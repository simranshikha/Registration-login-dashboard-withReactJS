import React, { useState } from 'react';
import Joi from 'joi-browser';
import {Redirect, Link} from 'react-router-dom';
import Form from '../common/form';
import rockstar from '../assets/Rockstar-guru-Briha.png';
import Welcome from './welcome';

class Login extends Form {
    state = {
        data: {domain: '', email: '', password: ''},
        errors: {},        
        redirectToReferrer: false
    };

    schema = {
        domain: Joi.string().required().label('Domain'),
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password'),
    }

    doSubmit = () =>{
        //call server
        console.log('Form submitted');
        this.setState({
            redirectToReferrer: true
        })
    };
    

    render() { 
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer) {
            return <Redirect to="/dashboard" />
        }

        return ( 
            <div className="body-wrapper">
                <div className="container">
                    <img src={rockstar} className="rockstar" />
                    <div className="row">
                        <div className="col-12 col-md-5 offset-md-1">
                            <Welcome />
                        </div>
                        <div className="col-12 col-md-6">        
                            <div className="form-wraaper">
                                <h1 className="pink form-title">Please login to your account</h1>
                                <form onSubmit={this.handleSubmit}>
                                    {this.renderInput('domain', 'Domain')}
                                    {this.renderInput('email', 'Email')}
                                    {this.renderInput('password', 'Password')}
                                    {this.renderButton("Login")}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
        );
    }
}
 
export default Login;