import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./Firebase";
const StartUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
        });
        setErrorMessage("");
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
      });

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Firebase Sign-Up</h2>
        <input
          required
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          required
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          required
          type="password"
          placeholder="Enter a Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errorMessage ? (
          <span style={{ color: "red" }}>{errorMessage}</span>
        ) : null}
        <button type="submit">Sign Up</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default StartUp;
