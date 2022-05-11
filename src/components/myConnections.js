import React, { useState, useEffect} from 'react';
import { Popover, Button, Row } from 'react-bootstrap';
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.requests';
import NewConvoModal from './newConvoModal';


export default function Connections({ dog }) {
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

    // async function getOtherConnections() {
    //     let options = {
    //       url: `/connections/?dog_initializer__user_id=${state.currentUser.user_id}`,
    //       method: 'GET',
    //     } 
    //     let resp = await request(options)
    //     setInitializedAcceptedConnections(resp.data)
    //   }

    getConnections()
    // getOtherConnections()
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
  const [modalShow, setModalShow] = useState(false);
  return (
    <div >
      <h1 className="connections">helllo</h1>
      <ul>
        <li>{connection.dog_target.name}</li> 
      <Button className="new-convo-btn-in-connections" onClick={() => setModalShow(true)}>Message</Button> 
      <NewConvoModal show={modalShow} onHide={() => setModalShow(false)} /> 
      <Button href="#/action-3">Delete</Button>
      </ul>
    </div>
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









// import React, { useState } from "react"
// import AuthService from "../services/auth.service";
// import TestimonialContainer from "../components/testimonialContainer";
// import FooterContainer from "../components/footerContainer";
// import RegisterImage from "../images/registerImage.png";

// const Register2 = () => {
//   const [user, setUser] = useState({
//     username: "",
//     password: "",
//     passwordConf: "",
//     first_name: "",
//     last_name: "",
//     email: "",
//   })

//   const handleChange = (key, value) => {
//     setUser({
//       ...user,
//       [key]: value
//     })
//   }

//   const handleRegister = (e) => {
//     e.preventDefault();
//     AuthService.register(user)
//   }

//   return (
//     <div >
//       <form className="registerBox" onSubmit={handleRegister}>
//         <img className="registerImage" src={RegisterImage} alt="register dog image" ></img>
//         <div>
//           <div>
//             <label className="loginWords" htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               onChange={(e) => handleChange('username', e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="loginWords" htmlFor="email">Email:</label>
//             <input
//               type="text"
//               id="email"
//               name="email"
//               onChange={(e) => handleChange('email', e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="loginWords" htmlFor="pass">Password:</label>
//             <input
//               type="password"
//               id="pass"
//               name="password"
//               minLength="8"
//               required
//               onChange={(e) => handleChange('password', e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="loginWords" htmlFor="passConf">Confirm Password:</label>
//             <input
//               type="password"
//               id="passConf"
//               name="password"
//               minLength="8"
//               required
//               onChange={(e) => handleChange('passwordConf', e.target.value)} />
//           </div>
//           <div>
//             <label className="loginWords" htmlFor="first_name">First Name:</label>
//             <input
//               type="text"
//               id="firstName"
//               name="fname"
            
//               required
//               onChange={(e) => handleChange('first_name', e.target.value)} />
//           </div>
//           <div>
//             <label className="loginWords" htmlFor="last_name">Last Name:</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lname"
//               required
//               onChange={(e) => handleChange('last_name', e.target.value)} />
//           </div>
//           <input
//             className="loginButton"
//             type="submit"
//             value="Sign me up!"
//             disabled={(
//               user.password &&
//               user.password.length >= 8 &&
//               user.password === user.passwordConf &&
//               user.first_name &&
//               user.last_name &&
//               user.email
//             ) ? false : true}
//           />
//         </div>
//       </form>
//       <TestimonialContainer />
//       <FooterContainer />
//     </div>
//   )

// }

// export default Register2