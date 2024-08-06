import { Avatar, IconButton } from "@mui/material";
import React from "react";
import './Appbody.css';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';


function Chatbody() {
    return (
        <div className="chatbox">
            <div className="chat-header">
                <Avatar />
                <div className="chat-header-info">
                    <h3>Room Name</h3>
                    <p>Last seen</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton>
                        < MoreVertIcon />
                    </IconButton>
                </div>

            </div>
            <div className="chat_msg">
                <p className="chat_me chat_reciever">
                    <span className="chat_name">Prakruti</span>
                    This is test Message
                    <span className="chat_time">12.40 PM</span>


                </p>

                <p className="chat_me">
                    <span className="chat_name">Rency</span>
                    This is test Message
                    <span className="chat_time">12.40 PM</span>


                </p>


            </div>
            <div className="chat_footer">
                <IconButton> <EmojiEmotionsIcon /></IconButton>
             <IconButton><AttachFileIcon/></IconButton>
              
              <form>
                <input type='text' placeholder="Type your message" />
                <input type='submit' />
              </form>
              <IconButton> <MicIcon  /></IconButton>
             
            </div>

        </div>
    )
}
export default Chatbody;