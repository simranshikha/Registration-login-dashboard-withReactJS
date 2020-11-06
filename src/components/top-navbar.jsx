import React, { Component } from 'react';

class TopNav extends Component {
    state = { 
        data: []
    }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><span className="pink">A<span className="orange">B</span>C</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">                    
                    <form className="form-inline mr-auto">
                        <input className="form-control mr-sm-2 search" type="search" placeholder="Search here" aria-label="Search" />
                    </form>
                    <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i class="fa fa-envelope"></i> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fa fa-bell" aria-hidden="true"></i></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default TopNav;