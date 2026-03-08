import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css';


function ChatMessage({message, sender}) {
    
     return(
         <div className={sender === "robot" ? "chat-message-robot" : "chat-message-user"}>
               {sender === 'robot' && <img src={RobotProfileImage} className="chat-message-avatar" />}
                    <div className="chat-message-text">
                        {message}
                    </div>
                {sender === 'user' && <img src={UserProfileImage} className="chat-message-avatar" />}
        </div>
     );
 }

export default ChatMessage;