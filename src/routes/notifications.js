import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import NotificationData from '../components/notificationData';

export default function Notifications() {
  return (
    <Container className="pageContainer" fluid>
    <Row className="flex-xl-nowrap">
      <SideBar />
      <Col className="contentCol" align="center" lg={ 9 } >
        <NotificationData/>
      </Col>
    </Row>
  </Container>
  )
}
