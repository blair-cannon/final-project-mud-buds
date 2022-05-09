import React from 'react';
import Example from '../images/example.png';
import { Figure } from 'react-bootstrap';
import WalkthroughSteps from '../images/walkthroughSteps.png';


export default function Walkthrough() {
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
