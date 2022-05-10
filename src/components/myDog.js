import React, { useState } from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.requests';


export default function MyDog() {
  const [ state, dispatch ] = useGlobalState();

return (
  <>
    {state.dogs.map((dog) => <Dog key={dog.id} dog={dog} />)}
  </>
  )
}

const Dog = ({ dog }) => {
  const [ dogImage, setDogImage ] = useState();

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
      // try {  
      //   let options = {
      //     url: `/dogs/${dog.id}`,
      //     method: 'PATCH',
      //     data: params
      //   } 
    //     let variable = await request(options)
    //     // filter to removed 'accepted' notification from UI
    //     let newConnections = connections.filter((connection) => connection.id !== notification.id)
    //     setConnections(newConnections)
    //   } 
      // catch(error) {
      //     console.log(error)
      // }
    // }

    async function deleteDog() {
      try {  
        let options = {
          url: `/dogs/${dog.id}`,
          method: 'DELETE',
        } 
        let variable = await request(options)
      }
      catch(error) {
        console.log(error)
      }
    }

  return (
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
        <Button onClick={() => {
                        // AuthService.logout()
                        // navigate('/')
                        // window.location.reload()
                      }}>Edit</Button>
        <Card.Link onClick={() => { deleteDog() }}>Delete</Card.Link>
      </Card.Body>
    </Card>
  )
}