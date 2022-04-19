import React from "react";
import "./CartItem.css";

import { CgClose } from "react-icons/cg";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductContext from "../../../../context/ProductContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { setCartItems, cartItems } = useContext(ProductContext);

  const removeItem = (id) => {
    let updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const incQty = (itemid) => {
    let updatedCart = cartItems.map((item) => {
      if (item.id === itemid) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      } else {
        return item;
      }
    });

    setCartItems(updatedCart);
  };

  const decQty = (itemid) => {
    let updatedCart = cartItems.map((item) => {
      if (item.id === itemid) {
        return {
          ...item,
          qty: item.qty - 1 < 1 ? item.qty : item.qty - 1,
        };
      } else {
        return item;
      }
    });

    setCartItems(updatedCart);
  };

  return (
    <>
      <div className="cart-item">
        <p className="cart-item-close-img">
          <CgClose
            color="red"
            size={"2rem"}
            onClick={() => removeItem(item.id)}
          />
          <img src={item.image} alt="" className="cart-item-img" />
        </p>
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">$ {item.qty * item.discounted_price}</p>
        <div className="cart-item-qty">
          <div className="item-qty-info">
            <FaMinus
              color="blue"
              size={"1.5rem"}
              onClick={() => decQty(item.id)}
            />
            <p className="item-qty">{item.qty} </p>
            <FaPlus
              color="blue"
              size={"1.5rem"}
              onClick={() => incQty(item.id)}
            />
          </div>
        </div>
        <p className="cart-item-unitp">$ {item.discounted_price}</p>
      </div>
      <div className="seperator"></div>
    </>
  );
};

export default CartItem;
