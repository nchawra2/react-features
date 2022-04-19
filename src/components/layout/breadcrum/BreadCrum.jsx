import React from "react";

import "./BreadCrum.css";

const BreadCrum = ({ path }) => {
  return (
    <div className="bread-crum">
      <p className="bread-crum-text">{path}</p>
    </div>
  );
};

export default BreadCrum;
