import React, { useState } from "react";
import img1 from "../assets/cart items images/img-1.png";
import img2 from "../assets/cart items images/img-2.png";
import img3 from "../assets/cart items images/img-3.png";
import img4 from "../assets/cart items images/img-4.png";
import img5 from "../assets/cart items images/img-5.png";
import img6 from "../assets/cart items images/img-6.png";
import img7 from "../assets/cart items images/img-7.png";
import img8 from "../assets/cart items images/img-8.png";
import img9 from "../assets/cart items images/img-9.png";
import img10 from "../assets/cart items images/img-10.png";
import img13 from "../assets/cart items images/img-13.png";
import img14 from "../assets/cart items images/img-14.png";

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  let [products] = useState([
    {
      id: "XNBSKHD32",
      name: "Apple Laptop",
      image: `${img1}`,
      brand: "apple",
      color: "white",
      accessory: "charging devices",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "mac",
    },
    {
      id: "CNDSICBS4",
      name: "Apple iPhone",
      image: `${img2}`,
      brand: "apple",
      color: "white",
      accessory: "phones",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "iphone",
    },
    {
      id: "CMDLCHD32",
      name: "Apple iPod",
      image: `${img3}`,
      brand: "apple",
      color: "blue",
      accessory: "phones",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "ipod",
    },
    {
      id: "NKFJDVNFDK",
      name: "Samsung Smart Watch",
      image: `${img4}`,
      brand: "Samsung",
      color: "black",
      accessory: "Watches",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "watch",
    },
    {
      id: "XNBRHYCSDFSKHD32",
      name: "Apple iPad",
      image: `${img5}`,
      brand: "apple",
      color: "gray",
      accessory: "tablets",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "ipad",
    },
    {
      id: "DSCSDCSCSD",
      name: "Samsung Watch",
      image: `${img6}`,
      brand: "Samsung",
      color: "green",
      accessory: "Watches",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "watch",
    },
    {
      id: "CNDBSKB3248",
      name: "Apple Headphone",
      image: `${img7}`,
      brand: "Apple",
      color: "white",
      accessory: "headphone",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "accessories",
    },
    {
      id: "CBIDSCIWUEN908",
      name: "Apple iPhone 11",
      image: `${img8}`,
      brand: "Apple",
      color: "black",
      accessory: "phones",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "iphone",
    },
    {
      id: "NUEIBXSIO83",
      name: "Samgung Watch",
      image: `${img9}`,
      brand: "Samsung",
      color: "pink",
      accessory: "Watches",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "watch",
    },
    {
      id: "NCSDOUCBI832",
      name: "Apple Speaker",
      image: `${img10}`,
      brand: "Apple",
      color: "white",
      accessory: "blutooth",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "accessories",
    },
    {
      id: "NCUDNIBER32",
      name: "Apple Carger",
      image: `${img13}`,
      brand: "Apple",
      color: "white",
      accessory: "charging devices",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "accessories",
    },
    {
      id: "NOCUBECGGG45",
      name: "Samsung Ear Pod",
      image: `${img14}`,
      brand: "Samsung",
      color: "white",
      accessory: "ear pod",
      actual_price: 599,
      discounted_price: 399,
      best_seller: true,
      what: "accessories",
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        products,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
