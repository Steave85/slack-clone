import React from 'react';
import { Button } from "@material-ui/core";
import {auth, provider} from './Firebase';
import './Login.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const slackLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1200px-Slack_Technologies_Logo.svg.png'
    const signIn = ()=>{
        auth.signInWithPopup(provider)
            .then(result =>{
                dispatch({
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
                <img src={slackLogo} />
            <h1>Sign in to Avenger's Hero Chat</h1>
            <p>avengers.slack.com</p>
            <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
