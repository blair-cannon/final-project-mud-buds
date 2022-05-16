import { useState } from "react";
import request from '../services/api.requests';
import { Modal, Form, Button } from 'react-bootstrap';
import { useGlobalState } from "../context/GlobalState";

const optionsAggressionSocialization = [
    {value:1, label:"High"},
    {value:2, label:"Medium"},
    {value:3, label:"Low"}
]

const optionsFixed = [
    {value:true, label:"Yes"},
    {value:false, label:"No"}
]

const optionsBitten = [
    {value:false, label:"No"},
    {value:true, label:"Yes"}
]

const optionsGender = [
    {value:1, label:"Female"},
    {value:2, label:"Male"}
]

const optionsSize = [
    {value:1, label:"Small"},
    {value:2, label:"Medium"},
    {value:3, label:"Large"},
    {value:4, label:"Extra Large"},
    {value:5, label:"Extra Small"}
]

const optionsBreed = [
    {value:1, label:"German Shepherd"},
    {value:2, label:"Beagle"},
    {value:3, label:"Australian Shepherd"},
    {value:4, label:"Huskey"}
]

const optionsPark = [
    {value:1, label:"Jacobson Park"},
    {value:2, label:"Lake Reba Park"}
]

const optionsTags = [
    {value:1, label:"Hyper"},
    {value:2, label:"Swimmer"},
    {value:3, label:"Kid-friendly"},
    {value:4, label:"Fast"},
    {value:5, label:"WallLeaner"},
]



