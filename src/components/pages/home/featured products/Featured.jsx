import React, { useContext } from "react";
import FeatureCard from "./FeatureCard";
import "./Featured.css";
import Carousel from "react-elastic-carousel";
import ProductContext from "../../../../context/ProductContext";

const Featured = () => {
  let { products } = useContext(ProductContext);

  return (
    <>
      <div className="container featured-section">
        <h3 className="featured-head">Featured Products</h3>
        <Carousel
          breakPoints={[
            { width: 400, itemsToShow: 1 },
            { width: 700, itemsToShow: 3 },
          ]}
        >
          {products.slice(0, 6).map((p) => {
            return <FeatureCard key={p.id} product={p} />;
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Featured;
