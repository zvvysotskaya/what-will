import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchSignin } from '../../redux/signup-login/signup-login.actions';
import CustomButton from '../custom-button/custom-button.component';
import ButtonLoginWithGoogle from './login-with-google';
const Login = ({ fetchSignin, history, resp }) => {  
    
    const [val, setVal] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        setTimeout(() => {
            try {
                document.getElementById('inp').focus()
            } catch (er) {
                console.log(er)
            }           
        }, 90)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: val.email,
            password: val.password
        }
        fetchSignin(data);    
    }
    
    const clearVal = () => {              
        setVal({
            email: '',
            password: ''
        }); 
    }
    
    (function () {
        if (resp === 'Congrats!') {            
            setTimeout(() => {
                return window.location = '/shoppingPage'
            }, 1500)
        }
    })()

    const createAccount = (e) => {
        e.preventDefault()
        return history.push('/signupPage')
    }

    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-4 text-center justify-content-center'>
                    <div className='create_shopping_img my-md-5' />                  
                </div>
                <div className='col-md-4 justify-content-center border rounded mt-md-5 mt-0 mb-md-5 p-5 bg-yellow'>                    
                    <h3 className='text-center'>Login</h3>
                    <div className='col-md-12 d-flex justify-content-between'>
                       
                    </div>                    
                    <div className={`alert text-center 
                                    ${resp === 'Password cannot be empty' || resp === 'Email cannot be empty' ||
                                    resp === 'Invalid pasword / email!' ? 'alert-danger' : ''}
                                    ${resp === 'Congrats!' ? 'alert-info': ''}
                                    `}
                >                    
                        <div>{resp}</div>                    
                    </div>
                    <form onSubmit={handleSubmit} method='POST'>                        
                        <div className='form-group'>
                            <label>Email:</label>
                            <input
                                type='email'
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
                                type='password'
                                className="form-control"
                                name='password'
                                placeholder='Enter Your Password'
                                value={val.password}
                                onChange={e => setVal({...val,  password: e.target.value })}                                
                            />
                        </div>
                        <div className='form-group py-4 text-center'>
                            <div className='d-md-flex'></div>
                            <div className='mb-4'>
                                <ButtonLoginWithGoogle className='btn-block' />
                            </div>
                            <CustomButton type="submit" className="blueBtn btn-block">Login</CustomButton>&nbsp;
                            <CustomButton type='submit' onClick={clearVal} className="redBtn btn-block">Reset</CustomButton>                 
                            <p className='py-4'>Do not have an account?</p>
                            <CustomButton className='yellowBtn' type='button' onClick={createAccount}>Create Account</CustomButton>
                        </div >
                    </form>
                </div>
                <div className='col-md-4'>
                    <div className='create_me_img mt-md-5 my-md-5' />                    
                </div>
                
                
                
                
            </div>
        </div>);
}

const mapPropsToState = state => ({
    resp: state.account.responseSignin
})
const mapDispatchToProps = dispatch => ({
    fetchSignin: (user) => dispatch(fetchSignin(user))    
});

export default connect(mapPropsToState, mapDispatchToProps)(withRouter(Login));
