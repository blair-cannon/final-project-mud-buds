import React, { useState } from "react";
import MessageModal from "./messagemodal";

export default function ConversationPreview({ convo }) {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <div variant="primary" onClick={() => setModalShow(true)}>
          <p>{convo.created_at}</p>
          <p>From: {convo.dog_creator}</p>
          <p>To: {convo.dog_other}</p>
          <p>Subject: {convo.subject}</p>
        </div>
        <MessageModal convo={convo} show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }
  