import React from "react";
import { useContext } from "react";
import BreadCrum from "../../layout/breadcrum/BreadCrum";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import CartTotal from "./cart total/CartTotal";
import CartItem from "./cartItem/CartItem";
import "./CartPage.css";
import Voucher from "./voucher/Voucher";

import ProductContext from "../../../context/ProductContext";

const CartPage = () => {
  const { cartItems } = useContext(ProductContext);

  return (
    <>
      <Header />
      <BreadCrum path="cart" />
      <div className="container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-info">
              <p>product</p>
              <p>price</p>
              <p>qty</p>
              <p>unitprice</p>
            </div>
            <div className="seperator"></div>
            {cartItems.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}

            <div className="card-side-info">
              <Voucher />
              <CartTotal />
            </div>
          </>
        ) : (
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="empty-cart">YOUR CART IS EMPTY</h3>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
