import React, { useState, useEffect } from 'react';
import { getData } from '../data.js'; 
import { Row } from 'react-bootstrap'

export default function Message({ convo }) {
    const URL = `https://8000-blairpresto-finalprojec-khbsmmpuzia.ws-us43.gitpod.io/messages/?conversation=${convo.id}`;
    // no slash on the end, /messages/?conversation=${convo.id} with back-ticks
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      getData(URL)
      .then((data) => {
        setMessages(data)
      })
  }, [URL]);

  return (
    <div>
    {messages.map((message) => <MessageItem key={message.id} message={message} />)}
    </div>
  )
  }

const MessageItem = ({ message }) => {
  return (
    <div>
        <Row>{message.dog_sent}</Row>
        <Row>{message.sent_at}</Row>
        <Row>{message.content}</Row>
    </div>
  )
}
