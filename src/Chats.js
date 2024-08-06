import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import './Appbody.css';
function Chats({ addnewchat }) {
    const[seed,setseed]=useState("");

    useEffect(()=>
    {
        setseed(Math.floor(Math.random()*5000))
    },[])
    return (
        !addnewchat ? (<div className='sidebar-chat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='chat_info'>
                <h2>React Tutorials</h2>
                <p>Last Message</p>
            </div>

        </div>) : (
            <div className='sidebar-chat'>
                <h2>Add New Chat</h2>
            </div>
        )
    )
}
export default Chats;