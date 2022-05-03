import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import request from '../services/api.requests.js';
import { useGlobalState } from "../context/GlobalState";


export default function Convos() {
  const [ state, dispatch ] = useGlobalState();
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    async function getConnections() {
      let options = {
        url: `/connections/?dog_target__user_id=${state.currentUser.user_id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      setConnections(resp.data)
    }
    getConnections()
  }, []);
  

  return (
    <div>  
    {connections.map((notification) => <Notification key={notification.id} notification={notification} />)}
    </div>
  )
  }

const Notification = ({ notification }) => {
    return (
        <div>
            <p>{notification.dog_initializer.name}</p>
        </div>
      )
    }
    