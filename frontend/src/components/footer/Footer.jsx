import React from "react";
import "./footer.css";
import playstore from "../../images/playstore.png";
import applestore from "../../images/Appstore.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <img src={playstore} alt="playstore" />
        <img src={applestore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>जुत्ता पसल</h1>
        <p>Customer Satisfaction is Our Top Priority</p>

        <p>Copyrights 2022 &copy; Paruhang Angdembe</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a
          href="https://www.instagram.com/paruhangisoffline/"
          class="fa fa-instagram"
        ></a>
        <a
          href="https://www.youtube.com/channel/UCd83oZkCmlWIJDcgJqa0xRg"
          class="fa fa-youtube"
        ></a>
        <a
          href="https://www.facebook.com/paruhang.angdembe.3/"
          class="fa fa-facebook"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
