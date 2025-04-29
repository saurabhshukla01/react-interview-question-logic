import React, { useState } from 'react';
import './App.css';
import './SendMessage.css';

const conversationsData = [
  { id: 1, name: 'Alice', messages: ['Hello!', 'How are you?'] },
  { id: 2, name: 'Bob', messages: ['Hi!', 'Good Morning!'] },
  { id: 3, name: 'Charlie', messages: ['Hey!', 'What\'s up?'] },
];

function App() {
  const [conversations, setConversations] = useState(conversationsData);
  const [activeConversationId, setActiveConversationId] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const activeConversation = conversations.find(c => c.id === activeConversationId);

  function handleSelectConversation(id) {
    setActiveConversationId(id);
  }

  function handleSendMessage(e) {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const updatedConversations = conversations.map(c => {
      if (c.id === activeConversationId) {
        return { ...c, messages: [newMessage, ...c.messages] };
      }
      return c;
    });

    setConversations(updatedConversations);
    setNewMessage('');
    
    // Push Notification (simple)
    alert('New message sent!');
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Conversations</h2>
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className={`conversation ${conv.id === activeConversationId ? 'active' : ''}`}
            onClick={() => handleSelectConversation(conv.id)}
          >
            {conv.name}
          </div>
        ))}
      </div>

      <div className="chat">
        {activeConversation ? (
          <>
            <h2>Chat with {activeConversation.name}</h2>
            <div className="messages">
              {activeConversation.messages.map((msg, idx) => (
                <div key={idx} className="message">
                  {msg}
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="message-form">
              <input 
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <h2>Select a conversation</h2>
        )}
      </div>
    </div>
  );
}

export default App;
