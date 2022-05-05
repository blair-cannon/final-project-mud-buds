import React, { useState, useEffect } from 'react';
import request from '../services/api.requests';
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
  
  function deleteRequest({ notification }) {
    // request to delete request from database
    let options = {
      url: `/connections/${notification.id}/`,
      method: 'DELETE',
    } 
    let variable = request(options)
    // filter to remove the 'deleted' notification from UI
    let newConnections = connections.filter((connection) => connection.id !== notification.id)
    setConnections(newConnections)
  }
  
  async function acceptConnection({ notification }) {
    // update boolean is_accepted to true to accept connection
    // headers: { "Content-Type": "multipart/form-data" }, try adding this and seeing if it works
    const params = new URLSearchParams();
    // will send the data as type: formData
    params.append('is_accepted', 'true');
    try {  
      let options = {
        url: `/connections/${notification.id}/`,
        method: 'PATCH',
        data: params
      } 
      let variable = await request(options)
      // filter to removed 'accepted' notification from UI
      let newConnections = connections.filter((connection) => connection.id !== notification.id)
      setConnections(newConnections)
    } 
    catch(error) {
        console.log(error)
    }
  }
  
  return (
    <div>  
    {connections.map((notification) => <Notification key={notification.id} notification={notification} acceptConnection={acceptConnection} deleteRequest={deleteRequest} />)}
    </div>
  )
}

const Notification = ({ notification, acceptConnection, deleteRequest }) => {
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
    
