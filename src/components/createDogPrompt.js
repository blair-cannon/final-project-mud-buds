import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialContainer from './testimonialContainer';

export default function CreateDogPrompt() {
  return (
    <>
        <div className="create-dog-prompt">
            <h1>The fun is about to begin!</h1>
            <div className="sentence-and-link">
                <h2 className="step-1-prompt">1. Create your dog profile </h2>
                <Link to={"/profile"}> HERE!</Link>
            </div>
            <h2>2. Revist the feed tab to start making connections!</h2>
            <h2>3. Message with friends & go on Puppy Playdates!!</h2>
        </div>
            <TestimonialContainer />
    </>
  )
}
