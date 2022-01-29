/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import Banner from "./Banner/banner";
import Productcard from "./product-card/ProductCard";
import { getProduct } from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name: "Shoe 1",
  images: [
    {
      url: "https://sneakernews.com/wp-content/uploads/2021/07/Air-Jordan-1-Electro-Orange-555088-180-0.jpg",
    },
  ],
  price: "1000",
  _id: "paruhang",
};
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className="homebanner">
        <Banner />
      </div>
      <div class="featured-product" id="scrollproduct">
        <h1>Featured Products</h1>
      </div>
      <div className="container" id="container">
        <Productcard product={product} />
        <Productcard product={product} />
        <Productcard product={product} />
        <Productcard product={product} />
        <Productcard product={product} />
        <Productcard product={product} />
        <Productcard product={product} />
        <Productcard product={product} />
      </div>
    </>
  );
};

export default Home;
