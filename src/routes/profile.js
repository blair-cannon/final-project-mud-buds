import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import ToggleDog from '../components/toggledogprofile'

export default function Profile() {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <SideBar />
        <Col className="contentCol" align="center" lg={ 9 } >
          profile content
          <ToggleDog />
        </Col>
      </Row>
    </Container>
  )
}
