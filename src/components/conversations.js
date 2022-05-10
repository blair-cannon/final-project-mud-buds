import React from 'react';
import { Row } from 'react-bootstrap';
import ConversationPreview from './conversationpreview';
import { useGlobalState } from "../context/GlobalState";


export default function Convos() {
  const [ state, dispatch ] = useGlobalState();
  
  return (
    <div>  
    {state.conversations.map((convo) => <IndividualConvo key={convo.id} convo={convo} />)}
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
