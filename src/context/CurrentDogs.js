import { useGlobalState } from "../context/GlobalState";
import React, { useEffect, useState } from 'react';
import request from '../services/api.requests.js';
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function CurrentDogs() {
  const [ state, dispatch ] = useGlobalState();
  // const [currentUserDogs, setCurrentUserDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      let options = {
        url: `/dogs/?name=&breed__name=&size__label=&gender__label=&user=${state.currentUser.user_id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      dispatch(
        currentUserDogs = resp.data,
      )
    }

    getDogs()
}, []);
  console.log('state:' + {state})
  // return (
  //   <div>
  //   {allDogs.filter((user_dog) => user_dog.user === state.currentUser.user_id).map((user_dog) => <MyDog key={user_dog.id} user_dog={user_dog} />)}
  //   </div>
  // )

}

// const MyDog = ({ user_dog }) => {
//   return (
//     <div>
//     <Card className="dogCard">
//       <Card.Body>
//         <Card.Img src='#' alt="Card image" />
//         <Card.ImgOverlay>
//           <Card.Title className="dogTitle">{user_dog.name}, {user_dog.age}</Card.Title>
//         </Card.ImgOverlay>
//         <Card.Text className="genderAndbreed">
//           {user_dog.gender}, {user_dog.breed}
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroupItem>
//           {user_dog.about_me}
//         </ListGroupItem>
//         <ListGroupItem className="dogTags">
//           #{user_dog.tags.map((tag) => tag).join(' #')}
//         </ListGroupItem>
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">connect</Card.Link>
//         <Card.Link href="#">skip</Card.Link>
//         <Card.Link href="#">message</Card.Link>
//       </Card.Body>
//     </Card>
//   </div>
//   )
// }