import React, { useState, useEffect } from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { getData } from '../data.js'; 

export default function Dogdisplay() {
  const URL = 'https://8000-blairpresto-finalprojec-khbsmmpuzia.ws-us43.gitpod.io/dogs/';
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    getData(URL)
    .then((data) => {
      setFeed(data)
    })
}, []);

  return (
    <div>
    {feed.filter((dog) => dog.breed === 'Australian Shepherd').map((dog) => <IndividualDog key={dog.id} dog={dog} />)}
    </div>
  )
}

const IndividualDog = ({ dog }) => {
  return (
    <div>
      {console.log(dog)}
    <h2>Let's find your furry friend a furry friend!</h2>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img src="https://www.bil-jac.com/Images/DogPlaceholder.svg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{dog.name}, {dog.age}</Card.Title>
        </Card.ImgOverlay>
        <Card.Text>
          {dog.about_me}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          {dog.tags.map((tag) => tag).join(', ')}
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">connect</Card.Link>
        <Card.Link href="#">skip</Card.Link>
        <Card.Link href="#">message</Card.Link>
      </Card.Body>
    </Card>
  </div>
  )
}