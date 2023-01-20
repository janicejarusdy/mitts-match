import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { NavLink, Link } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import './Navbar.css'
import { IconContext } from 'react-icons'
import {isLoggedIn , onLoginClick} from "./App"

function Navbar({ isLoggedIn, onLoginClick }) {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <NavLink to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavLink>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <button style={{backgroundColor: "yellow"}} onClick={onLoginClick}> {isLoggedIn ? "Logout" : "Login"} </button>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
