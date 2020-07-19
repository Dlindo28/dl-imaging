import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setPage } from "../actions/pageActions";

import Navigation from "../components/Navigation";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Shop | DL Imaging";
    dispatch(setPage("Shop"));
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
