import React, { useState } from 'react';
import {Card, ListGroup, ListGroupItem, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.requests';
import EditDogModal from './editDogModal';
import { useNavigate, Link } from 'react-router-dom';

export default function MyDog() {

  const [ state, dispatch ] = useGlobalState();

return (
  <>
    {state.dogs.map((dog) => <Dog key={dog.id} dog={dog} />)}
  </>
  )
}

const Dog = ({ dog }) => {
  let navigate = useNavigate();
  const [ dogImage, setDogImage ] = useState();
  const [ state, dispatch ] = useGlobalState();
  const [modalShow, setModalShow] = useState(false);

    async function getDogImage() {
      let options = {
        url: `/images/?dog=${dog.id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      setDogImage(resp.data[0].image)
    }
    getDogImage()

    // async function editDog() {
    //   try {  
    //     let options = {
    //       url: `/dogs/${dog.id}`,
    //       method: 'PUT',
    //       data: editedDog
    //     } 
    //     let variable = await request(options)
    //     // filter to removed 'accepted' notification from UI
    //     let newConnections = connections.filter((connection) => connection.id !== notification.id)
    //     setConnections(newConnections)
    //   } 
    //   catch(error) {
    //       console.log(error)
    //   }
    // }

    async function deleteDog() {
      console.log('mydogg', dog)
      try {  
        let options = {
          url: `/dogs/${dog.id}`,
          method: 'DELETE',
        } 
        let resp = await request(options)
        let updatedDogs = state.dogs.filter((savedDog) => savedDog.id !== dog.id)
        dispatch({dogs: updatedDogs})
        localStorage.setItem('mydogs', JSON.stringify(updatedDogs));
      }
      catch(error) {
        console.log(error)
      }
    }

    // const toConnections = { 
    //   pathname: "/connections", 
    //   dog: dog 
    // };

  return (
    <div className="dog-profile-div">
      <Card className="dogCard">
        <Card.Body>
          <Card.Img src={dogImage} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="dogTitle">{dog.name}, {dog.age}</Card.Title>
          </Card.ImgOverlay>
          <Card.Text className="genderAndbreed">
            {dog.gender.label}, {dog.breed.name}
            <br />
            Owner:{dog.user.first_name}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            {dog.about_me}
          </ListGroupItem>
          <ListGroupItem className="dogTags">
            #{dog.tags.map((tag) => tag).join(' #')}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button onClick={() => setModalShow(true)}>Edit</Button>
          <EditDogModal dog={dog} show={modalShow} onHide={() => setModalShow(false)}/>
          <Button onClick={deleteDog} >Delete</Button>
        </Card.Body>
      </Card>
      <Link   to={"/connections"}>{dog.name}'s Connections</Link>
    </div>
  )
}