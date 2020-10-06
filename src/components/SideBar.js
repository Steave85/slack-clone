import React, {useState, useEffect} from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SideBarOption from './SideBarOption';
import { db } from '../config/Firebase';
import './../styles/SideBar.css';
import { useStateValue } from './../StateProvider';

function SideBar() {

    const[channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot=>(
            setChannels(snapshot.docs.map(doc=>({
                id: doc.id,
                name: doc.data().name
            })))
        ))
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
               <div className="sidebar__info">
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
               </div>
               <CreateIcon />
            </div>
            <SideBarOption Icon={InsertCommentIcon} title='Threads'/>
            <SideBarOption Icon={InboxIcon} title='Mentions & reactions'/>
            <SideBarOption Icon={DraftsIcon} title='Saved items'/>
            <SideBarOption Icon={BookmarkBorderIcon} title='Channel browser'/>
            <SideBarOption Icon={PeopleAltIcon} title='People & user groups'/>
            <SideBarOption Icon={AppsIcon} title='Apps'/>
            <SideBarOption Icon={FileCopyIcon} title='File browser'/>
            <hr /> 
            <SideBarOption Icon={ExpandLessIcon} title='Show less'/>
            <hr /> 
            <SideBarOption Icon={ExpandMoreIcon} title='Show less'/>
            <SideBarOption Icon={AddIcon} title='Add Channel' addChannelOption={true}/>
            {
                channels.map((channel)=>{
                    return <SideBarOption title={channel.name} key={channel.id} id={channel.id} addChannelOption={false}/>
                })
            }
        </div>
    )
} 
export default SideBar
