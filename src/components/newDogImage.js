import { useState } from "react";
import request from '../services/api.requests';
import { Modal, Form, Button } from 'react-bootstrap';

export default function AddDogImage(props) {
    const [newDogImage, setNewDogImage] = useState({
        image: null,
        dog: `${props.thisDogId}`,
    })

    const handleChangeImage = (event) => {
        setNewDogImage({
            image: event.target.files[0],
        });
    }

    const handleSubmitImage = async(e) => {
        e.preventDefault()
        const newDogImageFormData = new FormData();
        newDogImageFormData.append("image", newDogImage.image);
        newDogImageFormData.append("dog", `${props.thisDogId}`);

        // const params = new URLSearchParams();
        // params.append(newDogImage);
        try {
            let options = {
              method: "POST",
              url: '/images/',
              data: newDogImageFormData,
            }
            let resp = await request(options)
            console.log(resp)
        } catch(error) {
            console.log(error)
        }
    }

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
            <Form >
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        placeholder=""
                        onChange={handleChangeImage}
                        autoFocus
                    />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Button type="submit" variant="primary" onClick={handleSubmitImage}>
            Create Post
          </Button>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}