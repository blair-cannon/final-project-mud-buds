import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import NotificationData from '../components/notificationData';
import FooterContainer from '../components/footerContainer';
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';

export default function Notifications() {
  const [ state, dispatch ] = useGlobalState();
  let navigate = useNavigate();

  useEffect(() => {
  if (state.dogs.length == 0) {
    console.log('1')
    return (
      navigate('/createDogPrompt')
    )
  }
}, []);

  return (
    <>
      <div className="wrapper">
        <Container className="notificationPageContainer" fluid>
          <Row className="flex-xl-nowrap">
            <SideBar />
            <Col className="contentCol" align="center" lg={ 9 } >
              <h1 className="notificationHeader">Friend Requests.</h1>
              <NotificationData/>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterContainer />
    </>
  )
}
