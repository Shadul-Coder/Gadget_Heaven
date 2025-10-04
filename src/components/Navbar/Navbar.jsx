import Logo from "../../../public/Logo.png";
import {
  Album,
  ChartColumn,
  Heart,
  House,
  Menu,
  ShoppingBag,
} from "lucide-react";
import { use } from "react";
import { Link, NavLink } from "react-router";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [, , , , , setClicked] = use(CartContext);
  return (
    <nav className="max-w-7xl w-[95%] py-4 mx-auto flex justify-between items-center sm:w-[97%] sm:py-4.5">
      <div className="flex items-center gap-2.5">
        <div className="dropdown sm:hidden">
          <div tabIndex={0} role="button">
            <Menu />
          </div>
          <div
            tabIndex={0}
            className="text-black menu dropdown-content bg-white rounded-box z-1 mt-3 w-40 p-1.5 shadow"
          >
            <Link to={"/"}>
              <div className="px-2.5 py-1.5 rounded-md transition-all active:bg-[#9538e2] active:text-white">
                <div className="flex items-center gap-1.5">
                  <House /> Home
                </div>
              </div>
            </Link>
            <div className="px-2.5 py-1.5 rounded-md transition-all active:bg-[#9538e2] active:text-white">
              <div className="flex items-center gap-1.5">
                <ChartColumn /> Statistics
              </div>
            </div>
            <Link
              onClick={() => setClicked("Cart")}
              to={"/Dashboard/Cart"}
              className="px-2.5 py-1.5 rounded-md transition-all active:bg-[#9538e2] active:text-white"
            >
              <div className="flex items-center gap-1.5">
                <Album /> Dashboard
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3.5">
          <img className="h-[40px] sm:h-[50px]" src={Logo} alt="" />
          <h1 className="text-xl font-semibold sm:text-2xl">Gadget Heaven</h1>
        </div>
      </div>
      <ul className="hidden sm:flex sm:gap-13">
        <NavLink to={"/"}>
          <li className="cursor-pointer text-[#0b0b0bb3]">Home</li>
        </NavLink>
        <li className="cursor-pointer text-[#0b0b0bb3]">Statistics</li>
        <NavLink onClick={() => setClicked("Cart")} to={"/Dashboard/Cart"}>
          <li className="cursor-pointer text-[#0b0b0bb3]">Dashboard</li>
        </NavLink>
      </ul>
      <div className="flex gap-2 sm:gap-5">
        <NavLink
          onClick={() => setClicked("Cart")}
          to={"/Dashboard/Cart"}
          className="cursor-pointer p-1.5 text-black bg-white border-1 border-[#0b0b0b1a] rounded-[50%] sm:p-2.5"
        >
          <ShoppingBag />
        </NavLink>
        <NavLink
          onClick={() => setClicked("Wishlist")}
          to={"/Dashboard/Wishlist"}
          className="cursor-pointer p-1.5 text-black bg-white border-1 border-[#0b0b0b1a] rounded-[50%] sm:p-2.5"
        >
          <Heart />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;