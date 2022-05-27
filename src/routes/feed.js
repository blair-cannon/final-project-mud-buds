import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import DogDisplay from '../components/dogdisplay';
// import Checkmark from '../images/checkmark.png';
// import Xmark from '../images/xmark.png';
import FooterContainer from '../components/footerContainer';
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';

export default function Feed() {
  let navigate = useNavigate();
  const [ state, dispatch ] = useGlobalState();

  useEffect(() => {
    if (state.dogs.length == 0) {
      return (
        navigate('/createDogPrompt')
      )
    }
  }, []);

    return (
      <>
        
          <div className="row">
            <div className="col">
              <Container className="feedPageContainer">
                  <h2 className="dogdisplayHeader">Let's find your furry friend <br/> a furry friend!</h2>
                  <div className="feed-dog-and-image-wrapper">
                    {/* <img className="check-and-x" src={Xmark} alt="xmark"></img> */}
                    <DogDisplay />
                    {/* <img className="check-and-x" src={Checkmark} alt="checkmark"></img> */}
                  </div>
              </Container>
            </div>
          </div>
            <FooterContainer />
      </>
    )
}
