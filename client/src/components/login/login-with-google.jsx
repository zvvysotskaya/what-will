import React from 'react';
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

require('dotenv').config();

const ButtonLoginWithGoogle = ({ history, ...props}) => {
    const responseGoogle = (response) => {
        console.log(response);
        console.log('Access token: '+ response.accessToken)
        if (response.accessToken !== '') {
            history.push('/')
        }
    }

    return(<div className=''>
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_LOGIN}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            {...props}
        />
    </div>)
}
    


export default withRouter(ButtonLoginWithGoogle);
