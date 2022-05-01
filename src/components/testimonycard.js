import React from 'react'
import {Figure} from 'react-bootstrap'
import Placeholder from '../images/placeholder.png'

export default function TestimonyCard() {
  return (
    
    //   want to pull the most recent three 
    <Figure>
        <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={Placeholder}
        />
        <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum. 
        (get the user first_name, dog(s) name, and then there testimony, with the profile pic)
        </Figure.Caption>
    </Figure>
  )
}
