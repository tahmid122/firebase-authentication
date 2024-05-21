import React, { useState } from "react";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Home = ({ name }) => {
  const navigate = useNavigate();
  const [isSignOut, setIsSignOut] = useState(true);
  const handleSubmit = () => {
    signOut(auth)
      .then(() => {
        navigate("/home");
        setIsSignOut(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="container" id="home">
      {isSignOut ? <h1>Welcome {name}</h1> : <h1>Please Login/Sign-up</h1>}

      {isSignOut ? (
        <button type="submit" onClick={handleSubmit}>
          Sign Out
        </button>
      ) : (
        <Link to={"/"} id="style">
          Login/Sign-up
        </Link>
      )}
    </div>
  );
};

export default Home;
