import React from "react";
import { FaInstagram, FaSquareFacebook, FaTiktok } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <nav className="w-full bg-top-header-bg text-white text-sm">
      <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-3 row-cols-1 py-2">
          <div>
            <p></p>
          </div>{" "}
          <div className="text-center  my-2">
            <p> GET 50% OFF OUR FITLOOP WITH THE CODE “LOOP”</p>
          </div>
          <div className="lg:col-end-13 col-end-0 lg:row-auto row-start-1 text-center py-2">
            <FaSquareFacebook className="inline mx-2" />
            <FaInstagram className="inline mx-2" />
            <FaTiktok className="inline mx-2" />
            <p></p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopHeader;
