import React, { useState } from 'react';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { name: 'Visitor', message: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Call the Flask backend
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      const botMessage = { name: 'Kirsy', message: data.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }

    setInputValue('');
  };

  return (
    <div className={`chatbox ${isOpen ? 'chatbox--active' : ''}`}>
      <div className="chatbox__header" onClick={toggleChatbox}>
        <h4>Have a question about me?</h4>
      </div>
      {isOpen && (
        <div className="chatbox__content">
          <div className="chatbox__messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.name === 'Visitor' ? 'user-message' : 'bot-message'}>
                <strong>{msg.name}:</strong> {msg.message}
              </div>
            ))}
          </div>
          <div class="chatbox__footer">
          <input
            type="text"
            placeholder="Write a message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
           </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
