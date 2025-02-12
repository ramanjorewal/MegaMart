import React from "react";
import playStore from "../../images/playstore.png";
import appStore from "../../images/Appstore.png";
import logo from "../../images/logo2.png";
import "./layout.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <a href="/">
        <img src={logo} alt="" />
        </a>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2024 &copy; Created By Raman Jorewal</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/ramanjorewal/">LinkedIn</a>
        <a href="https://github.com/ramanjorewal/MegaMart">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
