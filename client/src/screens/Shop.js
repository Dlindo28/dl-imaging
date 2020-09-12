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
      <div className="row">
        <div className="col m4 l4">
          <div className="card large">
            <div className="card-content">
              <span className="card-title">Alert</span>
              <p>
                I am not currently taking requests for the shop due to being on
                hiatus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
