import { useState } from "react";
import { flushSync } from "react-dom";

function MessageBoard() {

  const [messageText, setMessageText] = useState("");
  const [message, setMessage] = useState([]);

  function handleAddMessage(e) {
    // const newMessage = [...message];
    // newMessage.push(messageText);
    // setMessage(newMessage);
    e.preventDefault();
    setMessage(prev => [...prev, messageText]);
    setMessageText("");
  }

  function handleDeleteMessage(messageIndex) { //ส่งค่ามา
    const newMessage = message.filter((item, index) => index !== messageIndex);
    setMessage(newMessage);
   
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form onSubmit={handleAddMessage} class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </label>
        <button type="submit" className="submit-message-button">Submit</button>
      </form>
      <div class="board">
        {message.map((item, index) => (
          <div className="message" key={index}>
            <h1>{item}</h1>
            <button onClick={() => handleDeleteMessage(index)} className="delete-button">x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
