import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.scss'
import imageIcon from "../assets/controlRoom/Group 12-1.png"

const NavBar = () => {
  return (
    <header className='container__NavBar'>
       <span><img className='iconNavBar' src={imageIcon} alt="iconRocket"/>The Last Mission</span>
        <nav className='container__NavBar-navBar'>
            <Link to="/" ><span className="navBar_Link">Planets</span></Link>
            <span className='dot'></span>
            <Link to="/controlroom"><span className="navBar_Link">Control Room</span></Link>
        </nav>  
    </header>
  )
}

export default NavBar