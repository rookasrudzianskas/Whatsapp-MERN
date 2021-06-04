import './App.css';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {useEffect, useState} from "react";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('/messages/sync').then((response) => {

            setMessages(response.data);

        })
    }, []);

    useEffect(() => {

        const pusher = new Pusher('be01aa18ea94a4ff1264', {
            cluster: 'eu'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (newMessage) => {
            // alert(JSON.stringify(newMessage));
            setMessages([...messages, newMessage] );
        });

        // unsubscribes from the listener, because we do not want to keep the old listerner, just new one attached
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };

    }, [messages]);

    console.log(messages);

  return (
    <div className="app">
        <div className="app__body">
            <Sidebar />
            <Chat />
        </div>
    </div>
  );
}

export default App;
