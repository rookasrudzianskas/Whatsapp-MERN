import './App.css';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {useEffect} from "react";
import Pusher from "pusher-js";

function App() {

    useEffect(() => {

        const pusher = new Pusher('be01aa18ea94a4ff1264', {
            cluster: 'eu'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (data) => {
            alert(JSON.stringify(data));
        });
    }, []);

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
