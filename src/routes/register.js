import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";
import TestimonialContainer from "../components/testimonialContainer";
import FooterContainer from "../components/footerContainer";

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    first_name: "",
    last_name: "",
    email: "",
  })

  const handleChange = (key, value) => {
    if (key == 'password' && value.length < 8) {
      document.querySelector('#helperText1').hidden = false;
    }
    else if (key == 'password' && value.length >= 8) {
      document.querySelector('#helperText1').hidden = true;
    }
    else if (key == 'passwordConf' && value !== user.password) {
      document.querySelector('#helperText2').hidden = false;
    }
    else if (key == 'passwordConf' && value == user.password) {
      document.querySelector('#helperText2').hidden = true;
    }
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user)
      navigate('/login')
  }

  return (
    <div >
      <form className="registerBox" onSubmit={handleRegister}>
        <h1 className="login-register-header">Create Account.</h1>
        <div>
          <div>
            <label className="registerWords" htmlFor="username">Username:</label>
            <br/>
            <input
              type="text"
              id="username"
              className="loginInput"
              name="username"
              onChange={(e) => handleChange('username', e.target.value)}
              required
            />
          </div>
          <div>
            <label className="registerWords" htmlFor="email">Email:</label>
            <br/>
            <input
              type="text"
              id="email"
              className="loginInput"
              name="email"
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </div>
          <div>
            <label className="registerWords" htmlFor="pass">Password:</label>
            <br/>
            <input
              type="password"
              id="pass"
              className="loginInput"
              name="password"
              minLength="8"
              required
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </div>
          <p id="helperText1" className="bg-warning text-dark m-auto mt-2" hidden={true}>Password should be a minimum of 8-digits.</p>
          <div>
            <label className="registerWords" htmlFor="passConf">Confirm Password:</label>
            <br/>
            <input
              type="password"
              id="passConf"
              className="loginInput"
              name="password"
              minLength="8"
              required
              onChange={(e) => handleChange('passwordConf', e.target.value)} />
          </div>
          <p id="helperText2" className="bg-warning text-dark m-auto mt-2" hidden={true}>Passwords do not match.</p>
          <div>
            <label className="registerWords" htmlFor="first_name">First Name:</label>
            <br/>
            <input
              type="text"
              id="first_name"
              className="loginInput"
              name="fname"
            
              required
              onChange={(e) => handleChange('first_name', e.target.value)} />
          </div>
          <div>
            <label className="registerWords" htmlFor="last_name">Last Name:</label>
            <br/>
            <input
              type="text"
              id="last_name"
              className="loginInput"
              name="lname"
              required
              onChange={(e) => handleChange('last_name', e.target.value)} />
          </div>
          <input
            className="loginButton"
            type="submit"
            value="Sign me up!"
            disabled={(
              user.password &&
              user.password.length >= 8 &&
              user.password === user.passwordConf &&
              user.first_name &&
              user.last_name &&
              user.email
            ) ? false : true}
          />
        </div>
      </form>
      <TestimonialContainer />
      <FooterContainer />
    </div>
  )

}

export default Register