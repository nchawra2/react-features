import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../../assets/header/logo.svg";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import ProductContext from "../../../context/ProductContext";

import {
  FaUserAlt,
  FaShoppingBasket,
  FaCaretDown,
  FaSearch,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useContext(ProductContext);
  const [mNav, setMNav] = useState(false);

  const getTotal = (items) => {
    let total = items.reduce((acc, item) => {
      return acc + item.qty * item.discounted_price;
    }, 0);

    return total;
  };

  return (
    <>
      <header>
        <div className="header-top">
          <div className="container info-nav">
            <div className="extra-config">
              <span className="header-config">
                EN <FaCaretDown />
              </span>
              <span className="header-config">
                $ <FaCaretDown />
              </span>
            </div>
            <div className="user-config">
              <div className="user-profile">
                <FaUserAlt className="mr-1" /> My profile
              </div>
              <div className="cart-top">
                <Link to="/cart" className="route-link">
                  <FaShoppingBasket className="mr-1" />
                </Link>{" "}
                {cartItems.length} Items
                <span className="cart-total-top">${getTotal(cartItems)}</span>
              </div>
              <div className="search">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <nav>
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation">
            <Link to="/" className="links">
              home
            </Link>
            <div className="dropdown">
              <Link to="/products" className="links">
                store
              </Link>
              <div className="dropdown-links">
                <div className="dropdown-item">
                  <div>
                    <p className="links-head">Accessories</p>
                    <p className="drop-link">AirPort & Wireless </p>
                    <p className="drop-link"> AppleCare </p>
                    <p className="drop-link"> Bags, Shells & Sleeves </p>
                    <p className="drop-link"> Business & Security </p>
                    <p className="drop-link"> Cables & Docks</p>
                  </div>
                  <div className="d-2">
                    <p className="drop-link">Cameras & Video </p>
                    <p className="drop-link"> Car & Travel </p>
                    <p className="drop-link"> Cases & Films </p>
                  </div>
                </div>

                <div className="dropdown-item">
                  <div>
                    <p className="links-head">Category</p>
                    <p className="drop-link">Charging Devices </p>
                    <p className="drop-link"> Connected Home </p>
                    <p className="drop-link"> Device Care </p>
                    <p className="drop-link"> Display & Graphic </p>
                    <p className="drop-link"> Fitness & Sport</p>
                  </div>
                  <div className="d-2">
                    <p className="drop-link">Headphones </p>
                    <p className="drop-link"> HealhKit</p>
                  </div>
                </div>

                <div>
                  <p className="links-head">Category</p>
                  <p className="drop-link">Mice & Keyboards</p>
                  <p className="drop-link"> Music Creation </p>
                  <p className="drop-link"> Networking & Server </p>
                </div>
              </div>
            </div>
            <Link to="/" className="links">
              iphone
            </Link>
            <Link to="/" className="links">
              ipad
            </Link>
            <Link to="/" className="links">
              macbook
            </Link>
            <Link to="/" className="links">
              accesories
            </Link>
          </div>
          <div className="ham" onClick={() => setMNav(!mNav)}>
            <FaBars size={"3rem"} color="#444" />
          </div>
        </nav>
      </header>
      {mNav ? (
        <div className="mobile-nav">
          <div className="close">
            <FiX size={"5rem"} onClick={() => setMNav(!mNav)} />
          </div>

          <div className="page-info">
            <div>
              <Link to="/cart" className="route-link">
                <FaShoppingBasket className="mr-1" />
              </Link>{" "}
              {cartItems.length} Items
              <span>${getTotal(cartItems)}</span>
            </div>

            <div>
              <FaUserAlt />
              <h4>My Profile</h4>
            </div>

            <div className="extra-config">
              <span className="header-config">
                EN <FaCaretDown />
              </span>
              <span className="header-config">
                $ <FaCaretDown />
              </span>
            </div>
          </div>

          <div className="m-nav-links">
            <div className="m-nav-search">
              <input type="search" />
              <FaSearch className="m-search" />
            </div>
            <Link to="/" className="m-links">
              Home
            </Link>
            <Link to="/products" className="m-links">
              <span className="mr-1">Store</span>
              <FaCaretDown />
            </Link>
            <Link to="/" className="m-links">
              iPhone
            </Link>
            <Link to="/" className="m-links">
              iPad
            </Link>
            <Link to="/" className="m-links">
              Macbook
            </Link>
            <Link to="/" className="m-links">
              Accessories
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
