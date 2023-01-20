import React from "react";
import { Outlet } from "react-router-dom";

const Master = () => {
  return (
    <>
      <div className="container-fluid main-body-width">
        <div className="row pt-3 d-flex justify-content-between">
          <div className="col-12 post-main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Master;
