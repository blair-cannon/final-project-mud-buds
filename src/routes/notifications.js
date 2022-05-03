import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sidebar';

export default function Notifications() {
  return (
    <Container fluid>
    <Row className="flex-xl-nowrap">
      <SideBar />
      <Col className="contentCol" align="center" lg={ 9 } >
        notification content
      </Col>
    </Row>
  </Container>
  )
}
