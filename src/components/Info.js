import React from 'react'
import profile from '../assets/profile.jpg'
import '../assets/style.css'
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Info = () => {
  return (
    <div className="info">
        <img src={profile} alt="" />
        <h2>Laura Smith</h2>
        <h3>Frontend Developer</h3>
        <a href='youtube.com'>laurasmith website</a>
        <div className='btn'>
          <button className='email'><FaFacebookF />Email</button>
          <button className='linkedin'><BsInstagram />Linkedin</button>
        </div>
    </div>
  )
}

export default Info