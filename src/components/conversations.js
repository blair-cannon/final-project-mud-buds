import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ConversationPreview from './conversationpreview';
import request from '../services/api.requests.js';
import { useGlobalState } from "../context/GlobalState";


export default function Convos() {
  const [ state, dispatch ] = useGlobalState();
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    async function getConvos() {
      let options = {
        url: `/conversations/?dog_creator__user_id=${state.currentUser.user_id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      setConversations(resp.data)
    }
    async function getOtherConvos() {
      let options = {
        url: `/conversations/?dog_other__user_id=${state.currentUser.user_id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      setConversations(...resp.data)
    }
    getConvos()
    console.log(conversations)
    // getOtherConvos()
  }, []);
  
  // if (state.dogs !== []) {
  return (
    <div>  
    {conversations.map((convo) => <IndividualConvo key={convo.id} convo={convo} />)}
    </div>
  )
  }
// }
const IndividualConvo = ({ convo }) => {
  return (
    <Row className="conversationRow">
      <ConversationPreview convo={convo}>
      </ConversationPreview>
    </Row>
  )
}
