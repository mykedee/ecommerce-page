import TopHeader from "./TopHeader";
import { CiSearch, CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { toggleSearchCard, toggleCart } from "../slices/globalSlice";
import SearchCard from "./SearchCard";

import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  const dispatch = useDispatch();
  const setCart = useSelector((state) => state.global.cartCard);
  const Card = useSelector((state) => state.global.searchCard);
  const CartHandler = () => {
    dispatch(toggleCart({}));
  };

  const SearchCardHandler = () => {
    dispatch(toggleSearchCard({}));
  };
  return (
    <div>
      {setCart && <Cart />}
      {Card && <SearchCard />}
      <header className="w-full h-36">
        <TopHeader />
        <nav className="w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-3 gap-0 lg:gap-10 py-5 items-center">
          <div className="lg:hidden col-span-1">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="hidden lg:block col-start-2 lg:col-start-1 col-span-5 col-end-6 py-3 justify-items-start">
            <Link className="text-sm " to="/">
              HOME
            </Link>
            <Link className="text-sm px-3">SHOP</Link>
            <Link className="text-sm px-3">SUSTAINABILITY</Link>
            <Link className="text-sm px-3">SWIMWEAR </Link>
            <Link className="text-sm px-3">SALE</Link>
            <Link className="text-sm px-3">2ND CHOICE </Link>
          </div>

          <div className="lg:hidden block col-span-1 order-last justify-self-end  py-3">
            <Link className="text-xs mx-2">
              <CiSearch
                className="inline"
                size={20}
                onClick={SearchCardHandler}
              />
            </Link>
            <Link className="text-xs mx-2" onClick={CartHandler}>
              <FiShoppingCart className="inline" size={20} />
            </Link>
          </div>

          <div className="hidden lg:block col-start-7 col-end-12 col-span-6 justify-items-end py-3 items-center">
            <Link className="text-xs border p-4">
              German <IoIosArrowDown className="inline" size={20} />
            </Link>
            <Link className="text-xs px-3" onClick={SearchCardHandler}>
              <CiSearch className="inline" size={20} /> Search{" "}
            </Link>
            <Link to="/account/register" className="text-xs px-3">
              <CiUser className="inline" size={20} /> My account
            </Link>
            <Link className="text-xs px-3" onClick={CartHandler}>
              <FiShoppingCart className="inline" size={20} /> Your shopping cart
              - 0
            </Link>
          </div>

          <Link to="/" className="col-span-1 lg:col-start-5 lg:col-end-3">
            <img
              src="../images/the-fittery-logo1.png"
              alt="the-fittery-logo1"
              className="h-16 lg:h-32 hover:opacity-30 transform transition-opacity ease-in delay-300"
            />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
