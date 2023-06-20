import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        username: randomUser,
        message: currentMessage,
        likes: 0
      };

      setMessages([...messages, newMessage]);
      setCurrentMessage("");
    }
  };
  const likeMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className="text-message">
          <span className="username">{message.username}: </span>
          <span>{message.message}</span>
          <button onClick={() => likeMessage(index)} className="likebutton">
            Like ({message.likes})
          </button>
        </div>
      ))}
      <div className="chatbox">
        <input
          type="text"
          value={currentMessage}
          className="input-text"
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message"
        />
        <button onClick={sendMessage} className="sendbutton">
          Send
        </button>
      </div>
    </>
  );
};

export default Chat;
