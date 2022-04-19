import React from "react";
import back_img from "../../../../assets/all products/back.png";

const TopBack = () => {
  return (
    <div className="product-top-back">
      <div className="product-top-back-text">
        <h3 className="text-primary">iPhone 8</h3>
        <p className="text-secondary">
          Performance and design. Taken right to the edge.
        </p>
        <button className="shop-btn">SHOP NOW</button>
      </div>
      <div className="product-top-back-img">
        <img src={back_img} alt="" />
      </div>
    </div>
  );
};

export default TopBack;
