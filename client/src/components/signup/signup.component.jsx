import React, { useState,useEffect } from 'react';

import './signup.styles.css';


const Signup = () => {
    const [val, setVal] = useState({
        username: '',
        prefix: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    useEffect(
        () => {
            console.log("effect");
        },
        [val]
    );

    useEffect(() => {
        return () => {
            console.log("cleaned up");
        };
    }, []);
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
            alert('Success!');
            
        }
        e.target.reset();     
    }
    const [vall, setVall] = useState({
        username: '',
        prefix: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const cleanup=()=>{
        
        return setVall;
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 col-sm-8 justify-content-center border rounded mt-md-5 mt-0 mb-md-5 p-5'>
                    <h3 className='text-center mt-3 mb-3'>Create an Account</h3>
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
                        <input type="submit" className="btn btn-lg btn-danger" value="clear" onClick={cleanup} />
                    </form>
                </div>
            </div>
        </div>
    );
       
};
export default Signup;