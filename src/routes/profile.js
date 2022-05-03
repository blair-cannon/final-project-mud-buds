import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import ToggleDog from '../components/toggledogprofile';
import { useGlobalState } from "../context/GlobalState";
import MyDog from '../components/myDog';

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <Container className="pageContainer" fluid>
      <Row className="flex-xl-nowrap">
        <SideBar />
        <Col className="contentCol" align="center" lg={ 9 } >
          <ToggleDog />
          <MyDog />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile