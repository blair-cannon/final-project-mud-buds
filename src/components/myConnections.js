import React, { useState, useEffect} from 'react';
import { Popover, Button, Row } from 'react-bootstrap';
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.requests';
import NewConvoModal from './newConvoModal';


export default function Connections() {
  const [ state, dispatch ] = useGlobalState();
  const [initializedAcceptedConnections, setInitializedAcceptedConnections] = useState([]);
  const [targetedAcceptedConnections, setTargetedAcceptedConnections] = useState([]);

  useEffect(() => {
    async function getConnections() {
      let options = {
        url: `/connections/?dog_target__user_id=${state.currentUser.user_id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      setTargetedAcceptedConnections(resp.data)
    }

    async function getOtherConnections() {
        let options = {
          url: `/connections/?dog_initializer__user_id=${state.currentUser.user_id}`,
          method: 'GET',
        } 
        let resp = await request(options)
        setInitializedAcceptedConnections(resp.data)
      }

    getConnections()
    getOtherConnections()
}, []);

return (
  <div>
      {/* filter connections for being accepted */}
    {initializedAcceptedConnections.filter((connection) => connection.is_accepted === true).map((connection) => <IAConnection key={connection.id} connection={connection} />)}
    {/* {targetedAcceptedConnections.filter((connection) => connection.is_accepted === true).map((connection) => <TAConnection key={connection.id} connection={connection} />)} */}
    </div>
  )
}

// function deleteRequest({ connection }) {
//   // request to delete request from database
//   let options = {
//     url: `/connections/${connection.id}/`,
//     method: 'DELETE',
//   } 
//   let variable = request(options)
//   // filter to remove the 'deleted' notification from UI
//   let newConnections = connections.filter((connection) => connection.id !== notification.id)
//   setConnections(newConnections)
// }

const IAConnection = ({ connection }) => {
  // const [modalShow, setModalShow] = useState(false);
  return (
    <>hello
      <ul>
        <li>{connection.dog_target.name}</li> 
      <Button className="new-convo-btn-in-connections" onClick={() => setModalShow(true)}>Message</Button> 
      <NewConvoModal show={modalShow} onHide={() => setModalShow(false)} /> 
      <Button href="#/action-3">Delete</Button>
      </ul>
    </>
  )
}

// const TAConnection = ({ connection }) => {
//   const [modalShow, setModalShow] = useState(false);
//   return (
//     <div className="connections-btn">
//       <Dropdown.ItemText>{connection.dog_target.name}</Dropdown.ItemText>
//       <Button className="new-convo-btn-in-connections" onClick={() => setModalShow(true)}>Message</Button>
//         <NewConvoModal show={modalShow} onHide={() => setModalShow(false)} />
//       <Button href="#/action-3">Delete</Button>
//     </div>
//   )
// }