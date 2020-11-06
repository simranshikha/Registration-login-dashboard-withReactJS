import React, { Component } from 'react';

class Sidebar extends Component {
    state = { 
        sideMenu: [
            {
                "title": "Dashboard",
                "icon": "fa fa-tachometer"
            },
            {
                "title": "Theme",
                "icon": "fa fa-"
            },
            {
                "title": "Calander",
                "icon": "fa fa-"
            },
            {
                "title": "Messages",
                "icon": "fa fa-"
            },
            {
                "title": "Learning paths",
                "icon": "fa fa-"
            },
            {
                "title": "Users",
                "icon": "fa fa-user",
                'action': 'active'
            },
            {
                "title": "Commincations",
                "icon": "fa fa-"
            },
            {
                "title": "Courses",
                "icon": "fa fa-"
            },
            {
                "title": "Assessment",
                "icon": "fa fa-"
            },
            {
                "title": "Annunchments",
                "icon": "fa fa-"
            },
            {
                "title": "Discussions",
                "icon": "fa fa-"
            },
            {
                "title": "Organization",
                "icon": "fa fa-"
            },
            {
                "title": "Human Resource",
                "icon": "fa fa-"
            }
        ]
     }
    render() { 
        return ( 
            <div id="sidebar-wrapper">
                <div class="list-group list-group-flush">
                {this.state.sideMenu.map((menu, i) => (    
                    <a href="#" className={`${menu.action} list-group-item list-group-item-action`}>
                        <i className={`${menu.icon} dash-icon`}></i>
                        {menu.title}</a>
                   ))}
                </div>
            </div>
         );
    }
}
 
export default Sidebar;