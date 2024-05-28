import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const GoodToKnow = () => {
  return (
    <section className="w-full">
      <div className="py-20 bg-top-header-bg text-white">
        <section className="text-sm">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            navigation={true}
            modules={[]}
            className="mySwiper text-center"
          >
            <SwiperSlide>
              <div className="w-10/12 lg:w-10/12  mx-auto">
                <p className="my-2">
                  {" "}
                  “I wanted the ribbons for Christmas last year because my old
                  ones (different brand) broke. After 8 months of using it
                  several times a week, I can only say that the quality is
                  worlds{" "}
                </p>
                <p className="my-2">
                  apart from the previous bands! They don't slip, don't fold
                  over and put a lot more strain on the muscles! Apart from
                  that, I really like the design! My secret highlight is the
                  practical
                </p>
                <p className="my-2">
                  mesh bag in which the bands are delivered. I always take it
                  with me to training so that I no longer have to carry my cell
                  phone, locker keys, notebook and of course the respective band
                  around individually! As the icing on the cake, I was happy to
                  be able to support the vision and dreams of the lovely power
                  woman Patricia behind thefittery with my purchase,
                </p>
                <p className="my-2">
                  who packs the orders herself with love and personally signs
                  them #womensupportingwomen 😊. So an absolute recommendation
                  and definitely not my last purchase from{" "}
                </p>
                <p className="my-2">thefittery ❤️” </p>

                <Link to="/">- LEONI</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="my-2">
                "I've been looking for a suitable drinking bottle for me for a
                long time and found it here at The Fittery. It's been my daily
                companion for a few weeks now and it's simply impossible{" "}
              </p>
              <p className="my-2">
                to imagine my everyday life without it! Whether for sports, in
                the office or in my free time, As soon as I leave the apartment,
                the Hydro Bottle is included. I can also recommend the
              </p>
              <p className="my-2">
                Hydro Lid. The bottle is 100% leak-proof and the water stays
                really cool. I can't even begin to rave about the design of the
                bottle For me it’s an absolutely perfect product!”
              </p>

              <Link to="/">- JANA</Link>
            </SwiperSlide>
            <SwiperSlide>
              <p className="my-2">
                “I was really excited during the first test. I was interested in
                the mat because it says that it gives you more grip even when
                you sweat. And I can absolutely confirm that. I've never{" "}
              </p>{" "}
              <p className="my-2">
                had a mat on which I haven't slipped a bit, it makes training so
                much easier and more pleasant because you don't have to fight
                against your own slipping - among other things, I've{" "}
              </p>
              <p className="my-2">
                never managed a plank for as long as on this mat ♥️ and it
                sticks too perfectly on the floor, doesn't slip a bit and can't
                even be pushed aside with your foot. The mat is absolutely
              </p>
              <p>worth the money! Thank you for such a great product! ♥️”</p>
              <Link to="/">-VANESSA</Link>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
      <div className="text-center relative">
        <img
          src="../images/pine.webp"
          alt="pine.webp"
          className=" relative h-[800px] md:h-[600px] lg:h-[900px] object-cover w-full"
        />

        <div className="absolute right-0 left-0 top-16 lg:top-1/4 text-white w-10/12 lg:w-6/12 mx-auto">
          <p className="mb-3">GOOD TO KNOW</p>
          <h6 className="mb-3 text-base lg:text-4xl">
            {" "}
            WE ARE & WILL REMAIN ENVIRONMENTALLY FRIENDLY!
          </h6>
          <p className="mb-3">
            ♡ all our packages are sent climate-neutrally with GOGREEN{" "}
          </p>
          <p className="mb-3">
            ♡ our boxes consist of at least 90% recycled corrugated cardboard!
          </p>
          <p className="mb-3">
            {" "}
            ♡ The paint on our boxes is water-based and therefore completely
            plastic-free - they can be recycled in an environmentally friendly
            way!{" "}
          </p>
          <p className="mb-3">
            ♡ You can also compost our packaging & it breaks down into its
            natural components!{" "}
          </p>
          <p className="mb-3">
            ♡ We are making an effort to become even more sustainable!{" "}
          </p>

          <p className="mb-3">
            GOOD TO KNOW. WE ARE & WILL REMAIN ENVIRONMENTALLY FRIENDLY!{" "}
          </p>
          <button className="bg-top-header-bg py-3 px-8 mt-10 text-sm">
            SHOP NOW
          </button>

          <p>Previous Next</p>
        </div>
      </div>
    </section>
  );
};

export default GoodToKnow;
