import React, { useState } from "react";
import MessageModal from "./messagemodal";

export default function ConversationPreview({ convo }) {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <div variant="primary" onClick={() => setModalShow(true)}>
          <p className="conversationDate">{convo.created_at}</p>
          <p className="conversationSubject">{convo.subject}</p>
          <p className="conversationText">{convo.dog_creator.name}, {convo.dog_other.name}</p>
        </div>
        <MessageModal convo={convo} show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }
  