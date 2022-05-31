import {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import MyDog from '../components/myDog';
import NewDogModal from '../components/newDogModal';
import { Link } from 'react-router-dom';
import FooterContainer from '../components/footerContainer';

const Profile = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Container className="profilePageContainer" fluid>
        <div className="profilePageBox">
          <h1 className="profileHeader">My Dogs.</h1>
          <div className="myDogs">
            <MyDog />
          </div>
          <Link  className="friendsLink" to={"/connections"}>Our Friends</Link>
            <Button onClick={() => setModalShow(true)}>Add Dog Profile</Button>
            <NewDogModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
      </Container>
      <div className="dummydiv"></div>
      <FooterContainer />
    </>
  )
}

export default Profile