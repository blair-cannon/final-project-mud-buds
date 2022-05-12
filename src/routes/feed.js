import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import DogDisplay from '../components/dogdisplay';

export default function Feed() {
  return (
    <Container className="pageContainer" fluid>
        <h2 className="dogdisplayHeader">Let's find your furry friend <br/> a furry friend!</h2>
        <div className="myDogs">
          <DogDisplay />
        </div>
    </Container>
  )
}
