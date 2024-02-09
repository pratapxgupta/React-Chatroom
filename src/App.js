import { useEffect, useState } from "react";
import {
  getDatabase,
  push,
  ref,
  set,
  onChildAdded,
  update,
} from "firebase/database";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);

  const [msg, setMsg] = useState("");
  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
    });
  }, []);

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, { name, message: msg });

    setMsg("");
  };

  return (
    <div>
      {name ? null : (
        <div className="mainLogin">
          <h2>Real Time Chat Application</h2>
          <input
            type="text"
            placeholder="Enter name to start a chat .... 👍"
            onBlur={(e) => setName(e.target.value)}
          ></input>
        </div>
      )}
      {name ? (
        <div>
          <div className="userName">
            <h3>User: {name}</h3>
          </div>
          <div className="chat-container">
            {chats.map((c, i) => (
              <div
                key={i}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chatbox ">
                  <strong>{c.name}:</strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btm">
            <input
              type="text"
              onInput={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="Enter your chat"
            ></input>
            <button onClick={(e) => sendChat()}>Send</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
