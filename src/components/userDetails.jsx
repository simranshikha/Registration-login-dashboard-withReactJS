import React, { Component } from 'react';

class UserDetails extends Component {
    state = { 
        users: [
            {
                "code": '1124',
                "photo": 'fa fa-user',
                "name": "Aman Singh",
                "phone_no": "+0123 456 789",
                "courses": "Lorem Ipsum",
                "role": "Lorem Ipsum",
                "update": "update"
            },
            {
                "code": '1125',
                "photo": 'fa fa-user',
                "name": "Ashish Kumar",
                "phone_no": "+0123 456 789",
                "courses": "Lorem Ipsum",
                "role": "Lorem Ipsum",
                "update": "update"
            },
            {
                "code": '1125',
                "photo": 'fa fa-user',
                "name": "Vivek Verma",
                "phone_no": "+0123 456 789",
                "courses": "Lorem Ipsum",
                "role": "Lorem Ipsum",
                "update": "update"
            },
            {
                "code": '1125',
                "photo": 'fa fa-user',
                "name": "Akshat Jain",
                "phone_no": "+0123 456 789",
                "courses": "Lorem Ipsum",
                "role": "Lorem Ipsum",
                "update": "update"
            },            
            {
                "code": '1125',
                "photo": 'fa fa-user',
                "name": "Nidhi Singh",
                "phone_no": "+0123 456 789",
                "courses": "Lorem Ipsum",
                "role": "Lorem Ipsum",
                "update": "update"
            },                     
            {
                "code": '1125',
                "photo": 'fa fa-user',
                "name": "Ankita Kaira",
                "phone_no": "+0123 456 789",
                "courses": "Lorem Ipsum",
                "role": "Lorem Ipsum",
                "update": "update"
            }
        ]
    };

    render() { 
        const {users} = this.state;
        return ( 
            <React.Fragment>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Phone no.</th>
                                <th>Courses</th>
                                <th>Role</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user, i) => (                   
                                <tr key={i} className="item-block">
                                    <td><span>{user.code}</span></td>
                                    <td><i class={user.photo} aria-hidden="true"></i></td>
                                    <td><span>{user.name}</span></td>
                                    <td><span>{user.phone_no}</span></td>
                                    <td><span>{user.courses}</span></td>
                                    <td><span>{user.role}</span></td>
                                    <td><span className="yellow-body">{user.update}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
         );
    }
}
 
export default UserDetails;