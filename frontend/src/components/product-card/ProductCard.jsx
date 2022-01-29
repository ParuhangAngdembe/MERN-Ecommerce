import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "../main.css";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerwidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};
const Productcard = ({ product }) => {
  return (
    <>
      <Link className="productCard" to={product._id}>
        <img src={product.images[0].url} alt="product" />
        <p>{product.name}</p>
        <div>
          <ReactStars {...options} />
          <span>(256 Reviews)</span>
        </div>
        <span>{product.price}</span>
      </Link>
    </>
  );
};

export default Productcard;
