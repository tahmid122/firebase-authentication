import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
      });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Firebase Login</h2>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          required
          placeholder="Enter a Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errorMessage ? (
          <span style={{ color: "red" }}>{errorMessage}</span>
        ) : null}
        <button type="submit">Login</button>
        <span>
          Have'nt an account? <Link to={"/"}>Sign Up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
