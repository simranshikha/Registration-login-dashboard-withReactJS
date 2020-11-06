import React, { Component } from 'react';
import UserDetails from './userDetails';
import SearchFilter from './search-filter';

class Tabs extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="tabs">
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-trainer-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Trainer</a>
                      <a class="nav-item nav-link" id="nav-learner-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Learner</a>
                    </div>
                  </nav>
                  <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-trainer-tab">
                      <SearchFilter />
                      <UserDetails />
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-leaner-tab">
                     No Data
                    </div>
                  </div>
            </React.Fragment>
         );
    }
}
 
export default Tabs;