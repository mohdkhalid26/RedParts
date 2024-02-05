import React from "react";
import "./Main.scss"
import ProductSlider from "./product-slider/ProductSlider";
import CartProducts from "./cart-products/CartProducts";

function Main() {


  return (
    <div className="main">
        <h3 className="main-h3">PRODUCTS</h3>
      <ProductSlider/>
      <CartProducts/>
    </div>
  );
}

export default Main;
