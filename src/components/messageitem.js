import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import request from '../services/api.requests.js';

export default function Message({ convo }) {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    async function getMessages() {
      let options = {
        url: `/messages/?conversation=${convo.id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      setMessages(resp.data)
    }
  
    getMessages()
  }, []);

  return (
    <div>
    {messages.map((message) => <MessageItem key={message.id} message={message} />)}
    </div>
  )
  }

const MessageItem = ({ message }) => {
  return (
    <div>
      {/* {console.log(message)} */}
        <Row className="message-time">{message.sent_at} </Row>
        <Row className="message-from">{message.dog_sent.name}:</Row>
        <Row className="message-content">{message.content}</Row>
    </div>
  )
}
