import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import './css/chatSample.css';
import ChatWindow from './ChatWindow'

function App() {
  return (
    <div className="container">
      <div className="chat-container">
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