export default function EditDogModal(props) {
    console.log('here', props.dog)
    console.log(typeof(props.dog.tags))
    const [state, dispatch] = useGlobalState();
    const [editedDog, setEditedDog] = useState({
        id: props.dog.id,
        name: props.dog.name,
        age: props.dog.age,
        birthday: props.dog.birthday,
        about_me: props.dog.about_me,
        is_fixed: props.dog.is_fixed,
        has_bitten: props.dog.has_bitten,
        aggression: props.dog.aggression.id,
        breed: props.dog.breed.id,
        favorite_park: props.dog.favorite_park.id,
        gender: props.dog.gender.id,
        size: props.dog.size.id,
        socialization: props.dog.socialization.id,
        user: props.dog.user.id,
        tags: props.dog.tags
      });


    const handleChange = (event) => {
        setEditedDog({
            ...editedDog,
            [event.target.name]: event.target.value,
        });
        console.log(editedDog)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('hey', editedDog.tags)
        const editedDogFormData = new FormData();
        editedDogFormData.append("name", editedDog.name)
        editedDogFormData.append("age", editedDog.age)
        editedDogFormData.append("birthday", editedDog.birthday)
        editedDogFormData.append("about_me", editedDog.about_me)
        editedDogFormData.append("is_fixed", editedDog.is_fixed)
        editedDogFormData.append("has_bitten", editedDog.has_bitten)
        editedDogFormData.append("aggression", editedDog.aggression)
        editedDogFormData.append("breed", editedDog.breed)
        editedDogFormData.append("favorite_park", editedDog.favorite_park)
        editedDogFormData.append("gender", editedDog.gender)
        editedDogFormData.append("size", editedDog.size)
        editedDogFormData.append("socialization", editedDog.socialization)
        editedDogFormData.append("user", editedDog.user)
        editedDogFormData.append("tags", editedDog.tags)

        try {
            let options = {
              method: "PATCH",
              url: `/dogs/${props.dog.id}/`,
              data: editedDogFormData,
            }
            let resp = await request(options)
            console.log(resp)
            let editedState = state.dogs.filter((existingDog) => existingDog.id !== props.dog.id)
            let count = editedState.push(editedDog)
            dispatch({ dogs: editedState})
            props.onHide()
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
            <Form className="form-new-dog" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        className="editedDogInput"
                        name="name"
                        value={editedDog.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Age:
                    <input
                        className="editedDogInput"
                        name="age"
                        value={editedDog.age}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Birthday:
                    <input
                        className="editedDogInput"
                        name="birthday"
                        type="date"
                        value={editedDog.birthday}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    About Me Statement:
                    <input
                        className="editedDogInput"
                        name="about_me"
                        value={editedDog.about_me}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Are they fixed?
                    <select
                        className="editedDogInput"
                        name="is_fixed"
                        onChange={handleChange}
                    >
                        {optionsFixed.map((option) => {
                            if (option.value == !!props.dog.is_fixed || option.value == props.dog.is_fixed) {
                                return <option value={option.value} selected="selected" >{option.label}</option>
                            }  
                            else { return <option value={option.value} >{option.label}</option> }
                        })}
                    </select>
                </label>
                <label>
                    Do they have a history of biting another dog or person?
                    <select 
                        className="editedDogInput"
                        name="has_bitten" 
                        onChange={handleChange} 
                    >
                        {optionsBitten.map((option) => {
                            if (option.value == !!props.dog.has_bitten || option.value == props.dog.has_bitten) {
                                return <option value={option.value} selected="selected" >{option.label}</option>
                            }  
                            else { return <option value={option.value} >{option.label}</option> }
                        })}
                    </select>
                </label>
                <label>
                    How would you rank their aggression?
                    <select
                        className="editedDogInput"
                        name="aggression"
                        onChange={handleChange}
                    >
                        {optionsAggressionSocialization.map((option) => {
                            if (option.value == props.dog.aggression.id) {
                                return <option value={option.value} selected="selected" >{option.label}</option>
                            }  
                            else { return <option value={option.value} >{option.label}</option> }
                        })}
                    </select>
                </label>
                <label>
                    {/* eventually this one and parks will have a creatable input box that can relate
                    to the database and make a post if the breed or park aren't in the system yet */}
                    Breed:
                    <select
                        className="editedDogInput"
                        name="breed"
                        onChange={handleChange}
                    >
                        {optionsBreed.map((option) => {
                            if (option.value == props.dog.breed.id) {
                                return <option value={option.value} selected="selected" >{option.label}</option>
                            }  
                            else { return <option value={option.value} >{option.label}</option> }
                        })}
                    </select>
                </label>
                <label>
                    Favorite Park:
                    <select
                        className="editedDogInput"
                        name="favorite_park"
                        onChange={handleChange}
                    >
                        {optionsPark.map((option) => {
                            if (option.value == props.dog.favorite_park.id) {
                                return <option value={option.value} selected="selected" >{option.label}</option>
                            }  
                            else { return <option value={option.value} >{option.label}</option> }
                        })}   
                    </select>
                </label>
                <label>
                    Gender:
                    <select
                        className="editedDogInput"
                        name="gender"
                        options={optionsGender}
                        onChange={handleChange}
                    >
                        {optionsGender.map((option) => {
                            if (option.value == props.dog.gender.id) {
                                return <option value={option.value} selected="selected" >{option.label}</option>
                            }  
                            else { return <option value={option.value} >{option.label}</option> }
                        })}
                    </select>
                </label>
                <label>
                    Size:
                    <select
                        className="editedDogInput"
                        name="size"
                        onChange={handleChange}
                    >
                        {optionsSize.map((option) => {
                            if (option.value == props.dog.size.id) {
                                return <option value={option.value} selected="selected" >{option.label}</option>
                            }  
                            else { return <option value={option.value} >{option.label}</option> }
                        })} 
                    </select>
                </label>
                <label>
                    How would you rank their exposure to other dogs and people?
                    <select
                        className="editedDogInput"
                        name="socialization"
                        onChange={handleChange}
                    >
                        {optionsAggressionSocialization.map((option) => {
                            if (option.value == props.dog.socialization.id) {
                                return <option value={option.value} selected="selected" >{option.label}</option>
                            }  
                            else { return <option value={option.value} >{option.label}</option> }
                        })}
                    </select>
                </label>
                <label>
                    Choose some hashtags to spice up your dog's profile!
                    <select
                        className="editedDogInput"
                        name="tags"
                        onChange={handleChange}
                    >
                        {optionsTags.map((option) => {
                            if (option.label == props.dog.tags) {
                                return <option value={option.value} selected="selected" >{option.label}</option>
                            }  
                            else { return <option value={option.value} >{option.label}</option> }
                        })}
                    </select>
                </label>  
            </Form>
          </Modal.Body>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Update
          </Button>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}