import {
  Album,
  ChartColumn,
  ChevronRight,
  Heart,
  House,
  Menu,
  ShoppingBag,
} from "lucide-react";
import BannerImage from "../../assets/Banner-Image.jpg";
import { Link, NavLink } from "react-router";
import { use } from "react";
import { CartContext } from "../../context/CartContext";

const HeroSection = ({ selected, handleSelected }) => {
  const [, , , , , setClicked] = use(CartContext);
  const buttons = [
    "All Product",
    "Laptops",
    "Phones",
    "Accessories",
    "Smart Watches",
    "MacBook",
    "Iphone",
  ];
  return (
    <div className="pt-3 pb-40 sm:pt-7 sm:pb-90">
      <div className="relative max-w-7xl mx-auto w-[95%] bg-[#9538e2] text-white rounded-2xl outline-1 outline-[#9538e2] outline-offset-5 sm:w-[97%] sm:outline-offset-7 sm:rounded-4xl">
        <nav className="w-[97%] py-5 mx-auto flex justify-between items-center sm:py-7">
          <div className="flex items-center gap-2.5">
            <div>
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label className="sm:hidden" htmlFor="my-drawer">
                  <Menu />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="h-full bg-white text-black w-55 px-3 py-5">
                  <div className="h-[100%] flex flex-col justify-between">
                    <div className="flex flex-col">
                      {buttons.map((button, index) => (
                        <a
                          key={index}
                          onClick={() => handleSelected(button)}
                          className={`px-3.5 py-2 rounded-3xl transition-all ${
                            selected === button ? "bg-[#9538e2] text-white" : ""
                          } active:bg-[#9538e2] active:text-white`}
                        >
                          <div className="flex items-center gap-1.5">
                            <ChevronRight /> {button}
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <Link
                        to={"/"}
                        className="px-3.5 py-2 rounded-3xl transition-all active:bg-[#9538e2] active:text-white"
                      >
                        <div className="flex items-center gap-1.5">
                          <House /> Home
                        </div>
                      </Link>
                      <Link
                        to={"/Statistics"}
                        className="px-3.5 py-2 rounded-3xl transition-all active:bg-[#9538e2] active:text-white"
                      >
                        <div className="flex items-center gap-1.5">
                          <ChartColumn /> Statistics
                        </div>
                      </Link>
                      <Link
                        onClick={() => setClicked("Cart")}
                        to={"/Dashboard/Cart"}
                        className="px-3.5 py-2 rounded-3xl transition-all active:bg-[#9538e2] active:text-white"
                      >
                        <div className="flex items-center gap-1.5">
                          <Album /> Dashboard
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3.5">
              <img className="h-[40px] sm:h-[50px]" src="./Logo.png" alt="" />
              <h1 className="text-xl font-semibold sm:text-2xl">
                Gadget Heaven
              </h1>
            </div>
          </div>
          <ul className="hidden sm:flex sm:gap-13">
            <NavLink to={"/"} className="cursor-pointer">
              Home
            </NavLink>
            <NavLink to={"/Statistics"} className="cursor-pointer">
              Statistics
            </NavLink>
            <NavLink
              onClick={() => setClicked("Cart")}
              to={"/Dashboard/Cart"}
              className="cursor-pointer"
            >
              Dashboard
            </NavLink>
          </ul>
          <div className="flex gap-2 sm:gap-5">
            <NavLink
              onClick={() => setClicked("Cart")}
              to={"/Dashboard/Cart"}
              className="cursor-pointer p-1.5 text-black bg-white rounded-[50%] sm:p-2.5"
            >
              <ShoppingBag />
            </NavLink>
            <NavLink
              onClick={() => setClicked("Wishlist")}
              to={"/Dashboard/Wishlist"}
              className="cursor-pointer p-1.5 text-black bg-white rounded-[50%] sm:p-2.5"
            >
              <Heart />
            </NavLink>
          </div>
        </nav>
        <div className="text-center py-5 space-y-3 sm:space-y-7 sm:py-13">
          <h1 className="w-[93%] mx-auto text-2xl font-bold sm:text-5xl">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="w-[95%] mx-auto sm:w-[55%]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn mb-25 text-[#9538e2] text-lg p-6 rounded-3xl font-bold sm:text-xl sm:p-7 sm:rounded-4xl sm:mb-50">
            Shop Now
          </button>
        </div>
        <div className="absolute  border-1 h-[240px] w-[90%] border-white bg-[#ffffff4d] p-3 rounded-2xl left-1/2 -translate-x-1/2 top-[calc(100%-80px)] sm:top-[calc(100%-200px)] sm:h-[550px] sm:w-[75%] sm:rounded-4xl sm:p-5">
          <img
            className="rounded-xl h-full w-full object-cover sm:rounded-3xl"
            src={BannerImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;