import React, { useState,useEffect } from 'react';

import './signup.styles.css';


const Signup = () => {
    
        const [user, setUser] = useState({ email: '' });
        useEffect(() => {
       
        },
            []
        );
        
    const fff = fetch('/allFromUser')
        .then(res => res.json())
        .then(res => (setUser(res)))
        .then(response => (console.log(response)))
        .catch((error) => (console.log(error)));
    setUser(fff.email);
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
        fetch('/signUp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            bodyUsed: true,
            body: JSON.stringify(data)

        })
            .then(res => (res.json()))
            .then(res => (console.log(res)))
            .catch((error) => (console.log(error)));

        if (val.password !== val.confirmpassword) {
            alert('Password does not match');
            return;
        } else {
            alert('Pasword match! Success!');
        }

        user.email.map(user => (<li key={user.id}>
            <p >{user.email}</p>
            </li>)
        )   
       
        if (val.email===user.email) {
            alert('the Email already exists');
            console.log('the user email: ' + user.email);
            
        } else {
            alert('email not found');
            console.log('the user email: ' + user.email);
           
            }
        
        e.target.reset();     
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
export default Signup;