import React from "react";
import { FaInstagram, FaSquareFacebook, FaTiktok } from "react-icons/fa6";

const FollowUs = () => {
  return (
    <section className="w-full bg-top-header-bg py-10 text-white">
      <div className="w-9/12 mx-auto text-center ">
        <h6 className="text-sm my-2">STAY UP TO DATE WITH OUR SOCIALS</h6>

        <h6 className="text-4xl my-8">FOLLOW US</h6>

        <div className="mb-6">
          <FaSquareFacebook className="inline mx-2" size={30} />
          <FaInstagram className="inline mx-2" size={30} />
          <FaTiktok className="inline mx-2" size={30} />
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
