import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import StartUp from "./Components/StartUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./Components/Firebase";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<StartUp />} />
          <Route path="/home" element={<Home name={userName} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
