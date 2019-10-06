import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './signup.styles.css';
import {fetchSignupSuccess} from '../../redux/signup-login/signup-login.actions';


const Signup = ({ fetchSignupSuccess}) => {

    const [user, setUser] = useState({});
    useEffect(() => {
        fetch('/allFromUser')
            .then(res => res.json())
            .then(res => { return setUser(res) })
            .then(response => (console.log({ response })))
            .catch((error) => (console.log(error)));
    },
        []
    );

    var emailsArray = [];
    //   console.log(returnVal);
    for (var i = 0; i < user.length; i++) {
        var allEmails = Object.values(user)[i].email;
        emailsArray.push(allEmails);        
    }
    console.log('all emails: ' + emailsArray);   
    
    console.log('user.length ' + user.length)    

    const [val, setVal] = useState({
        username: '',
        prefix: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const submit = (e) => {
        e.preventDefault();
        var data = {
            username: val.username,
            prefix: val.prefix,
            email: val.email,
            password: val.password,
            confirmpassword: val.confirmpassword
        }
        
        fetchSignupSuccess(data);

        if (val.password !== val.confirmpassword) {
            alert('Password does not match!');
            return;
        } 
      
        if (emailsArray.indexOf(val.email) > -1) {
            alert('Sorry, such email already exists');                        
        } 
    }
    

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 col-sm-8 justify-content-center border rounded mt-md-5 mt-0 mb-md-5 p-5'>
                    <h3 className='text-center mt-3 mb-3'>Create an Account</h3>
                    {
                       
                    }
                    <form onSubmit={submit} method="POST">
                        <div className='form-group' >
                            <label>Prefix:</label>
                            <input
                                type='text'
                                className="form-control"
                                name="prefix"
                                placeholder='Prefix'
                                value={val.prefix}
                                onChange={(e) => setVal({ ...val, prefix: e.target.value })}                                
                                required
                            />
                        </div>
                        <div className='form-group' >
                            <label>User Name:</label>
                            <input
                                type='text'
                                className="form-control"
                                name="username"
                                placeholder='Enter Your Name'
                                value={val.username}
                                onChange={(e) => setVal({ ...val, username: e.target.value })}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input
                                type='text'
                                className="form-control email"
                                name='email'
                                placeholder='Email'
                                value={val.email}
                                onChange={(e) => setVal({ ...val, email: e.target.value })}                                
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input
                                type='text'
                                className="form-control"
                                name='password'
                                placeholder='Password'
                                value={val.password}
                                onChange={(e) => setVal({ ...val, password: e.target.value })}                                
                                required />
                        </div>
                        <div className='form-group'>
                            <label>Confirm Password:</label>
                            <input
                                type='text'
                                className="form-control"
                                name='confirmpassword'
                                placeholder='confirmpassword'
                                value={val.confirmpassword}
                                onChange={(e) => setVal({ ...val, confirmpassword: e.target.value })}
                                required />
                        </div>
                        <input type="submit" className="btn btn-lg btn-danger" value="Submit" />
                        
                    </form>
                </div>
            </div>
        </div>
    );
       
};
const mapDispatchToProps = dispatch=>({
    fetchSignupSuccess: (val) => dispatch(fetchSignupSuccess(val))
});
export default connect(null, mapDispatchToProps)(Signup);