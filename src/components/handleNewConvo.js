import { useState } from "react";
import { useGlobalState } from '../context/GlobalState'
import request from '../services/api.requests';
import { Form, Button } from 'react-bootstrap';
import NewMessageModal from '../components/newMessageModal';

    // state.dogs.map((dog,i) => <option value={dog.id} key={i}>{dog.name}</option>)


export default function HandleNewConvo() {
    const [state, dispatch] = useGlobalState();
    const [modalShow, setModalShow] = useState(false);
    const [convoId, setConvoId] = useState();
    const [newConvo, setNewConvo] = useState({
        subject: "",
        dog_creator: state.dogs[0].id,
        dog_other: null,
  });



    const handleChange = (event) => {

        setNewConvo({
            ...newConvo,
            [event.target.name]: event.target.value,
        });
    }
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        const newConvoFormData = new FormData();
        newConvoFormData.append("subject", newConvo.subject)
        newConvoFormData.append("dog_creator", newConvo.dog_creator)
        newConvoFormData.append("dog_other", newConvo.dog_other)

        try {
            let options = {
              method: "POST",
              url: '/conversations/',
              data: newConvo,
            }
            let resp = await request(options)
            setConvoId(resp.data.id)
        } catch(error) {
            console.log(error)
        }
    }

    return (
    <div>
       <Form>
            <label>
                From:
                <select
                    className="newConvoInput"
                    name="dog_creator"
                    onChange={handleChange}
                >
                    {state.dogs.map((dog) => (
                        <option value={dog.id}>{dog.name}</option>
                    ))} 
                </select>
            </label>
            {/* all other dogs??
            <label>
                To:
                <select
                    className="newConvoInput"
                    name="dog_other"
                    onChange={handleChange}
                >
                    {state.dogs.map((dog) => (
                        <option value={dog.id}>{dog.name}</option>
                    ))} 
                </select>
            </label> */}
            <label>
                Subject:
                <input
                    className="newConvoInput"
                    name="subject"
                    value={newConvo.subject}
                    onChange={handleChange}
                />
            </label>
            <Button type="submit" onClick={() => setModalShow(true)}>Next</Button>
            <NewMessageModal convoId={convoId} show={modalShow} onHide={() => setModalShow(false)}/>
       </Form>
    </div>
    );
}
