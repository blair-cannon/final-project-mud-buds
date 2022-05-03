import React from 'react';
import TestimonyCard from './testimonycard';
import { Container } from 'react-bootstrap';

export default function TestimonialContainer() {
  return (    
        <Container fluid className="darkredContainer">
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
        </Container>
  )
}
