import React from 'react';

const Input = ({ name, value, onChange, placeholder, error, icon }) => {
    return ( 
        <React.Fragment>
            <div className="form-group input-group">            
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2"><i className={`fa fa-user`} aria-hidden="true"></i></span>
            </div>
            <input 
            value={value} 
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            type="text" 
            className="form-control input-custom"/>
        </div>
        { error && <div className="alert alert-danger">{error}</div> }
        </React.Fragment>
    );
}
 
export default Input;