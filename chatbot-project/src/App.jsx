import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'


function App() { 
            const [chatMessages, setChatMessages] = useState([
               {message: "Hello! I'm Chatbot. How can I assist you today?", sender: "robot", id: crypto.randomUUID()}
            ]);
            return (
                <div className="app-container">
                    <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
                    <ChatMessages chatMessages={chatMessages} />
                </div>
            );
        }

export default App
