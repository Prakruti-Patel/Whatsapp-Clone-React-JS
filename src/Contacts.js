import React, { useEffect, useState  } from "react";
import './Appbody.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import Chats from './Chats';

//import db from './Firebase';

//import ContactChats from './ContactChats';

function Contacts() {
/*const [rooms, setRooms] = useState([]);
  useEffect(()=>{
    db.collection("rooms").onSnapshot(snapshot=>{
      setRooms(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  },[])*/




  return (
    <div className='sidebar'>
      <div className='bar-header'>
        <Avatar />
        <div className='bar-header-right'>

          <IconButton>  <DonutLargeIcon /> </IconButton>
          <IconButton>  <ChatIcon /> </IconButton>
          <IconButton>  <MoreVertIcon /> </IconButton>


        </div>
      </div>

      <div className='search'>
        <div className='search-content'>
          <SearchIcon />
          <input type='text' placeholder='Search here' />
        </div>
      </div>

      <div className='chats'>
        <Chats addnewchat />
        
        
        




        <Chats />
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>





      </div>
    </div>

  );
}

export default Contacts;
