import React from "react";
import Header from "../../layout/header/Header";
import BestSeller from "./best seller/BestSeller";
import "./Home.css";

import back_img from "../../../assets/backgrounds/back-img.png";
import s1 from "../../../assets/info/shipping.svg";
import s2 from "../../../assets/info/refund.svg";
import s3 from "../../../assets/info/support.svg";
import Footer from "../../layout/footer/Footer";
import Featured from "./featured products/Featured";

const Home = () => {
  return (
    <>
      <Header />
      <div className="background-1"></div>
      <BestSeller />
      <div className="background-2">
        <div className="show-info">
          <h3 className="show-heading">iPhone 6 Plus</h3>
          <p className="show-text">
            Performance and design. Taken right to the edge.
          </p>
          <button className="shop-btn">SHOP NOW</button>
        </div>
        <div className="show-img">
          <img src={back_img} alt="show-img" />
        </div>
      </div>
      <section>
        <div className="container">
          <div className="support">
            <div>
              <img src={s1} className="support-img" alt="" />
              <h3 className="support-title">FREE SHIPPING</h3>
              <p className="support-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor minim veniam, quis nostrud reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div>
              <img src={s2} className="support-img" alt="" />
              <h3 className="support-title">100% REFUND</h3>
              <p className="support-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor minim veniam, quis nostrud reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div>
              <img src={s3} className="support-img" alt="" />
              <h3 className="support-title">SUPPORT 24/7</h3>
              <p className="support-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor minim veniam, quis nostrud reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
      </section>
      <Featured />
      <Footer />
    </>
  );
};

export default Home;
