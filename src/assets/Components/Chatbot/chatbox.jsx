import React, { useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import Fuse from 'fuse.js';
import responses from './chatbot';
import './chatbox.css';



const Chatbot = () => {
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
   const [isChatVisible, setChatVisible] = useState(false);
 
    const toggleChat = () => {
        setChatVisible(!isChatVisible);
    };

    const closeChat = () => {
        setChatVisible(false);
    };
    const chatHistoryRef = useRef(null);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);


    // Handle clicks inside the chat to prevent propagation to parent elements
    const handleChatClick = (e) => {
        e.stopPropagation();
    };
   

    const fuse = new Fuse(responses, {
        keys: ['question'],
        threshold: 0.2 
    });

    const handleSend = () => {

        const trimmedInput = input.trim();

        if(trimmedInput.length > 0){

            if(trimmedInput.length <= 3){

                if (trimmedInput === 'Hi' || trimmedInput === 'hi'){
                
                const answer = 'Hi, how can I help you?';

                setChatHistory([...chatHistory, { question: trimmedInput, answer }]);
                setInput('');
                }
                else{
                const answer = 'Your message is not very clear. Please try again.';
    
                setChatHistory([...chatHistory, { question: trimmedInput, answer }]);
                setInput('');
                }
    
            }
            else{
            const result = fuse.search(trimmedInput);
            const answer = result.length > 0 ? result[0].item.answer : 'Sorry, can you please try again (This chatbot is not yet equipped with Natural Language Processing).';

            setChatHistory([...chatHistory, { question: trimmedInput, answer }]);
            setInput('');
            }
        } 
    };

    return (
        <div className="chat-container">
            <div 
                className="popup" 
                onClick={toggleChat}>
                <img src="./src/assets/images/panda.png" alt="Logo" height="60px"/>
                <div className={classNames('chat', { visible: isChatVisible })} onClick={handleChatClick}>
            <div class="chat-header">
            <img src="./src/assets/images/panda.png" alt="" className='chat-logo' height="40px"/>
            <h3 className='bot-name'>Botfolio</h3>
            <h5 className='bot-desc'>Supporting for the best service!</h5>
            <h3 className="bot-close" onClick={closeChat}> &times; </h3>
            </div>
            <br></br>
            <div className="chatbot">
                <div className="chat-history" ref={chatHistoryRef}>
                    {chatHistory.map((entry, index) => (
                        <div key={index} className="chat-entry">
                            <div className="question"><strong>You:</strong> {entry.question}</div>
                            <div className="answer"><strong>Bot:</strong> {entry.answer}</div>
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder=" Enter your message here..."
                        className='prompt'
                    />
                    <button className='btn-send' onClick={handleSend}>&#8679;</button>
                </div>
            </div>
            </div>

            {/* <div className="chatbot">
                <div className="chat-history">
                    {chatHistory.map((entry, index) => (
                        <div key={index} className="chat-entry">
                            <div className="question"><strong>You:</strong> {entry.question}</div>
                            <div className="answer"><strong>Bot:</strong> {entry.answer}</div>
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            </div> */}
            </div>
        </div>
    );
};

export default Chatbot;
