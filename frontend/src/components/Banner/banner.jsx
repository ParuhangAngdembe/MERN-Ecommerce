import React from "react";
import { Link } from "react-scroll";
import banner from "../../images/carousel/SNEAKER_GUIDE_OPENER.jpg";
import logo from "../../images/logo.2.png";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="responsive">
        <img className="BannerImage" src={banner} alt="shoe" />
        <div className="BannerContent">
          <img src={logo} alt="shoe" className="img-fluid" />
          <h1>Nepal's no.1 Shoe Resaler</h1>
          <div className="scroll">
            <Link
              className="bannerLink"
              to="scrollproduct"
              smooth={true}
              offset={0}
              duration={0}
            >
              <button className="btn btn1">
                <i class="fas fa-angle-double-right"></i>Shop Now
                <i class="fas fa-angle-double-left"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
