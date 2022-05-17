import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Placeholder1 from '../images/placeholder1.jpg';
import Placeholder2 from '../images/placeholder2.jpg';
import Placeholder3 from '../images/placeholder3.jpg';

export default function TestimonialContainer() {
  return (    
    <Container fluid className="darkredContainer">
      <Card className="testimonialCard">
        <Card.Img src={Placeholder1} />
        <Card.Body>
          <Card.Text className="testimonial-text">
              "Harley and I were new to the area and are super grateful to have met his new best bud, Thor." 
              <br/>
              -Sam Jones & Harley
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="testimonialCard">
        <Card.Img src={Placeholder2} />
        <Card.Body>
          <Card.Text className="testimonial-text">
              "Why haven't we done this before! Charlie has loved his playdates! Thank you MudBuds!" 
              <br/>
              -Nathan Smith & Charlie
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="testimonialCard">
        <Card.Img src={Placeholder3} />
        <Card.Body>
          <Card.Text className="testimonial-text">
              "Minnie is easily intimidated by other dogs so a little speed dating was perfect for her." 
              <br/>
              -Hannah Thompson & Minnie
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}
