import React, {useState} from 'react';
import "./styles/Chat.css";
import { IconButton, Avatar } from '@material-ui/core';
import {AttachFile, InsertEmoticon, Mic, MicOutlined, MoreVert, SearchOutlined} from '@material-ui/icons';
import axios from "../axios";
const Chat = ({messages}) => {

    const [input, setInput] = useState();
    const sendMessage = (e) => {
        e.preventDefault();
        axios.post('/messages/new', {
            message: input,
            name: "Dart Weider",
            timestamp: "Far away in the galaxy",
            received: false,
        });
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                <p className={`chat__message ${message.received && "chat__receiver"}`}>
                    <span className="chat__name">{message.name}</span>

                    {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                </p>

                ))}

            </div>

            <div className="chat__footer">
                <InsertEmoticon />

                <form action="">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}>Send Message</button>
                </form>

                <MicOutlined />
            </div>
        </div>
    );
};

export default Chat;
