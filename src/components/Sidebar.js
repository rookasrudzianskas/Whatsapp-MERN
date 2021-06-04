import React from 'react';
import "./styles/Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                    <Avatar src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Start a new chat..."/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;
