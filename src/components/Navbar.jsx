import React from 'react'
import { Link } from 'react-router-dom'
import homeImage from '../assets/home-icon.png'



export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
    <Link to={'/'}>
        <img src={homeImage} alt="home-icon"></img>
    </Link>
    </div>
  </nav>
  )
}
