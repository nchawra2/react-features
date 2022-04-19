import React from "react";
import { useContext, useState } from "react";
import ProductContext from "../../../../context/ProductContext";
import ItemCard from "../Items/ItemCard";
import "./BestSeller.css";

const BestSeller = () => {
  let { products } = useContext(ProductContext);

  let [seeMore, setSeeMore] = useState(false);
  let [filterdProducts, setFilteredProducts] = useState([...products]);
  let [active, setActive] = useState("all");

  const BestSellerFilters = [
    "All",
    "Mac",
    "iPhone",
    "iPad",
    "iPod",
    "Accessories",
  ];

  const getFiltered = (sellerFilter) => {
    if (sellerFilter === "all") {
      setFilteredProducts([...products]);
      setActive("all");
    } else {
      setFilteredProducts(
        products.filter((p) => p.what.toLowerCase() === sellerFilter)
      );
      setActive(sellerFilter);
    }
  };

  return (
    <>
      <div className="best-seller">
        <h3 className="best-seller-head">BEST SELLER</h3>
        <ul className="best-categories">
          {BestSellerFilters.map((filter) => {
            return (
              <li
                onClick={() => getFiltered(filter.toLocaleLowerCase())}
                className={
                  active === filter.toLocaleLowerCase() ? "cat-active" : ""
                }
              >
                {filter}
              </li>
            );
          })}
        </ul>
        <div className="category-mobile">
          <select onChange={(e) => getFiltered(e.target.value)}>
            <option value="all">All</option>
            <option value="mac">Mac</option>
            <option value="iphone">iPhone</option>
            <option value="ipad">iPad</option>
            <option value="ipod">iPod</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div className="container">
          <div className="best-items">
            {seeMore
              ? filterdProducts
                  .filter((p) => p.best_seller)
                  .slice(0)
                  .map((product) => {
                    return <ItemCard product={product} key={product.id} />;
                  })
              : filterdProducts
                  .filter((p) => p.best_seller)
                  .slice(0, 7)
                  .map((product) => {
                    return <ItemCard product={product} key={product.id} />;
                  })}
          </div>
        </div>
        {filterdProducts.length > 7 ? (
          <span className="load-more" onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? "LOAD LESS" : "LOAD MORE"}
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default BestSeller;
