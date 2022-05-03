import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ConversationPreview from './conversationpreview';
import request from '../services/api.requests.js';
import { useGlobalState } from "../context/GlobalState";
import MyDog from '../context/CurrentDogs';

export default function Convos() {
  const [ state, dispatch ] = useGlobalState();
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    async function getConvos() {
      let options = {
        url: '/conversations',
        method: 'GET',
      } 
      let resp = await request(options)
      setConversations(resp.data)
    }

    getConvos()
  }, []);
  
  console.log({conversations})
  return (
    <div>
      {console.log(state.currentUser)}
      {/* <h1>{state.currentUser.user_id}</h1> */}
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
