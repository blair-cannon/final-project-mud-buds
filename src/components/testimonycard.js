import React from 'react'
import {Card} from 'react-bootstrap'
import Placeholder from '../images/placeholder.png'

export default function TestimonyCard() {
  return (
    
    //   want to pull the most recent three 
    <Card className="testimonialCard">
      <Card.Img src={Placeholder} />
      <Card.Body>
        <Card.Text>
            "Lorem Ipsum kā standarta parauga tekstu un, izmantojot vēl gaida savu piedzimšanu." -Sam Jones & Buddy
        </Card.Text>
        {/* <Card.Title>-User name & dog name</Card.Title> */}
      </Card.Body>
    </Card>
  )
}
