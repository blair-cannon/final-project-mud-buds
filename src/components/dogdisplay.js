import React, { useState, useEffect } from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import ExampleDogImage from '../images/luka.jpeg';
import request from '../services/api.requests.js';
import { useGlobalState } from "../context/GlobalState";


export default function Dogdisplay() {
  const [ state, dispatch ] = useGlobalState();
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function getFeed() {
      let options = {
        url: '/dogs',
        method: 'GET',
      } 
      let resp = await request(options)
      setFeed(resp.data)
    }

    getFeed()
}, []);
return (
  <div>
      {/* filter for all dogs that aren't owned by the logged in user */}
    {feed.filter((dog) => dog.user.id !== state.currentUser.user_id).map((dog) => <IndividualDog key={dog.id} dog={dog} />)}
    </div>
  )
}

const IndividualDog = ({ dog }) => {
  return (
    <div>
      {/* {console.log(dog)} */}
    <Card className="dogCard">
      <Card.Body>
        <Card.Img src={ExampleDogImage} alt="Card image" />
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
        <Card.Link href="#">connect</Card.Link>
        <Card.Link href="#">skip</Card.Link>
        <Card.Link href="#">message</Card.Link>
      </Card.Body>
    </Card>
  </div>
  )
}