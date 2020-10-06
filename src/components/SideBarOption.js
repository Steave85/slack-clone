import React from 'react';
import { useHistory } from 'react-router-dom'
import { db } from '../config/Firebase';
import './../styles/SideBarOption.css';

function SideBarOption({ Icon, title, id, addChannelOption}) {
    const history = useHistory();
    const selectChannel = ()=>{
        if(id){
            history.push(`/room/${id}`);
        } else{
            history.push(title);
        }
    }
    const addChannel = () =>{
        const channelName = prompt('Please enter the chennel name.');
        if(channelName){
            db.collection('rooms').add({
                name: channelName
            });
        }
    }
    return (
        <div className='sidebar-option' onClick={addChannelOption ? addChannel : selectChannel }>
            {Icon && <Icon className='sidebar-option-icon'/>}
            { Icon ? (<h3>{title}</h3>):(
                <h3 className='sidebar-option-channel'>
                    <span className='sidebar-option__hash'>#</span>{title} 
                </h3>
            )}
        </div>
    )
}

export default SideBarOption
