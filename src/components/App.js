import '../index.css'
import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import PetOwners from "./PetOwners"
import PetSitters from "./PetSitters"
import AddOwnerForm from "./AddOwnerForm"


function App() {

  useEffect(() => {
    document.title = "Mitts Match"
  }, [])

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLoginClick() {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <main>
        <Router>
            <Navbar isLoggedIn={isLoggedIn} onLoginClick={handleLoginClick}/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/PetOwners" element={<PetOwners />} />
                <Route exact path="/PetSitters" element={<PetSitters />} />
                <Route exact path="/AddOwnerForm" element={<AddOwnerForm />} />
            </Routes>
        </Router>

    </main>
  );
}

export default App;