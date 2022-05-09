import React, { useState } from "react"
import AuthService from "../services/auth.service";
import TestimonialContainer from "../components/testimonialContainer";
import FooterContainer from "../components/footerContainer";
import RegisterImage from "../images/registerImage.png";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    first_name: "",
    last_name: "",
    email: "",
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user)
  }

  return (
    <div >
      <form className="registerBox" onSubmit={handleRegister}>
        <img className="registerImage" src={RegisterImage} alt="register dog image" ></img>
        <div>
          <div>
            <label className="loginWords" htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => handleChange('username', e.target.value)}
              required
            />
          </div>
          <div>
            <label className="loginWords" htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </div>
          <div>
            <label className="loginWords" htmlFor="pass">Password:</label>
            <input
              type="password"
              id="pass"
              name="password"
              minLength="8"
              required
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </div>
          <div>
            <label className="loginWords" htmlFor="passConf">Confirm Password:</label>
            <input
              type="password"
              id="passConf"
              name="password"
              minLength="8"
              required
              onChange={(e) => handleChange('passwordConf', e.target.value)} />
          </div>
          <div>
            <label className="loginWords" htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="fname"
            
              required
              onChange={(e) => handleChange('first_name', e.target.value)} />
          </div>
          <div>
            <label className="loginWords" htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="lastName"
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