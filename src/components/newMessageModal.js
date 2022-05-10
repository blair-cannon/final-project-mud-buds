import { Modal, Button } from "react-bootstrap";
import HandleNewMessage from './handleNewMessage';


export default function NewConvoModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="modal-new-dog">
           <HandleNewMessage convoId={props.convoId} newConvo={props.newConvo}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}