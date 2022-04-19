import React from "react";
import AllProducts from "./components/pages/all products/AllProducts";
import CartPage from "./components/pages/cart/CartPage";
import Home from "./components/pages/home/Home";

import { ProductProvider } from "./context/ProductContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
