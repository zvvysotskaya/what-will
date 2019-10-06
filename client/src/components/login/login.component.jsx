import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { fetchSigninSuccess } from '../../redux/signup-login/signup-login.actions';





const Login = ({ fetchSigninSuccess }) => {
    const [user, setUser] = useState([])
    const [redir, setRedir] = useState(false);
    useEffect(() => {
        fetch('/AllFromUser')
            .then(res => (res.json()))
            .then(res => (setUser(res)))

            .catch(error => (console.log(error)));

    }, [])
    console.log('User.length: ' + user.length)
    let emailArr = [];
    let passwordArr = [];
    for (let i = 0; i < user.length; i++) {
        let allEmails = Object.values(user)[i].email;
        let allPasswords = Object.values(user)[i].password;
        emailArr.push(allEmails);
        passwordArr.push(allPasswords);
    }
    console.log('all emails: ' + emailArr);
    console.log('all passwords: ' + passwordArr)
    console.log('redirect is: ' + redir);
    
    const [val, setVal] = useState({
        email: '',
        password: ''
    });  
   
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: val.email,
            password: val.password
        }

        fetchSigninSuccess(data);
        if (val.email === '' || val.password === '') {
            document.getElementById('validationForm').innerHTML = '<p>Fields connot be empty!</p>';
            document.getElementById('validationForm').style.color = 'magenta';
            return;
        }
        if (emailArr.indexOf(val.email) < 0 && val.email !== '') {
            document.getElementById('validationForm').innerHTML = '';
            alert('Sorry, such email or password does not exist');
            return;
        }
        
        if (emailArr.indexOf(val.email) > -1 && passwordArr.indexOf(val.password) > -1) {
            setRedir(true);
            document.getElementById('validationForm').innerHTML = '<p>You are logedin</p>';
            document.getElementById('validationForm').style.color = 'green';
            console.log('redirect2 is: ' + redir);

        } else {
            setRedir(false)
            
        }
        console.log('redirects: ' + redir)
    }
      //  const handleValidation = () => {
     //       let validation = true;
     //       if (val.email === '' || val.password === '') {
    //            validation = false;
    //        }
      //      return validation;
   // }
    
    const clearVal = () => { 
        document.getElementById('validationForm').innerHTML = '';        
        setVal({
            email: '',
            password: ''
        }); 
    }
    
     //   if (redir) {
     //       return <Redirect to='/' />
    //    }
        
    
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 col-sm-8 justify-content-center border rounded mt-md-5 mt-0 mb-md-5 p-5'>
                    <h3 className='text-center mt-3 mb-3'>Login</h3>
                    <p id='validationForm'></p>
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
                        <button type="submit"  className="btn btn-lg btn-danger">Login</button>&nbsp;
                        <button type='submit' onClick={clearVal} className="btn btn-lg btn-danger">Reset</button>
                    </form>
                </div>
            </div>
        </div>);
}
const mapDispatchToProps = dispatch => ({
    fetchSigninSuccess: (user) => dispatch(fetchSigninSuccess(user))
    //  fetchAllFromUserRegister: () => dispatch(fetchAllFromUserRegister())
});


export default connect(null, mapDispatchToProps)(Login);
