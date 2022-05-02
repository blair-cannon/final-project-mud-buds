import React from 'react';
import TestimonyCard from '../components/testimonycard'
import HeroImage from '../images/dog_hero.png'
import {Figure, Container} from 'react-bootstrap';
import Walkthrough from '../components/walkthroughsteps';

export default function Home() {
  return (
    <div>
      <Figure>
        <Figure.Image src={HeroImage}/>
      </Figure>
      <Walkthrough />
      <Container fluid className="darkredContainer">
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </Container>
      <Container fluid className="footerContainer">
        footer info
      </Container>
    </div>
  )
}
