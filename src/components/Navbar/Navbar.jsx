import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">UniStay</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Bookings</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
