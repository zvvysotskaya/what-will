import React, { useState } from 'react';
import { connect } from 'react-redux';

import './signup.styles.css';
import { fetchSignup} from '../../redux/signup-login/signup-login.actions';

const Signup = ({ fetchSignup, resp }) => {        
    const [val, setVal] = useState({
        username: '',        
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
        if (val.password !== val.confirmpassword) {
            alert('Password does not match!');
            return;
        }
        fetchSignup(data)               
    }
    
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 col-sm-8 justify-content-center border rounded mt-md-5 mt-0 mb-md-5 p-5'>
                    <h3 className='text-center mt-3 mb-3'>Create an Account</h3>
                    {resp}
                    <form onSubmit={submit} method="POST">                        
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
const mapStateToProps = state => ({
    resp: state.account.response
})
const mapDispatchToProps = dispatch => ({
    fetchSignup: (val) => dispatch(fetchSignup(val))    
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);