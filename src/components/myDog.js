import React, { useState, useEffect } from 'react';
import {Card, Button } from 'react-bootstrap';
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.requests';
import EditDogModal from './editDogModal';

let ReadMoreEnum = {
  false: "Read More",
  true: "Read Less"
}

export default function MyDog() {

  const [ state, dispatch ] = useGlobalState();

return (
  <>
    {state.dogs.map((dog) => <Dog key={dog.id} dog={dog} />)}
  </>
  )
}
const Dog = ({ dog }) => {
  const [ dogImage, setDogImage ] = useState();
  const [ state, dispatch ] = useGlobalState();
  const [modalShow, setModalShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [readMoreText, setReadMoreText] = useState(ReadMoreEnum["false"]);
  const [className, setClassName] = useState("closed");

  useEffect(() => {
    async function getMyDogImage() {
      let options = {
        url: `/images/?dog=${dog.id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      console.log(resp)
      // if(resp.data[0].image){
        setDogImage(resp.data[0].image)
      // }
      // else if(!resp.data[0].image){     
      //     const interval  = setInterval(()=>{
      //         getMyDogImage()
      //       }, 1000);
      //       return () => clearInterval(interval);
      //     }
        }
    getMyDogImage()
  }, [])


    async function deleteDog() {
      try {  
        let options = {
          url: `/dogs/${dog.id}`,
          method: 'DELETE',
        } 
        let resp = await request(options)
        let updatedDogs = state.dogs.filter((savedDog) => savedDog.id !== dog.id)
        dispatch({dogs: updatedDogs})
        localStorage.setItem('mydogs', JSON.stringify(updatedDogs));
      }
      catch(error) {
        console.log(error)
      }
    }

    const handleClick = () => {
      const nextIsOpen = !isOpen;
      setIsOpen(nextIsOpen);
      setClassName(nextIsOpen ? "open" : "closed");
      setReadMoreText(ReadMoreEnum[`${nextIsOpen}`]);
    };

  return (
    <div className="dog-profile-div">
          <Card className="myDogCard">
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
        <Button onClick={handleClick}>{readMoreText}</Button>
        <Card.Text className="dogTags">
          #{dog.tags.map((tag) => tag).join(' #')}
        </Card.Text>
      </Card.Body>
      <Card.Body>
          <Button onClick={() => setModalShow(true)}>Edit</Button>
          <EditDogModal dog={dog} show={modalShow} onHide={() => setModalShow(false)}/>
          <Button onClick={deleteDog} >Delete</Button>
        </Card.Body>
    </Card>
    </div>
  )
}