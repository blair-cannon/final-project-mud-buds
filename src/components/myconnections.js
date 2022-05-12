import React, { useState, useEffect } from 'react';
import {Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import request from '../services/api.requests.js';
import { useGlobalState } from "../context/GlobalState";
import NewConvoModal from './newConvoModal.js';


export default function Connections({ dog }) {
    console.log(dog)
  const [ state, dispatch ] = useGlobalState();
  const [targetedAcceptedConnections, setTargetedAcceptedConnections] = useState([]);
  const [initializedAcceptedConnections, setInitializedAcceptedConnections] = useState([]);

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
        <h1 className="connections">Friends</h1>
        {targetedAcceptedConnections.filter((connection) => connection.is_accepted === true).map((connection) => <TAConnection dog={dog} key={connection.id} connection={connection} setTargetedAcceptedConnections={setTargetedAcceptedConnections} targetedAcceptedConnections={targetedAcceptedConnections} />)}
        {initializedAcceptedConnections.filter((connection) => connection.is_accepted === true).map((connection) => <IAConnection dog={dog} key={connection.id} connection={connection} setInitializedAcceptedConnections={setInitializedAcceptedConnections} initializedAcceptedConnections={initializedAcceptedConnections}  />)}
    </div>
  )
}

const TAConnection = ({ connection, setTargetedAcceptedConnections, targetedAcceptedConnections }) => {
    const [modalShow, setModalShow] = useState(false);

    function deleteFriend({ connection }) {
        // request to delete request from database
        let options = {
        url: `/connections/${connection.id}/`,
        method: 'DELETE',
        } 
        let variable = request(options)
        // filter to remove the 'deleted' notification from UI
        let newConnections = targetedAcceptedConnections.filter((friend) => friend.id !== connection.id)
        setTargetedAcceptedConnections(newConnections)
    }
    return (
      <div >
        <ul>
          <li>{connection.dog_initializer.name}</li> 
        <Button className="new-convo-btn-in-connections" onClick={() => setModalShow(true)}>Message</Button>
            <NewConvoModal show={modalShow} onHide={() => setModalShow(false)} /> 
        <Button onClick={() => {deleteFriend({ connection })}}>Delete</Button>
        </ul>
      </div>
    )
  }
  
  const IAConnection = ({ connection, initializedAcceptedConnections, setInitializedAcceptedConnections  }) => {
    const [modalShow, setModalShow] = useState(false);

    function deleteFriend({ connection }) {
        // request to delete request from database
        let options = {
        url: `/connections/${connection.id}/`,
        method: 'DELETE',
        } 
        let variable = request(options)
        // filter to remove the 'deleted' notification from UI
        let newConnections = initializedAcceptedConnections.filter((friend) => friend.id !== connection.id)
        setInitializedAcceptedConnections(newConnections)
    }

    return (
      <div >
        <ul>
          <li>{connection.dog_target.name}</li> 
        <Button className="new-convo-btn-in-connections" onClick={() => setModalShow(true)}>Message</Button> 
            <NewConvoModal show={modalShow} onHide={() => setModalShow(false)} /> 
        <Button onClick={() => {deleteFriend({ connection })}}>Delete</Button>
        </ul>
      </div>
    )
  }  