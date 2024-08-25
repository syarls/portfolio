import React, { useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import Fuse from 'fuse.js';
import responses from './chatbot';
import panda1 from '../../images/pandabot.png'
import panda2 from '../../images/pandabot3.png';
import panda3 from '../../images/pandafullbot.png';
import './chatbox.css';
import notif from 'sweetalert2'


 
const Chatbot = () => {
 
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
   const [isChatVisible, setChatVisible] = useState(false);


   const showAlert = () => {
    notif.fire({
        title: 'Did you know?',
        text: 'Pandora is a reserved chatbot.',
        imageUrl: panda1,
        confirmButtonText: 'Cool',
      
    });
};



    const toggleChat = () => {
        setChatVisible(!isChatVisible);
    };

    const imgSrc = () =>{
        if(!isChatVisible){
            return panda1;
        }
        else{
            return panda2;
        }
    }

    const closeChat = () => {
        setChatVisible(false);
    };
    const chatHistoryRef = useRef(null);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);


    const handleChatClick = (e) => {
        e.stopPropagation();
    };
   
    
    const fuse = new Fuse(responses, {
        keys: ['question'],
        threshold: 0.1, 
       
    });

    // const fuse2 = new Fuse(responses, {
    //     keys: ['question'],
    //     threshold: 0.3,
       
    // });

    const handleSend = () => {

        const trimmedInput = input.trim();

        if(trimmedInput.length > 0){
         let trimmedInput2 = trimmedInput.replace(/\s+/g, ''); 
            if(/^\d+([+\-*/]\d+)*$/.test(trimmedInput2) || trimmedInput2.endsWith('=')){
            let answer = '';
                try {
                    if(trimmedInput2.endsWith('=')){
                    trimmedInput2 = trimmedInput2.slice(0, -1);
                    }
                        answer = eval(trimmedInput2);
                        answer = parseFloat(answer.toFixed(2))
                    
                } catch (e) {
                    answer = "Problem can't be solved.";
                }
                
                setChatHistory([...chatHistory, { question: trimmedInput, answer }]);
                setInput('')
            }

            else if(trimmedInput.length < 3 ){

                if (trimmedInput === 'Hi' || trimmedInput === 'hi' || trimmedInput == 'Yes' || trimmedInput == 'No' || trimmedInput === 'yes' || trimmedInput === 'no'){
                
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
            // const result2 = fuse2.search(trimmedInput);

            if (result.length > 0){
            const answer = result[0].item.answer;
            setChatHistory([...chatHistory, { question: trimmedInput, answer }]);
            }
            // else if (result2.length > 0){
            
            // const answer = 'Testing ' + result2[0].item.answer;
            // setChatHistory([...chatHistory, { question: trimmedInput, answer }]);
            // }

            else{
                     
            const answer = 'Sorry, can you please try again (This chatbot is not yet equipped with Natural Language Processing).';
                setChatHistory([...chatHistory, { question: trimmedInput, answer }]);
            }
        
            setInput('');
            }
        } 
    };

    return (
        <div className="chat-container select-none">
            <div 
                className="popup xs:h-[75px] xs:w-[75px]" 
                onClick={toggleChat}>
                <img className="h-[60px] w-[75px] xs:h-[50px] xs:w-[60px] panda-logo" src={imgSrc()}/>
                <div className={classNames('xs:w-[300px] xs:h-[350px] chat', { visible: isChatVisible })} onClick={handleChatClick}>
            <div className="chat-header">
            <img src="./src/assets/images/pandafullbot.png" className='mt-[-27.5px] ml-[-12.5px] h-[100px] w-[100px]' onClick={showAlert}/>
           <div className="flex flex-col bot-col">
            <h3 className='bot-name'>Pandora</h3>
            <h5 className='bot-desc'>Customer Support</h5>
            </div>
            <h3 className="xs:pl-[90px] xs:hidden bot-close" onClick={closeChat}>&times; </h3>
            </div>
            <div className="chatbot">
                <div className="chat-history xs:max-h-[235px] xs:max-w-[290px]" ref={chatHistoryRef}>
                    {chatHistory.map((entry, index) => (
                        <div key={index} className="chat-entry">
                           
                            <div className="question select-text"><strong>You:</strong> {entry.question}</div>
                            <div className="answer select-text"><strong>Pandora:</strong> {entry.answer}</div>
                            <button className="crl hidden">Hello</button>
                        </div>
                    ))}
                </div>
                <div className="xs:pt-[15rem] xs:max-w-[300px] chat-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Enter your message here..."
                        className='xs:text-[14px] prompt'
                    />
                    <button className='xs:static btn-send' onClick={handleSend}>&#x27A4;</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Chatbot;
