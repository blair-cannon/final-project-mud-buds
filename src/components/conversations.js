import React, { useState, useEffect } from 'react';
import { getData } from '../data.js'; 

export default function Convos() {
  const URL = 'https://8000-blairpresto-finalprojec-zz9g3tdguv4.ws-us42.gitpod.io/conversations';
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
    <div className="conversationRow">
        <p>From: {convo.dog_creator}</p>
        <p>To: {convo.dog_other}</p>
        <p>Subject: { convo.subject }</p>
    </div>
  )
}
