import React from 'react';
import TestimonyCard from '../components/testimonycard'
import HeroImage from '../images/dog_hero.png'
import {Figure} from 'react-bootstrap';
import Walkthrough from '../components/walkthroughsteps';

export default function Home() {
  return (
    <div>
      <Figure>
        <Figure.Image src={HeroImage}/>
      </Figure>
      <Walkthrough />
      <TestimonyCard />
    </div>
  )
}
