// import React, { useState, useEffect } from 'react';
// import {Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// import request from '../services/api.requests.js';
// import { useGlobalState } from "../context/GlobalState";
// import NewConvoModal from './newConvoModal.js';


// export default function Connections({ dog }) {
//     console.log(dog)
//   const [ state, dispatch ] = useGlobalState();
//   const [targetedAcceptedConnections, setTargetedAcceptedConnections] = useState([]);
//   const [initializedAcceptedConnections, setInitializedAcceptedConnections] = useState([]);

//   useEffect(() => {
//     async function getConnections() {
//       let options = {
//         url: `/connections/?dog_target__name=${dog.name}`,
//         method: 'GET',
//       } 
//       let resp = await request(options)
//       setTargetedAcceptedConnections(resp.data)
//     }

//     async function getOtherConnections() {
//         let options = {
//           url: `/connections/?dog_initializer__name=${dog.name}`,
//           method: 'GET',
//         } 
//         let resp = await request(options)
//         setInitializedAcceptedConnections(resp.data)
//       }

//     getConnections()
//     getOtherConnections()

// }, []);

// return (
//     <div>
//         {targetedAcceptedConnections.filter((connection) => connection.is_accepted === true).map((connection) => <TAConnection dog={dog} key={connection.id} connection={connection} />)}
//         {initializedAcceptedConnections.filter((connection) => connection.is_accepted === true).map((connection) => <IAConnection dog={dog} key={connection.id} connection={connection} />)}
//     </div>
//   )
// }

// const TAConnection = ({ connection }) => {
//     const [modalShow, setModalShow] = useState(false);
//     console.log('TA', connection)
//     return (
//       <div >
//         <h1 className="connections">helllo</h1>
//         <ul>
//           <li>{connection.dog_initializer.name}</li> 
//         <Button className="new-convo-btn-in-connections" onClick={() => setModalShow(true)}>Message</Button>
//             <NewConvoModal show={modalShow} onHide={() => setModalShow(false)} /> 
//         <Button href="#/action-3">Delete</Button>
//         </ul>
//       </div>
//     )
//   }
  
//   const IAConnection = ({ connection }) => {
//     const [modalShow, setModalShow] = useState(false);
//     console.log('IA', connection)
//     return (
//       <div >
//         <h1 className="connections">helllo</h1>
//         <ul>
//           <li>{connection.dog_target.name}</li> 
//         <Button className="new-convo-btn-in-connections" onClick={() => setModalShow(true)}>Message</Button> 
//             <NewConvoModal show={modalShow} onHide={() => setModalShow(false)} /> 
//         <Button href="#/action-3">Delete</Button>
//         </ul>
//       </div>
//     )
//   }  