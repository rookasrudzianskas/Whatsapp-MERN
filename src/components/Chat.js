import React, {useState} from 'react';
import "./styles/Chat.css";
import { IconButton, Avatar } from '@material-ui/core';
import {AttachFile, InsertEmoticon, Mic, MicOutlined, MoreVert, SearchOutlined} from '@material-ui/icons';

const Chat = () => {

    const [input, setInput] = useState();

    const sendMessage = () => {

    }

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
                <p className="chat__message ">
                    <span className="chat__name">Rokas</span>

                    This is a message  or something like that
                    <span className="chat__timestamp">
                        23rd 2020
                    </span>
                </p>

                <p className="chat__message chat__receiver">
                    <span className="chat__name">Rokas</span>

                    This is a message  or something like that
                    <span className="chat__timestamp">
                        23rd 2020
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Rokas</span>

                    This is a message  or something like that
                    <span className="chat__timestamp">
                        23rd 2020
                    </span>
                </p>

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
