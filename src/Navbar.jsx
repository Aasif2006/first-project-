import React from 'react'
import './index.css';
function Navbar() {
  return (
    <div className="container">
        <div className="logo">
            <img src="./image/name.jpg" alt="hi moto" />
        </div>
        <div className="nav">
            <a href=""><h4>HOME</h4></a>
            <a href=""><h4>ABOUT</h4></a>
            <a href=""><h4>CONTACT</h4></a>
            <a href=""><h4>PROJECT</h4></a>
            <a href=""><h4>OFFER</h4></a>
            <a href=""><h4>NEWS</h4></a>
            <a href=""><h4>SARVICE</h4></a>
        </div>
    </div>
  )
}

export default Navbar