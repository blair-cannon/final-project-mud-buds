import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Placeholder from '../images/placeholder.png'

export default function Walkthroughsteps() {
  return (
    <div>
        <h2>How does it work?</h2>
        <Card >
            <Card.Img variant="left" src={Placeholder} />
            <Card.Body>
            <Card.Title>Step 1</Card.Title>
            <Card.Text>
                Sign up with some quick information about you and your dog!
            </Card.Text>
            </Card.Body>
        </Card>
        <Card >
            <Card.Body>
            <Card.Title>Step 2</Card.Title>
            <Card.Text>
                Discover dogs in your area on your feed! Use the buttons to decide what happens next!
            </Card.Text>
            </Card.Body>
            <Card.Img variant="left" src={Placeholder} />
        </Card>
        <Card >
            <Card.Img variant="left" src={Placeholder} />
            <Card.Body>
            <Card.Title>Step 3</Card.Title>
            <Card.Text>
                Connect with people, go on Puppy Playdates, and make long lasting friends for you and your pup!
            </Card.Text>
            <Button variant="primary">Create my Account Now!</Button>
            </Card.Body>
        </Card>
  </div>
  )
}

