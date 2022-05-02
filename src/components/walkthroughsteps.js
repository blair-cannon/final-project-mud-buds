import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Placeholder from '../images/placeholder.png'

export default function Walkthroughsteps() {
  return (
    <div>
        <h2 className="walkthroughHeader">How does it work?</h2>
        <Card className="walkthroughCard">
            <Card.Img className="walkthroughImage" src={Placeholder} alt="walkthroughImage" />
            <Card.Body>
            <Card.Title className="walkthroughCardTitle">Step 1</Card.Title>
            <Card.Text className="walkthroughCardText">
                Sign up by answering some quick questions about you and your dog!
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className="walkthroughCard" >
            <Card.Body>
            <Card.Title className="walkthroughCardTitle">Step 2</Card.Title>
            <Card.Text className="walkthroughCardText">
                Discover dogs in your area on your feed! Use the buttons to decide what happens next!
            </Card.Text>
            </Card.Body>
            <Card.Img className="walkthroughImage" src={Placeholder} alt="walkthroughImage" />
        </Card>
        <Card className="walkthroughCard">
            <Card.Img className="walkthroughImage" src={Placeholder} alt="walkthroughImage"/>
            <Card.Body>
            <Card.Title className="walkthroughCardTitle">Step 3</Card.Title>
            <Card.Text className="walkthroughCardText">
                Connect with people, go on Puppy Playdates, and make long lasting friends for you and your pup!
            </Card.Text>
            <Button className="createAccount">Create Account!</Button>
            </Card.Body>
        </Card>
  </div>
  )
}

