import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import request from '../services/api.requests.js';
import { useGlobalState } from "../context/GlobalState";

async function acceptConnection({ notification }) {
    let options = {
        url: `/connections/${notification.id}/`,
        method: 'PATCH',
        body: JSON.stringify({"is_accepted": true})
      } 
      let variable = await request(options)
      // .then(response => { console.log(response.status);
      //   return response.json();  })  
      // .then(data => console.log(data));

    // update boolean is_accepted to true ?
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
                <button>X</button>
            </li>
        </div>
      )
    }
   