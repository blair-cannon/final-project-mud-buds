import { useState, useEffect } from "react";
import { useGlobalState } from '../context/GlobalState'
import request from '../services/api.requests';
import { Form, Button } from 'react-bootstrap';
import NewMessageModal from '../components/newMessageModal';


export default function HandleNewConvo({ Hide }) {
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

        try {
            let options = {
              method: "POST",
              url: '/conversations/',
              data: newConvo,
            }
            let resp = await request(options)
            dispatch({ conversations: [...state.conversations, resp.data]})
            var existing = JSON.parse(localStorage.getItem('myconversations'));
            existing = existing ? existing : [];
            localStorage.setItem('myconversations', JSON.stringify([...existing, resp.data]));
            setConvoId(resp.data.id)
            setModalShow(true)
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
                    <option value=''></option>
                    {toOptions.filter((dog) => dog.user.id !== state.currentUser.user_id).map((dog) => (
                        <option key={dog.id} value={dog.id}>{dog.name}</option>
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
            <Button type="submit">Next</Button>
        </Form>
        <NewMessageModal convoId={convoId} Hide={Hide} newConvo={newConvo} show={modalShow} onHide={() => setModalShow(false)}/>
    </div>
    );
}
