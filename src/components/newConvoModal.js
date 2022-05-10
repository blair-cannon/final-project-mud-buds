import { Modal, Button } from "react-bootstrap";
import HandleNewConvo from "./handleNewConvo";

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
           <HandleNewConvo Hide={props.onHide}/>
      </Modal.Body >
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
