import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Hero = () => {
  return (
    <section className="text-sm">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="../images/hero1.webp"
            alt="hero1"
            className="object-cover"
          />
          <div className="block lg:px-32 px-6 absolute bottom-28 right-0 ">
            <button className="bg-black p-4 text-white w-full">BUY NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../images/hero2.webp"
            alt="hero2"
            className="object-cover"
          />
          <div className="block lg:px-32 md:  absolute top-40 px-14 w-full bottom-28 right-0">
            <div className=" text-left">
              <p className="text-sm">GET A 50% DISCOUNT </p>
              <p className="my-3 text-4xl">FIT LOOP - 4KG </p>
              <p className="my-3"> - over 75 exercises </p>
              <p className="my-3">
                - combines dumbbell, kettlebell and weight plate{" "}
              </p>
              <p className="my-3">
                - circular, balanced shape protects the joints
              </p>
            </div>
            <button className="block p-3 bg-black text-white w-full md:w-8/12 lg:w-2/12 left">
              Buy Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/hero3.webp" alt="hero3" />
          <div className="block px-32  absolute top-72 ">
            <div className=" text-left">
              <p className="text-4xl my-3">NEW COLLECTION </p>

              <button className="block p-3 bg-black text-white">
                SHOP Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../images/hero4.webp"
            alt="hero4"
            className="w-full object-cover "
          />
          <div className="block lg:px-32 px-6  absolute top-72 text-white">
            <p className="py-3">
              HAIR CLIP FOR THE PERFECT APPEARANCE IN THE GYM OR IN EVERYDAY
              LIFE
            </p>
            <p className="text-4xl py-3">NEW IN</p>
            <button className="bg-top-header-bg p-4 text-white">
              I WANT TO BUY
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full bg-top-header-bg">
        <div className=" text-white text-center grid grid-cols-3 w-11/12 py-8 mx-auto">
          <div>
            <p>the fittery ist </p>
            <p>umweltfreundlich und nachhaltig</p>
          </div>

          <div>
            <p>klimaneutraler Versand </p>
            <p>und kostenlos in Deutschland.</p>
          </div>

          <div>
            <p>#teamfittery </p>
            <p>werde Teil der Familie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
