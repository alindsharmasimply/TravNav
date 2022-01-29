import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import { useState } from "react";
import "./register.css";
import React from "react";
import { useRef } from "react";

function Register({ setShowRegister }) {
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("/users/register", newUser);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="registerContainer">
      <div className="logo">
        <Room />
        TravNav
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={nameRef}></input>
        <input type="email" placeholder="email" ref={emailRef}></input>
        <input type="password" placeholder="password" ref={passwordRef}></input>
        <button className="registerBtn">Register</button>
        {success && (
          <span className="success">Successful. You can login now!</span>
        )}
        {error && <span className="failure">Something went wrong!</span>}
      </form>
      <Cancel
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
}

export default Register;
