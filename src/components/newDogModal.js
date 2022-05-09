import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import NewDogProfile from './newDogProfile';

export default function NewDogView(props) {
// const [modalShow, setModalShow] = useState(false)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body class="modal-new-dog">
            <NewDogProfile/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
