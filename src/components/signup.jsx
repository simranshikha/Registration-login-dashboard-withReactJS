import React, { Component } from 'react';
import Joi from 'joi-browser';
import {Redirect, Link} from 'react-router-dom';
import Form from '../common/form';
import rockstar from '../assets/Rockstar-guru-Briha.png';
import Welcome from './welcome';

class Signup extends Form {
    state = {
        data: {username: '', email: '', confrimEmail: '', password: '', confrimPassword: ''},
        errors: {},        
        redirectToReferrer: false
    };

    schema = {
        username: Joi.string().required().label('Username'),
        email: Joi.string().email().required().label('Email'),
        confrimEmail: Joi.string().email().required().label('Email'),
        // Joi.any().equal(Joi.ref('password')).required().options({
        //     language: {
        //       any: {
        //         allowOnly: '!!Email do not match',
        //       }
        //     } 
        //   }),
        password: Joi.string().min(3).max(15).required().label('*********'),
        confrimPassword: Joi.string().min(3).max(15).required().label('confrim password'),
        // Joi.any().valid(Joi.ref('password')).required().
        // options({ language: { any: { allowOnly: 'must match password' } } }).label('confrim password'),
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
            return <Redirect to="/login" />
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
                            <h1 className="pink form-title">Create Account</h1>
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput('username', 'Username')}
                                {this.renderInput('email', 'Email')}
                                {this.renderInput('confrimEmail', 'Confrim Email')}
                                {this.renderInput('password', '***********')}                        
                                {this.renderInput('confrimPassword', 'Confrim Password')}   
                                {this.renderButton("SignUp")}
                            </form>
                            <div className="footer-wrapper">
                                    <p>New to Bihha? <Link to="/">Create an account</Link></p>
                                    <p className="form-footer">copyright 2020 ABC All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

            
        );
    }
}
 
export default Signup;