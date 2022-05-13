import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import NotificationData from '../components/notificationData';

export default function Notifications() {
  return (
    <Container className="notificationPageContainer" fluid>
    <Row className="flex-xl-nowrap">
      <SideBar />
      <Col className="contentCol" align="center" lg={ 9 } >
        <h1 className="notificationHeader">Friend Requests.</h1>
        <NotificationData/>
      </Col>
    </Row>
  </Container>
  )
}
