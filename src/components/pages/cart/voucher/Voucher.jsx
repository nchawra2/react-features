import React from "react";
import "./Voucher.css";

const Voucher = () => {
  return (
    <div className="voucher">
      <input type="text" placeholder="Voucher Code" className="voucher-input"/>
      <button className="redeem-btn">redeem</button>
    </div>
  );
};

export default Voucher;
