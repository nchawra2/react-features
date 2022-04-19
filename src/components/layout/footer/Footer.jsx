import React from "react";

import "./Footer.css";
import img from "../../../assets/header/logo.svg";
import card1 from "../../../assets/footer cards/card-1.svg";
import card2 from "../../../assets/footer cards/card-2.svg";
import card3 from "../../../assets/footer cards/card-3.svg";
import card4 from "../../../assets/footer cards/card-4.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="seperator"></div>
        <div className="container">
          <div className="footer-info-1">
            <div>
              <img src={img} alt="" className="logo-2" />
              <p className="text-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
            <div>
              <h4 className="head-1">Follow Us</h4>
              <p className="text-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
            <div>
              <h4 className="head-1">Contact Us</h4>
              <p className="text-1">
                iShop: address @building 124 Call us now: 0123-456-789 Email:
                support@whatever.com
              </p>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="footer-info-2">
            <div className="footer-links">
              <p className="link">Infomation</p>
              <p className="link">About Us </p>
              <p className="link">Infomation </p>
              <p className="link">Privacy Policy</p>
              <p className="link">Terms & Conditions</p>
            </div>
            <div className="footer-links">
              <p className="link">Service</p>
              <p className="link">About Us </p>
              <p className="link">Infomation </p>
              <p className="link">Privacy Policy</p>
              <p className="link">Terms & Conditions</p>
            </div>
            <div className="footer-links">
              <p className="link">Extras</p>
              <p className="link">About Us </p>
              <p className="link">Infomation </p>
              <p className="link">Privacy Policy</p>
              <p className="link">Terms & Conditions</p>
            </div>
            <div className="footer-links">
              <p className="link">My Account</p>
              <p className="link">About Us </p>
              <p className="link">Infomation </p>
              <p className="link">Privacy Policy</p>
              <p className="link">Terms & Conditions</p>
            </div>
            <div className="footer-links">
              <p className="link">My Account</p>
              <p className="link">About Us </p>
              <p className="link">Infomation </p>
              <p className="link">Privacy Policy</p>
              <p className="link">Terms & Conditions</p>
            </div>
            <div className="footer-links">
              <p className="link">My Account</p>
              <p className="link">About Us </p>
              <p className="link">Infomation </p>
              <p className="link">Privacy Policy</p>
              <p className="link">Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="container">
          <div className="cards">
            <img src={card1} alt="" className="credit-card" />
            <img src={card2} alt="" className="credit-card" />
            <img src={card3} alt="" className="credit-card" />
            <img src={card4} alt="" className="credit-card" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
