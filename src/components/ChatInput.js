import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import firebase from 'firebase';
import { useStateValue } from './../StateProvider';
import { db } from '../config/Firebase';
import './../styles/ChatInput.css';

function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = (e)=>{
        e.preventDefault();
        (channelId) && (
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                user_image: user.photoURL
            })
        )
        e.target.previousSibling.value='';
    }
    return (
        <div className="chatInput">
            <form>
                <input name='message-box' placeholder={`Message #${channelName}`}
                       onChange={e=>setInput(e.target.value)}/>
                <Button type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput
