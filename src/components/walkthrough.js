import React from 'react';
import Example from '../images/example.jpg';
import { Figure } from 'react-bootstrap';


export default function Home() {
  return (
    <div>
      <Figure>
        <Figure.Image className="example-feed-image" src={Example}/>
      </Figure>
      <Figure>
        <Figure.Image className="walkthrough-steps" src={Luka}/>
      </Figure>
    </div>
  )
}
