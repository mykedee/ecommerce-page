import { Link } from "react-router-dom";

const TheLook = () => {
  return (
    <section className="thelook py-10 text-primary-txt text-sm text-center">
      <div className="grid grid-rows-2  grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-2 w-11/12 lg:w-9/12 mx-auto py-10 lg:mb-52 md:mb-24 md:gap-y-36 gap-y-36">
        <div className="lg:h-[210px] h-[110px] w-[110px] md:h-[230px] md:w-[210px] mx-auto">
          <div className="relative mx-auto overflow-hidden mb-3">
            <img
              className="md:h-[210px] md:w-[210px] h-[145px] w-[210px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
              src="../images/15_300x.avif"
              alt="15_300x"
            />
          </div>
          <Link className="block duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
            <p>Booty Bands Set of 3 </p>
            <p>40.00€ </p>
            <p>36 reviews</p>
          </Link>
        </div>

        <div className="lg:h-[210px] lg:w-[210px] h-[110px] w-[110px] md:h-[230px] md:w-[210px] mx-auto">
          <div className="relative mx-auto overflow-hidden mb-3">
            <img
              className="md:h-[210px] md:w-[230px] h-[145px] w-[210px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
              src="../images/Foto05.03.14_153753_300x.webp"
              alt="Foto05.03.14_153753_300x"
            />
          </div>
          <Link className="block  duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
            <p>bracelets</p> <p>50.00€</p>
          </Link>
        </div>

        <div className="lg:h-[210px] lg:w-[210px] h-[110px] md:h-[230px] md:w-[210px] w-[110px] mx-auto">
          <div className="relative mx-auto overflow-hidden mb-3">
            <img
              className="md:h-[210px] md:w-[230px] h-[145px] w-[210px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
              src="../images/L1120112_1_300x.avif"
              alt="L1120112_1_300x.avif"
            />
          </div>
          <Link className="block duration-300 transition delay-150 hover:text-gray-400 ease-in-out">
            <p>Fit Loop - 4KG </p>

            <p>59.00€</p>
            <p>1 review</p>
          </Link>
        </div>

        <div className="lg:h-[210px] lg:w-[210px] md:h-[230px] md:w-[210px] h-[110px] w-[110px] mx-auto">
          <div className="relative mx-auto  overflow-hidden mb-3">
            <img
              className="cursor-pointer md:h-[210px] md:w-[230px] h-[145px] w-[210px] hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
              src="../images/15_300x.avif"
              alt="15_300x.avif"
            />
          </div>
          <Link className="text-primary-txt text-sm ">
            <p>recyclable yoga mat</p>
            <p>65.00€</p>
            <p>7 review</p>
          </Link>
        </div>
      </div>

      <div className="text-center py-12 mt-16">
        <h5 className="text-sm mb-3">MADE FROM RECYCLED POLYESTER </h5>
        <h5 className="text-3xl mb-10">GET THE LOOK</h5>
        <div className="w-full">
          <div className="w-11/12 lg:w-9/12 mx-auto grid grid-rows-1 lg:grid-cols-4 gap-2 my-4">
            <div className="col-span-2 overflow ">
              <div className="w-full overflow-hidden">
                <img
                  src="../images/left-large.png"
                  alt="left-large"
                  className=" w-full object-contain"
                />
              </div>
            </div>
            <div className="col-span-2 ">
              <div className="grid grid-cols-2  gap-6 mb-4">
                <div className="relative text-sm">
                  <div className="absolute text-center text-white w-[70px] right-0 left-0 top-0 p-2 bg-red-500 z-50">
                    <p className="text-sm">Sales</p>
                  </div>
                  <div className="w-full overflow-hidden z-10">
                    <img
                      src="../images/small-right-2.png"
                      alt="small-right-2"
                      className="min-h-[62%] lg:h-[250px] mb-3 w-full object-cover hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
                    />
                  </div>
                  <Link
                    to="/"
                    className="hover:text-gray-400 duration-300 transition delay-150 ease-in-out"
                  >
                    <p className="mb-2">"Ivory" sports bra</p>
                    <p className="mb-2 text-xs line-through text-slate-400">
                      39.95€
                    </p>
                    <p className="mb-2">25.00€</p>
                    <p className="mb-2">1 reviews</p>
                  </Link>
                </div>

                <div className="relative text-sm">
                  <div className="absolute text-center text-white w-[70px] right-0 left-0 top-0 p-2 bg-red-500 z-50">
                    <p className="text-sm z-20">Sales</p>
                  </div>
                  <div className="w-full overflow-hidden z-10">
                    <img
                      src="../images/small-right-1.png"
                      alt="small-right-1"
                      className="min-h-[62%] md:h-[26.5em] lg:h-[250px] w-full object-cover mb-3 hover:scale-110 duration-300 transition delay-150 hover:-translate-y-1 ease-in-out"
                    />
                  </div>
                  <Link
                    to="/"
                    className="hover:text-gray-400 duration-300 transition delay-150 ease-in-out"
                  >
                    <p className="mb-2">"Ivory" Leggings</p>
                    <p className="mb-2 text-xs line-through text-slate-400">
                      59.95€
                    </p>
                    <p className="mb-2">39.95€</p>
                    <p className="mb-2">2 reviews</p>
                  </Link>
                </div>
              </div>
              <p className="text-sm text-center lg:text-left mb-4">
                Our Ivory Set is made from 73% recycled polyester & 27% spandex.
                In addition, the manufacturing process is certified as
                particularly environmentally friendly by the “Green Circle”.{" "}
              </p>
              <button className="bg-primary-txt text-white p-4 lg:float-left">
                {" "}
                GET THE LOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheLook;
