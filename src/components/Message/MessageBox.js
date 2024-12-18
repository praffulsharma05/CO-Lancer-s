import React, { useState } from 'react';
import './MessageBox.css';

const MessageBox = () => {
  const [messages, setMessages] = useState([
    { sender: 'client', text: 'Hello! How can I help you today?' },
    { sender: 'freelancer', text: 'Hi, I need help with my project.' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('client');
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const updatedMessages = [
      ...messages,
      { sender: currentUser, text: newMessage },
    ];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  // Toggle the message box open/closed
  const toggleMessageBox = () => {
    setIsOpen(!isOpen);
  };

  // Filter messages based on search query
  const filteredMessages = messages.filter((message) =>
    message.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="message-box-container">
      {/* Button to toggle the message box */}
      <button onClick={toggleMessageBox} className="message-box-toggle">
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="message-box">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search messages"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Message list */}
          <div className="messages-list">
            {filteredMessages.map((message, index) => (
              <div
                key={index}
                className={`message-item ${message.sender}`}
              >
                <span className="sender-label">
                  {message.sender === 'client' ? 'Client' : 'Freelancer'}
                </span>
                <p className="message-text">{message.text}</p>
              </div>
            ))}
          </div>

          {/* Message input area */}
          <div className="message-input-container">
            <textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBox;
