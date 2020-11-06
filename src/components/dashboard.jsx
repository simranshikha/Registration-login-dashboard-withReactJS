import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import TopNavbar from './top-navbar';
import SideBar from './sidebar';
import UserDetails from './userDetails';
import Tabs from './tab';

const Dashboard = ({match}) => {
        return ( 
            <React.Fragment>             
                <TopNavbar />
                <div className="container-fluid dashboard">
                    <div className="row">
                        <div className="col-12 col-md-2">                            
                            <SideBar />
                        </div>
                        <div className="col-12 col-md-10">
                            <div className="contian-wrapper">
                                <h3>Admin Dashboard</h3>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                                        <li class="breadcrumb-item active" aria-current="page">User</li>
                                    </ol>
                                </nav>
                                <div className="contain">
                                    <Tabs />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
}
 
export default Dashboard;