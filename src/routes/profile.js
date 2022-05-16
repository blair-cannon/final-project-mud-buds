import {useState} from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import SideBar from '../components/sidebar';
import ToggleDog from '../components/toggledogprofile';
import MyDog from '../components/myDog';
import NewDogModal from '../components/newDogModal';
import { Link } from 'react-router-dom';
import FooterContainer from '../components/footerContainer';

const Profile = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {/* <div className="wrapper"> */}
        <Container className="profilePageContainer" fluid>
          <h1 className="profileHeader">My Dogs.</h1>
          <div className="myDogs">
            <MyDog />
          </div>
          <Link  className="friendsLink" to={"/connections"}>Our Friends</Link>
            <Button onClick={() => setModalShow(true)}>Add Dog Profile</Button>
            <NewDogModal show={modalShow} onHide={() => setModalShow(false)}/>
        </Container>
      {/* </div> */}
      <div className="dummydiv"></div>
      <FooterContainer />
    </>
  )
}

export default Profile