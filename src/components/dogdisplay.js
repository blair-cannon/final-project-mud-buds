import React, { useState, useEffect } from 'react';
import {Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import request from '../services/api.requests.js';
import { useGlobalState } from "../context/GlobalState";
import { motion } from 'framer-motion';


let ReadMoreEnum = {
  false: "Read More",
  true: "Read Less"
}

export default function Dogdisplay() {
  let navigate = useNavigate();
  const [ state, dispatch ] = useGlobalState();
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function getFeed() {
      let options = {
        url: '/dogs/',
        method: 'GET',
      } 
      let resp = await request(options)
      setFeed(resp.data)
    }

    getFeed()
}, []);

  if (state.dogs.length == 0) {
    return (
      navigate('/createDogPrompt')
    )
  }
  else {
    return (
      <div className="feedDogs">
          {/* filter for all dogs that aren't owned by the logged in user */}
        {feed.filter((dog) => dog.user.id !== state.currentUser.user_id).map((dog) => <IndividualDog className="dogCard" key={dog.id} dog={dog} feed={feed} setFeed={setFeed} />)}
        </div>
      )
  }
}

const IndividualDog = ({ dog, feed, setFeed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [readMoreText, setReadMoreText] = useState(ReadMoreEnum["false"]);
  const [className, setClassName] = useState("closed");
  const [ dogImage, setDogImage ] = useState();
  const [ state, dispatch ] = useGlobalState();
  const [connectionData, setConnectionData] = useState({
    dog_initializer: state.dogs[0].id,
    dog_target: dog.id,
    is_accepted: false,
  })
    useEffect(() => {
      async function getDogImage() {
        let options = {
          url: `/images/?dog=${dog.id}`,
          method: 'GET',
        } 
        let resp = await request(options)
        setDogImage(resp.data[0].image)
      }
      getDogImage()
    }, [])


    var rightOccurred = false;
    var leftOccurred = false;

  async function checkPlacement(event,  info) {
    if(info.offset.x > 0 && !rightOccurred){
        rightOccurred = true;
      // request to be friends and take off screen
      let newFeed = feed.filter((feedDog) => feedDog.id !== dog.id)
      setFeed(newFeed)
      setConnectionData(connectionData)
      try {
        let options = {
          method: "POST",
          url: '/connections/',
          data: connectionData,
        }
        let resp = await request(options)
      }
      catch(error) {
      console.log(error)
      }
    }
    else if (info.offset.x < 0 && !leftOccurred) {
      // skip and take off screen
      let newFeed = feed.filter((feedDog) => feedDog.id !== dog.id)
      setFeed(newFeed)
      leftOccurred = true;
    }
  }

  const handleClick = () => {
    const nextIsOpen = !isOpen;
    setIsOpen(nextIsOpen);
    setClassName(nextIsOpen ? "open" : "closed");
    setReadMoreText(ReadMoreEnum[`${nextIsOpen}`]);
  };

  return (
    <motion.div
    drag="x"
    onDrag={checkPlacement}
  >
    <Card className="dogCard">
      <Card.Body>
        <Card.Img className="imageSize" src={dogImage} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="dogTitle">{dog.name}, {dog.age}</Card.Title>
        </Card.ImgOverlay>
        <Card.Text className="owned-by">
          Owned By:{dog.user.first_name}
        </Card.Text>
        <Card.Text className={`${className}`}>
          {dog.gender.label}, {dog.breed.name}.
          <br/>
          {dog.about_me}
          <br/>
          My favorite park is...
          <br/>
          {dog.favorite_park.name}
          <br />
          Size: {dog.size.label}
          <br />
          Aggression level: {dog.aggression.label}
          <br />
          Socialization level: {dog.socialization.label}
          <br />
          Fixed? {JSON.stringify(dog.is_fixed)}
        </Card.Text>
        <Button className="read-more-btn" onClick={handleClick}>{readMoreText}</Button>
        <Card.Text className="dogTags">
          #{dog.tags.map((tag) => tag).join(' #')}
        </Card.Text>
      </Card.Body>
    </Card>
  </motion.div>
  )
}