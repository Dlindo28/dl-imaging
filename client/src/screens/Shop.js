import React, { useEffect } from "react";

import Navigation from "../components/Navigation";

const Shop = () => {
  useEffect(() => {
    document.title = "Shop | DL Imaging";
  });

  return (
    <div className="shop">
      <Navigation />
      <h3 style={{ color: "black" }}>
        Shop is currently down for maintenance.
      </h3>
    </div>
  );
};

export default Shop;
