import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from "../common/form";
import rockstar from '../assets/Rockstar-guru-Briha.png';
import Welcome from './welcome';

class CreateAccount extends Form {
    state = {
        data: {registering: '', firstName: '', lastName: '', organization: '', number: ''},
        errors: {},        
        redirectToReferrer: false
    };

    schema = {
        registering: Joi.string().required().label('Regitering'),
        firstName: Joi.string().required().label('First Name'),
        lastName: Joi.string().required().label('Last Name'),
        organization: Joi.string().required().label('Organization'),
        number: Joi.number().required().min(10).label('Number'),
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
            return <Redirect to="/signup" />
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
                            <p className="mobile-text">Register for Course site</p>
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput('registering', 'Registering as', 'fa fa-user')}
                                {this.renderInput('firstName', 'First Name')}
                                {this.renderInput('lastName', 'Last Name')}
                                {this.renderInput('organization', 'Organization')}                    
                                {this.renderInput('number', 'Number')}
                                {this.renderButton("Next")}
                            </form>
                            <div className="footer-wrapper">
                                    <p>Already have an account? <Link to="/login" className="yellow-text">Sign in</Link></p>
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
 
export default CreateAccount;