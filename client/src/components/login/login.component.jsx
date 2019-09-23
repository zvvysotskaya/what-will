import React from 'react';

const Login = () => (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-5 col-sm-8 justify-content-center border rounded mt-md-5 mt-0 mb-md-5 p-5'>
                <h3 className='text-center mt-3 mb-3'>Login</h3>
                <form >
                    <div className='form-group'>
                        <label>Email:</label>
                        <input type='text' className="form-control" name='email' placeholde='email' required />
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input type='text' className="form-control" name='password' placeholde='email' required />
                    </div>
                    <button type="submit" className="btn btn-lg btn-danger">Login</button>
                </form>
            </div>
        </div>
    </div>
);
export default Login;