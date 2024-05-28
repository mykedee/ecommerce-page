import React from "react";
import { toggleSearchCard } from "../slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const SearchCard = () => {
  const dispatch = useDispatch();
  let Card = useSelector((state) => state.global.searchCard);

  return (
    <section>
      <div
        className={`fixed right-0 left-0 z-40 h-[100vh] bg-black-transparent w-full overflow-y-hidden text-primary-txt ${
          Card ? "block" : "none"
        }`}
      >
        <div
          className="grid grid-cols-11 lg:grid-cols-6 gap-0 grid-rows-2 row-span-full w-full"
          // onClick={() => dispatch(toggleSearchCard({}))}
        >
          <div
            className="lg:col-span-4 col-span-1  cursor-pointer"
            // onClick={() => dispatch(toggleSearchCard({}))}
          ></div>
          <div className="bg-white  text-center col-span-11 lg:col-span-2 py-4">
            <div className="inline py-4">
              <CiSearch className="inline" size={20} />{" "}
              <input
                className="inline w-10/12 p-3 lg:border border-none rounded-lgr"
                placeholder="Search..."
              />
              <MdClose
                className="inline "
                size={20}
                onClick={() => dispatch(toggleSearchCard({}))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchCard;
