import React, { useState, useEffect } from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import ExampleDogImage from '../images/luka.jpeg';
import { useGlobalState } from "../context/GlobalState";


export default function MyDog() {
  const [ state, dispatch ] = useGlobalState();

return (
  <div>
    {state.dogs.map((dog) => <Dog key={dog.id} dog={dog} />)}
    </div>
  )
}

const Dog = ({ dog }) => {
  return (
    <div>
    <Card className="dogCard">
      <Card.Body>
        <Card.Img src={ExampleDogImage} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="dogTitle">{dog.name}, {dog.age}</Card.Title>
        </Card.ImgOverlay>
        <Card.Text className="genderAndbreed">
          {dog.gender}, {dog.breed}
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
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  </div>
  )
}