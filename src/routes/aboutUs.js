import React from 'react';
import aboutUs from '../images/aboutUs.jpg';
import Footer from '../components/footerContainer';

export default function Aboutus() {
  return (
    <>
    <div className="about-us-div">
      <div>
        <h1 className="about-us-header">Our Story</h1>
        <p className="quoteLeft">
            "Man, how are you supposed to meet
            <br/> people nowadays? Unless you 
            <br/>have plans to meet someone,
            <br/>I feel like it's impossible
            <br/> to introduce yourself."
        </p>
        <p className="quoteRight">
            "Yeah, so imagine that but also
            <br/>being a pet dog and having
            <br/>no say over your social life.
            <br/>Somone has to make it happen for them!"
        </p>
        <h1 className="about-us-header-2">Our Mission</h1>
        <p className="about-us-mission">To connect pets and people through a growing social norm: blind 'dates'.</p>
        <img className="about-us-image" src={aboutUs} alt="about us"></img>
      </div>
    </div>
    <Footer />
    </>
  )
}
