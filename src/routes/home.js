import React from 'react';
import HeroImage from '../images/dog_hero.png'
import {Figure, Container} from 'react-bootstrap';
import Walkthrough from '../components/walkthroughsteps';
import TestimonialContainer from '../components/testimonialContainer';
import FooterContainer from '../components/footerContainer';

export default function Home() {
  return (
    <div>
      <Figure>
        <Figure.Image src={HeroImage}/>
      </Figure>
      <Walkthrough />
      <TestimonialContainer />
      <FooterContainer />
    </div>
  )
}
