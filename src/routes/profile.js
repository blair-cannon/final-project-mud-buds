import {useState} from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import ToggleDog from '../components/toggledogprofile';
import MyDog from '../components/myDog';
import NewDogModal from '../components/newDogModal';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container className="pageContainer" fluid>
      <Row className="flex-xl-nowrap">
        <SideBar />
        <Col className="contentCol" align="center" lg={ 9 } >
          {/* <ToggleDog /> */}
          <div className="myDogs">
            <MyDog />
          </div>
            <Link   to={"/connections"}>My Friends</Link>
          <Button onClick={() => setModalShow(true)}>Add Dog Profile</Button>
          <NewDogModal show={modalShow} onHide={() => setModalShow(false)}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile