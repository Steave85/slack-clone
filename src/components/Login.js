import React from 'react';
import { Button } from "@material-ui/core";
import {auth, provider} from '../config/Firebase';
import { useStateValue } from './../StateProvider';
import { actionTypes } from './../Reducer';
import './../styles/Login.css';

function Login() {
    const [state, dispatch] = useStateValue();
    const slackLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1200px-Slack_Technologies_Logo.svg.png'
    const signIn = ()=>{
        auth.signInWithPopup(provider)
            .then(result =>{
                dispatch({
                    ...state,
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch((error)=>{
                console.error(error);
            })   
    }    
    return (
        <div className="login"> 
            <div className="login__container">
                <img src={slackLogo} alt='slack logo'/>
            <h1>Sign in to Slack Clone Chat</h1>
            <p>slack-clone.slack.com</p>
            <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
