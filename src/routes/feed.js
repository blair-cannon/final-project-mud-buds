import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import DogDisplay from '../components/dogdisplay';

export default function Feed() {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <SideBar />
        <Col className="contentCol" align="center" lg={ 9 } >
          <h2>Let's find your furry friend a furry friend!</h2>
          <DogDisplay />
        </Col>
      </Row>
    </Container>
  )
}
