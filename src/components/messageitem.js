import React, { useState, useEffect, useRef } from 'react';
import { Row, Form, Button } from 'react-bootstrap';
import request from '../services/api.requests.js';
import { useGlobalState } from '../context/GlobalState.js';

export default function Message({ convo }) {
  const inputRef = useRef();
  const [state, dispatch] = useGlobalState();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({
    content: "",
    conversation: `${convo.id}`,
    dog_received: null,
    dog_sent: null,
  });

  useEffect(() => {
  // const findMyDog = () => {
    if (convo.dog_other.user.id == state.currentUser.user_id){
      setNewMessage({
        ...newMessage,
        dog_sent: `${convo.dog_other.id}`,
        dog_received: `${convo.dog_creator.id}`
      })
    }
    else {
      setNewMessage({
        ...newMessage,
        dog_sent: `${convo.dog_creator.id}`,
        dog_received: `${convo.dog_other.id}`
      })
    }
  // }  
  }, []);


const handleChange = (event) => {

    setNewMessage({
        ...newMessage,
        [event.target.name]: event.target.value,
    });
}

const handleSubmit = async(e) => {
    e.preventDefault()
    
    try {
      let options = {
        method: "POST",
        url: '/messages/',
        data: newMessage,
      }
      let resp = await request(options);
    } catch(error) {
      console.log(error)
    }
    inputRef.current.value = ''; // empties input box
}

  
  useEffect(() => {
    async function getMessages() {
      let options = {
        url: `/messages/?conversation=${convo.id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      setMessages(resp.data)
    }

    const interval = setInterval(() => {
      getMessages()
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    {messages.map((message) => <MessageItem key={message.id} message={message} />)}
    <Form  onSubmit={handleSubmit} >
          <textarea
              className="newMessageInput"
              ref={inputRef}
              maxlength="600"
              name="content"
              type="text"
              value={newMessage.content}
              onChange={handleChange}
          />
      <Button type="submit">Send</Button>
    </Form>
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
