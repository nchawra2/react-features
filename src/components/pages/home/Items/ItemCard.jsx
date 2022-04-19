import React from "react";
import "./ItemCard.css";
import { FaStar } from "react-icons/fa";

import i1 from "../../../../assets/items/i1.svg";
import i2 from "../../../../assets/items/i2.svg";
import ProductContext from "../../../../context/ProductContext";
import { useContext } from "react";

const ItemCard = ({ product }) => {
  
  let { setCartItems, cartItems } = useContext(ProductContext);

  const addToCart = (product) => {
    let isThere = cartItems.find((item) => item.id === product.id);

    if (!isThere) {
      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <>
      <div className="item">
        <div className="item-img">
          <img src={product.image} alt="item-img" />
        </div>
        <div className="seperator"></div>
        <div className="item-name">{product.name}</div>
        <div className="item-rating">
          <FaStar color="#FFC600" className="mr-1" />
          <FaStar color="#FFC600" className="mr-1" />
          <FaStar color="#FFC600" className="mr-1" />
          <FaStar color="#FFC600" className="mr-1" />
          <FaStar color="#444" />
        </div>
        <div className="item-price">
          <p className="discounted">${product.discounted_price}</p>
          <p className="actual">${product.actual_price}</p>
        </div>
        <div className="special">hot</div>
        <div className="cart-icons">
          <img src={i1} alt="" />
          <img src={i2} alt="" onClick={() => addToCart(product)} />
        </div>
      </div>
    </>
  );
};

export default ItemCard;
