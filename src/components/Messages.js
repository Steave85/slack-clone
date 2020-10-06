import React from 'react';
import "./../styles/Messages.css";

function Messages({props}) {
    const { message, timestamp, user, user_image } = props;
    const datetime = new Date(timestamp?.toDate()).toUTCString();
    return (
        <div className="message">
            <img src={user_image} alt={user} />
            <div className="message__info">
                <h4>
                    {user} : <span className="message__timestamp">{datetime}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages;
