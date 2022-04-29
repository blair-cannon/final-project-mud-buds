import React, { useState, useEffect } from 'react';
import { getData } from '../data.js'; 
import { Row } from 'react-bootstrap';
import ConversationPreview from './conversationpreview';

export default function Convos() {
  const URL = 'https://8000-blairpresto-finalprojec-khbsmmpuzia.ws-us43.gitpod.io/conversations';
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    getData(URL)
    .then((data) => {
      setConversations(data)
    })
}, []);

  return (
    <div>
    {conversations.filter((convo) => convo.dog_creator === 'Luka' || convo.dog_other === 'Luka').map((convo) => <IndividualConvo key={convo.id} convo={convo} />)}
    </div>
  )
  }

const IndividualConvo = ({ convo }) => {
  return (
    <Row className="conversationRow">
      <ConversationPreview convo={convo}>
      </ConversationPreview>
    </Row>
  )
}
