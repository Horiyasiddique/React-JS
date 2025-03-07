import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <Footer>
        <div>
          <img src="/public/logo.png" alt="Logo of Restaurant" />
          <div>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Footer>
    </>
  );
}

export default Footer;
