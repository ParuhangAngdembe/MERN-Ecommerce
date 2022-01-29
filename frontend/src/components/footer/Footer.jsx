/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./footer.css";
import playstore from "../../images/playstore.png";
import applestore from "../../images/Appstore.png";
import logo from "../../images/logo.2.png";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download</h4>
        <img src={playstore} alt="playstore" />
        <img src={applestore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <img className="logo" src={logo} alt="shoe store" />
        <p>SOLES</p>
        <p>जुत्ता पसल</p>
        <p>Copyrights 2022 &copy; Paruhang Angdembe</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a
          href="https://www.instagram.com/paruhangisoffline/"
          class="fab fa-instagram"
        ></a>
        <a
          href="https://www.youtube.com/channel/UCd83oZkCmlWIJDcgJqa0xRg"
          class="fab fa-youtube"
        ></a>
        <a
          href="https://www.facebook.com/paruhang.angdembe.3/"
          class="fab fa-facebook"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
