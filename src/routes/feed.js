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
          <DogDisplay />
        </Col>
      </Row>
    </Container>
  )
}
