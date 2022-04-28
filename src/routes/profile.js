import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import ToggleDog from '../components/toggledogprofile';
import { useGlobalState } from "../context/GlobalState";

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <SideBar />
        <Col className="contentCol" align="center" lg={ 9 } >
          profile content
          <h1>{state.currentUser.user_id}</h1>
          <ToggleDog />

        </Col>
      </Row>
    </Container>
  )
}

export default Profile