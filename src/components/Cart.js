import React from "react";
import { toggleCart } from "../slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  let Cart = useSelector((state) => state.global.cartCard);

  return (
    <section>
      <div
        className={`fixed right-0 left-0 z-40 bg-black-transparent w-full overflow-y-hidden text-primary-txt ${
          Cart ? "block" : "none"
        }`}
      >
        <div className="grid grid-cols-11 lg:grid-cols-4 gap-0 w-full">
          <div
            className=" h-[100vh] lg:col-span-3 col-span-1  cursor-pointer"
            onClick={() => dispatch(toggleCart({}))}
          ></div>
          <div className="bg-white h-[100vh] text-center col-span-10 lg:col-span-1">
            <div className="grid grid-cols-3 place-items-center py-4 mb-8">
              <div></div>
              <h3>YOUR CART</h3>
              <MdClose
                className="justify-self-end cursor-pointer"
                size={30}
                onClick={() => dispatch(toggleCart({}))}
              />
            </div>

            <div className="text-sm  w-10/12 mx-auto">
              <p className="mb-24 lg:mb-44">Your basket is empty</p>
              <hr />
              <p className="my-6"> Add a note for the seller…</p>
              <textarea className="w-full h-28 mb-6 border" />
              <p className="mb-6">
                Please check this box to agree to our terms and conditions
              </p>
              <h3 className="text-sm mb-3">SUBTOTAL</h3>
              <p className="mb-6">
                Tax included. Shipping calculated at checkout.
              </p>

              <button className="border w-full text-sm p-3">
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
