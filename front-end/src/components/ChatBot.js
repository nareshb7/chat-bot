import React, { useEffect, useRef, useState } from 'react'
import './chatBot.css'

const ChatBot = () => {
    const msz = ['hi', 'hello', 'hw r uh', 'good', 'thank uh', 'fine', 'done', 'bye', 'ok bye',]
    const messageEndRef = useRef(null)
    const [message,setMessage] = useState('')
    const [messages, setMessages] = useState(msz)
    const sendMessage =()=> {
        setMessage('')
        setMessages([...messages, message])
    }
    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({behaviour : "smooth"})
    }
    useEffect(()=> {
        scrollToBottom()
    }, [messages])
    return (
        <div className='chatbot-main'>
            <div className='chatbot-header'>
                <h3>Ask Yana...</h3>
            </div>
            <div className='chatbot-body'>
                {
                    messages.map((msz, idx)=> {
                        const side = idx %2 == 0 ? 'left': 'right'
                        return <p key={idx} className={side}>{msz}</p>
                    })
                }
                <div style={{height: '5px'}} ref={messageEndRef} />
            </div>
            <div className='chatbot-footer'>
                <input type='text' placeholder='Type message' value={message} onChange={(e)=> setMessage(e.target.value)} onKeyPress={(e)=> e.key =='Enter' && sendMessage()} />
                <button onClick={sendMessage}> {'->'} </button>
            </div>
        </div>
    )
}

export default ChatBot