import React from "react";
import { Link } from "react-router-dom";

const FromBlog = () => {
  return (
    <section className="w-full py-10">
      <h5 className="text-center text-4xl">FROM THE BLOG</h5>
      <div className="w-11/12 lg:w-9/12 mx-auto py-10 text-primary-txt">
        <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-5">
          <div>
            <div className="h-64 flex w-full bg-top-header-bg mb-4">
              <div className="flex flex-1 items-center justify-center">
                <p className="text-white text-2xl text-center">
                  <p>Warum nehme </p>
                  <p>ich nichi ab?</p>
                </p>
              </div>
            </div>
            <Link className="block no-underline hover:underline mb-3 hover:text-gray-400 duration-300 transition delay-150 ease-in-out">
              {" "}
              WHY AM I NOT LOSING WEIGHT?{" "}
            </Link>
            <p className="text-sm mb-4">
              Why am i not losing weight? Do you know what the worst and most
              frustrating feeling is? If you constantly try to lose weight,
              exercise, change your diet...{" "}
            </p>
            <p className="text-sm">Learn more</p>
          </div>

          <Link className="block">
            <div className="flex h-64 w-full bg-top-header-bg mb-4">
              <div className="flex flex-1 items-center justify-center">
                <p className="text-white text-2xl text-center">
                  <p>Tipps gegen </p>
                  <p>HeiBhungerallacken</p>
                </p>
              </div>
            </div>

            <Link className="block no-underline hover:underline mb-3 hover:text-gray-400 duration-300 transition delay-150 ease-in-out">
              TIPS AGAINST CRAVINGS{" "}
            </Link>
            <p className="text-sm mb-4">
              Who doesn't know it, the dear (craving) hunger. I think everyone
              who has been on a diet has encountered it - unfortunately. And
              honestly,...{" "}
            </p>
            <p className="text-sm">Learn more</p>
          </Link>

          <div className="">
            <div className="flex h-64 w-full bg-top-header-bg mb-4">
              <div className="flex flex-1 items-center justify-center  ">
                <p className=" text-2xl text-white">CELLULITE</p>
              </div>
            </div>
            <Link className="text-sm mb-3 block no-underline hover:underline hover:text-gray-400 duration-300 transition delay-150 ease-in-out">
              {" "}
              CELLULITE. THAT'S WHERE IT COMES FROM AND THAT'S HOW YOU GET RID
              OF IT.{" "}
            </Link>
            <p className="text-sm mb-4">
              First of all: Cellulite has nothing to do with weight; it can
              appear on even the thinnest legs. In the following sections we
              reveal how...
            </p>{" "}
            <p className="text-sm">Learn more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromBlog;
