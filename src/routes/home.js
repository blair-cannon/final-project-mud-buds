import React from 'react';
// import HeroImage from '../images/dog_hero.png'
import Luka from '../images/luka.jpeg';
import Slogan from '../images/homePageSlogan.png';
import {Figure, Container} from 'react-bootstrap';
import Walkthrough from '../components/walkthroughsteps';
import TestimonialContainer from '../components/testimonialContainer';
import FooterContainer from '../components/footerContainer';

export default function Home() {
  return (
    <div>
      <div className="hero">
      <Figure>
        <Figure.Image className="sloganImage" src={Slogan}/>
      </Figure>
      <Figure>
        <Figure.Image className="dogHeroImage" src={Luka}/>
      </Figure>
      </div>
      <Walkthrough />
      <TestimonialContainer />
      <FooterContainer />
    </div>
  )
}
