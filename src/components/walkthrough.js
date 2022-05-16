import React from 'react';
import Example from '../images/example.png';
import { Figure, Button } from 'react-bootstrap';
import WalkthroughSteps from '../images/walkthroughSteps.png';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';


export default function Walkthrough() {
  const [state, dispatch] = useGlobalState();
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/register')
  }
  if (!state.currentUser) {
    return (
      <>
        <div className="steps">
          <Figure>
            <Figure.Image className="example-feed-image" src={Example}/>
          </Figure>
          <Figure>
            <Figure.Image className="walkthrough-steps" src={WalkthroughSteps}/>
          </Figure>
        </div>
        <div className="div-create-account">
          <Button className="button-create-account" onClick={handleClick}>Create Account!</Button>
        </div>
      </>
    )
  }
  else {
    return (
      <div className="steps">
        <Figure>
          <Figure.Image className="example-feed-image" src={Example}/>
        </Figure>
        <Figure>
          <Figure.Image className="walkthrough-steps" src={WalkthroughSteps}/>
        </Figure>
      </div>
    )
  }
}
