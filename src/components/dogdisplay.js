import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

export default function Dogdisplay() {
  return (
    <div>
      <h2>Let's find your furry friend a furry friend!</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img src="https://www.bil-jac.com/Images/DogPlaceholder.svg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Dog name, Age</Card.Title>
          </Card.ImgOverlay>
          <Card.Text>
            About me statement...
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Tag1</ListGroupItem>
          <ListGroupItem>Tag2</ListGroupItem>
          <ListGroupItem>Tag3</ListGroupItem>
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
