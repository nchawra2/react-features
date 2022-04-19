import React from "react";

const FeatureCard = ({ product }) => {
  return (
    <>
      <div className="feature-card">
        <div className="c-product-img">
          <img src={product.image} alt="" />
        </div>
        <div className="c-product-info">
          <h2>{product.name}</h2>
          <h2>$ {product.discounted_price}</h2>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
