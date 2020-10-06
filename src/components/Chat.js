import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/Firebase';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Messages from './Messages';
import ChatInput from './ChatInput';
import "./../styles/Chat.css";

function Chat() {
    const { roomId = 'FBEL8pmjCMMwIWxRZPtn' } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(() => {
        if (roomId) {
          db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomDetails(snapshot.data())
                ));
        }
        db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => (
                setRoomMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            ))
    }, [roomId]);
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header-left">
                    <h4 className="chat__ChannelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__header-right">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {
                    (roomMessages) && roomMessages.map((message,index)=>(<Messages props={message} key={index}/>))
                } 
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat;
