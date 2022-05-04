import React, { useState, useEffect } from 'react';
import request from '../services/api.requests.js';
import { useGlobalState } from "../context/GlobalState";

async function acceptConnection({ notification }) {
  const params = new URLSearchParams();
  // update boolean is_accepted to true 
  params.append('is_accepted', 'true');  
  // will send the data as formData
  let options = {
        url: `/connections/${notification.id}/`,
        method: 'PATCH',
        data: params
      } 
      let variable = await request(options)
  }

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
  
  
  function deleteRequest({ notification }) {
    // filter to remove the 'deleted' notification
    let newConnections = connections.filter((connection) => connection.id !== notification.id)
    setConnections(newConnections)
      }

  return (
    <div>  
    {connections.map((notification) => <Notification key={notification.id} notification={notification} />)}
    </div>
  )
  }

const Notification = ({ notification }) => {
    return (
        <div>
            <li>
                {notification.dog_initializer.name}
                <button onClick={() => {acceptConnection({ notification })}}>check</button>
                <button onClick={() => {deleteRequest({ notification })}}>X</button>
            </li>
        </div>
      )
    }
   