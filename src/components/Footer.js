import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <a href="www.facebook.com">
        <FaFacebookF />
      </a>
      <a href="www.facebook.com">
        <BsInstagram />
      </a>
      <a href="www.facebook.com">
        <FaTwitter />
      </a>
      <a href="www.facebook.com">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default Footer;
