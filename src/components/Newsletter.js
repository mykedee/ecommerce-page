import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className="w-full py-10">
      <div className="grid row-cols-2 text-center lg:text-left lg:grid-cols-2 w-10/12 lg:w-9/12 mx-auto gap-5 lg:gap-16 items-center">
        <div>
          <h3 className="text-[32px] pb-2"> SIGN UP FOR OUR NEWSLETTER</h3>
          <p className="text-sm text-primary-txt">
            and be the first to know about promotions, new products and
            restocks. Don't worry, we hate SPAM as much as you do. Your data
            will not be passed on to third parties.
          </p>
        </div>
        <div className="">
          <input
            className="p-3 border border-gray-800  placeholder:text-gray-800 w-9/12 lg:w-4/6"
            placeholder="Enter email address"
          />{" "}
          <MdArrowForwardIos className="inline" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
