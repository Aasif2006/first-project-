import React from 'react'
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='footer-o'>
<div className="google">
    <img src="./image/google.jpeg" alt="hi" />
</div>
<div className="cost">
    <img src="./image/cost.png" alt="" />
</div>
<div className="jour">
    <img src="./image/jour.jpeg" alt="" />
</div>
    </div>

    <div className="last">
        <div className="p">
            <p>©2024 Web Solutions</p>
        </div>
        <div className="s">
            <p>Website Funding available for Small Business Website Design</p>
        </div>
        <div className="icon">
        <FaTelegram className='i'/>
        <FaInstagram className='i'/>
        <FaFacebook className='i'/>

        </div>
    </div>
    </>
  )
}

export default Footer