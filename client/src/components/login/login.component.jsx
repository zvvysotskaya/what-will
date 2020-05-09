import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {withRouter}from'react-router-dom'

import { fetchSignin } from '../../redux/signup-login/signup-login.actions';





const Login = ({ fetchSignin, history, resp }) => {
    
    const [redir, setRedir] = useState(false);
    
    const [val, setVal] = useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        setTimeout(() => document.getElementById('inp').focus(),90)
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: val.email,
            password: val.password
        }

        fetchSignin(data);
        if (val.email === '' || val.password === '') {
            document.getElementById('validationForm').innerHTML = '<p>Fields connot be empty!</p>';
            document.getElementById('validationForm').style.color = 'magenta';
            return;
        }
        
        else {
            setRedir(false)
            
        }
        console.log('redirects: ' + redir)
    }
          
    const clearVal = () => { 
        document.getElementById('validationForm').innerHTML = '';        
        setVal({
            email: '',
            password: ''
        }); 
    }
    const createAccount = (e) => {
        e.preventDefault()
        return history.push('/signupPage')
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 col-sm-8 justify-content-center border rounded mt-md-5 mt-0 mb-md-5 p-5 bg-yellow'>
                    <div className='col-md-12 d-flex justify-content-between'>
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                        <div className="blue_flower img-fluid" />
                    </div>
                    <h3 className='text-center mt-3 mb-3'>Login</h3>
                    <p id='validationForm'></p>
                    {resp}
                    <form onSubmit={handleSubmit} method='POST'>

                        
                        <div className='form-group'>
                            <label>Email:</label>
                            <input
                                type='text'
                                className="form-control"
                                name='email'
                                placeholder='email'
                                value={val.email}
                                onChange={e => setVal({ ...val, email: e.target.value })}
                                id='inp'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input
                                type='text'
                                className="form-control"
                                name='password'
                                placeholder='Enter Your Password'
                                value={val.password}
                                onChange={e => setVal({...val,  password: e.target.value })}                                
                            />
                        </div>
                        <div className='form-group py-4 text-center'>
                        <button type="submit"  className="btn btn-lg btn-danger">Login</button>&nbsp;
                        <button type='submit' onClick={clearVal} className="btn btn-lg btn-danger">Reset</button>

                            <p className='py-4'>Do not have an account?</p>
                            <button type='button' onClick={createAccount}>Create Account</button>
                        </div >
                    </form>
                </div>
            </div>
        </div>);
}
const mapPropsToState = state => ({
    resp: state.account.responseSignin
})
const mapDispatchToProps = dispatch => ({
    fetchSignin: (user) => dispatch(fetchSignin(user))
    //  fetchAllFromUserRegister: () => dispatch(fetchAllFromUserRegister())
});


export default connect(mapPropsToState, mapDispatchToProps)(withRouter(Login));
