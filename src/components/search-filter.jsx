import React, { Component } from 'react';

const SearchFilter = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <form className="form-search input-group">
                            <input className="form-control mr-sm-2 search" type="search" placeholder="Search here" aria-label="Search" />
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2"><i class="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-3 my-lg-0">
                        <div className="inline-filer">
                            <i class="fa fa-filter"></i>
                            <a href="#">+Add Trainer</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SearchFilter;