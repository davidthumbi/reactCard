import React from 'react'
import profile from '../assets/profile.jpg'
import '../assets/style.css'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Info = () => {
  return (
    <div className="info">
      <img src={profile} alt="" />
      <h2>Laura Smith</h2>
      <h3>Frontend Developer</h3>
      <a href="youtube.com">laurasmith website</a>
      <div className="btn">
        <button className="email">
          <AiOutlineMail />
          Email
        </button>
        <button className="linkedin">
          <AiOutlineLinkedin />
          Linkedin
        </button>
      </div>
    </div>
  );
}

export default Info