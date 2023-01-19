import './App.css'
import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import PetOwners from "./PetOwners"
import PetSitters from "./PetSitters"


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/PetOwners" element={<PetOwners />} />
                <Route exact path="/PetSitters" element={<PetSitters />} />
            </Routes>
        </Router>

    </>
  );
}

export default App;