import React from "react";
import { Link } from "react-router-dom";

const NewIn = () => {
  return (
    <section className="lg:py-20 py-20 text-center text-sm text-primary-txt">
      <h6 className="text-3xl my-3">NewIn</h6>
      <div className="grid grid-rows-3  grid-cols-2 gap-y-32 md:grid-rows-1 md:grid-cols-5 gap-3 w-11/12 lg:w-9/12 mx-auto py-10 lg:mb-44 mb-20">
        <div className="lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] mx-auto">
          <div className="relative mx-auto overflow-hidden mb-6">
            <img
              className="lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
              src="../images/15_300x.avif"
              alt="15_300x.avif"
            />
          </div>
          <Link className="block duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
            <p>PRE SALE - fitbag - deserve better </p>
            <p>32.00€</p>
          </Link>
        </div>

        <div className="lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] mx-auto">
          <div className="relative mx-auto overflow-hidden mb-6">
            <img
              className="lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
              src="../images/Foto05.03.14_153753_300x.webp"
              alt="Foto05.03.14_153753_300x.webp"
            />
          </div>
          <Link className="block  duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
            <p>FIT Socks - compression </p> <p>14.00€</p>
          </Link>
        </div>

        <div className="lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] mx-auto">
          <div className="relative mx-auto overflow-hidden mb-6">
            <img
              className="lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
              src="../images/L1120112_1_300x.avif"
              alt="L1120112_1_300x.avif"
            />
          </div>
          <Link className="block duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
            <p>"Thea" sports bra - black</p>
            <p>49.00€</p>
            <p>1 review</p>
          </Link>
        </div>

        <div className="lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] mx-auto">
          <div className="relative mx-auto  overflow-hidden mb-6">
            <img
              className="cursor-pointer lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
              src="../images/15_300x.avif"
              alt="15_300x.avif"
            />
          </div>
          <Link className=" text-sm ">
            <p>"Thea" sports bra - white</p>
            <p>49.00€</p>
          </Link>
        </div>

        <div className="lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] mx-auto">
          <div className="relative mx-auto  overflow-hidden mb-6">
            <img
              className="cursor-pointer lg:h-[210px] lg:w-[210px] h-[130px] w-[130px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
              src="../images/15_300x.avif"
              alt="15_300x.avif"
            />
          </div>
          <Link className=" text-sm ">
            <p>Hair clip XL</p>
            <p>15.00€</p>
          </Link>
        </div>
      </div>{" "}
      <div className="grid md:grid-cols-3 w-11/12 lg:w-9/12 mx-auto gap-8 gap-y-4 md:grid-rows-1 grid-rows-3 items-center mb-20">
        <Link
          to="/"
          className="p-12 lg:p-16 bg-top-header-bg md:text-xl lg:text-3xl"
        >
          EQUIPMENTS
        </Link>
        <Link
          to="/"
          className="p-12 lg:p-16 bg-top-header-bg md:text-xl lg:text-3xl"
        >
          ACTIVEWEAR
        </Link>
        <Link
          to="/"
          className="p-12 lg:p-16 bg-top-header-bg md:text-xl lg:text-3xl"
        >
          GUIDES
        </Link>
      </div>
      <div className=" w-11/12 mx-auto mb-16">
        <h6>BEST SELLER</h6>
        <div className="grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 lg:grid-cols-4  gap-16 gap-y-56 lg:gap-y-0 w-11/12 lg:w-9/12 mx-auto py-10 mb:mb-20 mb-10 justify-items-center">
          <div className="md:h-[210px] md:w-[145px] lg:h-[210px] lg:w-[240px] h-[110px] w-[140px]">
            <div className="relative mx-auto overflow-hidden mb-6">
              <img
                className="md:h-[210px] md:w-[145px] lg:h-[210px] lg:w-[240px] h-[160px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
                src="../images/15_300x.avif"
                alt="15_300x.avif"
              />
            </div>
            <Link className="block duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
              <p>PRE SALE - fitbag - deserve better </p>
              <p>32.00€</p>
            </Link>
          </div>

          <div className="md:h-[210px] md:w-[145px] lg:h-[210px] lg:w-[240px] h-[110px] w-[140px]">
            <div className="relative mx-auto overflow-hidden mb-6">
              <img
                className="lg:h-[210px] lg:w-[240px] h-[160px] md:h-[210px] md:w-[145px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
                src="../images/Foto05.03.14_153753_300x.webp"
                alt="Foto05.03.14_153753_300x.webp"
              />
            </div>
            <Link className="block  duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
              <p>FIT Socks - compression </p> <p>14.00€</p>
            </Link>
          </div>

          <div className="md:h-[210px] md:w-[145px] lg:h-[210px] lg:w-[240px] h-[110px] w-[140px]">
            <div className="relative mx-auto overflow-hidden mb-6">
              <img
                className="lg:h-[210px] lg:w-[240px] md:h-[210px] md:w-[145px] h-[160px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
                src="../images/L1120112_1_300x.avif"
                alt="L1120112_1_300x.avif"
              />
            </div>
            <Link className="block duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
              <p>"Thea" sports bra - black</p>
              <p>49.00€</p>
              <p>1 review</p>
            </Link>
          </div>

          <div className="md:h-[210px] md:w-[145px] lg:h-[210px] lg:w-[240px] h-[110px] w-[140px]">
            <div className="relative mx-auto  overflow-hidden mb-6">
              <img
                className="cursor-pointer lg:h-[210px] lg:w-[240px] md:h-[210px] md:w-[145px] h-[160px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
                src="../images/15_300x.avif"
                alt="15_300x.avif"
              />
            </div>
            <Link className="duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
              <p>"Thea" sports bra - white</p>
              <p>49.00€</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewIn;
