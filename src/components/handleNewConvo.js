import { useState, useEffect } from "react";
import { useGlobalState } from '../context/GlobalState'
import request from '../services/api.requests';
import { Form, Button } from 'react-bootstrap';
import NewMessageModal from '../components/newMessageModal';


export default function HandleNewConvo() {
    const [state, dispatch] = useGlobalState();
    const [modalShow, setModalShow] = useState(false);
    const [convoId, setConvoId] = useState();
    const [toOptions, setToOptions] = useState([]);
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

    useEffect(() => {
      async function getToOptions() {
        let options = {
          url: '/dogs',
          method: 'GET',
    } 
        let resp = await request(options);
        setToOptions(resp.data)
    }
  
      getToOptions()
    }, []);


    return (
    <div>
       <Form  onSubmit={handleSubmit}>
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
            <label>
                To:
                <select
                    className="newConvoInput"
                    name="dog_other"
                    onChange={handleChange}
                >
                    {toOptions.filter((dog) => dog.user.id !== state.currentUser.user_id).map((dog) => (
                        <option value={dog.id}>{dog.name}</option>
                    ))}
                </select>
            </label> 
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
            <NewMessageModal convoId={convoId} newConvo={newConvo} show={modalShow} onHide={() => setModalShow(false)}/>
       </Form>
    </div>
    );
}