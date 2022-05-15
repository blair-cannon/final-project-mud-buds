import React from "react";
import { Modal, Button } from "react-bootstrap";
import MessageItem from "./messageitem";

export default function MessageModal(props) {
  return (
    <Modal className="messageModal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {props.convo.subject}
      </Modal.Header>
      <Modal.Body>
        <MessageItem convo={props.convo} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

