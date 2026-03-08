import { useState } from 'react';
import { Chatbot} from 'supersimpledev'
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
            const [inputText, setInputText] = useState("");


            function SaveInputText(event) {
                setInputText(event.target.value);

            }

            async function SendMessage() {
               const response = await Chatbot.getResponseAsync(inputText);
                setChatMessages([...chatMessages, {message: inputText, sender: "user", id: crypto.randomUUID()}, {message: response, sender: "robot", id: crypto.randomUUID()}]);
                setInputText("");
            }

            return (
                <div className="chat-input-container">
                    <input 
                        placeholder="Send a message to Chatbot" 
                        size="30" 
                        onChange={SaveInputText}
                        value={inputText}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                SendMessage();
                            }
                        }}
                        className="chat-input"
                    />
                    <button 
                        className="send-button" 
                        onClick={SendMessage}>Send
                    </button>
                    
                </div>
            )
        }