import React, { useContext } from "react";
import "./CartTotal.css";

import ProductContext from "../../../../context/ProductContext";

const CartTotal = () => {
  let { cartItems } = useContext(ProductContext);

  const getTotal = (items) => {
    let total = items.reduce((acc, item) => {
      return acc + item.qty * item.discounted_price;
    }, 0);

    return total;
  };

  return (
    <div className="cart-total">
      <div>
        <p>subtotal</p>
        <p>${getTotal(cartItems)}</p>
      </div>
      <div>
        <p>Shipping fee</p>
        <p>$20</p>
      </div>
      <div>
        <p>Coupon</p>
        <p>No</p>
      </div>
      <div className="seperator"></div>
      <div className="all-total">
        <p>total</p>
        <p>${getTotal(cartItems) + 20}</p>
      </div>
      <button className="checkout-btn">Check out</button>
    </div>
  );
};

export default CartTotal;
