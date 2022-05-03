import React, { useState, useEffect } from "react"
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";
import CurrentDogs from "../context/CurrentDogs";
import TestimonialContainer from "../components/testimonialContainer";
import FooterContainer from "../components/footerContainer";
import LoginImage from "../images/loginImage.png";

const Login = () => {
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [userDogs, setCurrentUserDogs] = useState([]);


  const handleLogin = (e) => {
    e.preventDefault();

    AuthService
      .login(username, password)
      .then(async (resp) => {
        let data = jwtDecode(resp.access)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data,
          currentUserDogs: {CurrentDogs},
        })
        navigate('/')
      });
  }

//   const getUserDogs = () => {  
//     useEffect(() => {
//       async function getDogs() {
//         let options = {
//           url: `/dogs/?name=&breed__name=&size__label=&gender__label=&user=${state.currentUser.user_id}`,
//           method: 'GET',
//         } 
//         let resp = await request(options)
//         setCurrentUserDogs(resp.data)
//       }
  
//       getDogs()
//     }, []);
//   }
// {console.log(userDogs)}
  return (
    <div>
      <form className="loginBox" onSubmit={handleLogin}>
      <img className="loginImage" src={LoginImage} alt="log in dog image" ></img>
        <div>
          <label className="loginWords" htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="loginWords" htmlFor="pass">Password: </label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          className="loginButton"
          type="submit"
          value="Let's play!"
        />
      </form>
      <TestimonialContainer />
      <FooterContainer />
    </div>
  )

}

export default Login
