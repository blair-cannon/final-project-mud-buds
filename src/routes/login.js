import React, { useState, useEffect } from "react"
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";
import TestimonialContainer from "../components/testimonialContainer";
import FooterContainer from "../components/footerContainer";
import LoginImage from "../images/loginImage.png";
import request from "../services/api.requests";

const Login = () => {
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();

    AuthService
      .login(username, password)
      .then(async (resp) => {
        let data = jwtDecode(resp.access)
        let dogs = await getUserDogs(data.user_id)
        let conversations = await getUserConversations(data.user_id)

        // Update the state globally for all expected values, in GlobalState.js -> initialState
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data,
          dogs,
          conversations
        })
        localStorage.setItem('mydogs', JSON.stringify(dogs));
        localStorage.setItem('myconversations', JSON.stringify(conversations));
        navigate('/')
      });
  }

  const getUserDogs = async (id) => {  
    let options = {
      url: `/dogs/?user_id=${id}`,
      method: 'GET',
    }

    let resp = await request(options)
    return resp.data
  }

  const getUserConversations = async (id) => {  
    let options = {
      url: `/conversations/?user_id=${id}`,
      method: 'GET',
    }

    let resp = await request(options)
    return resp.data
  }


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
