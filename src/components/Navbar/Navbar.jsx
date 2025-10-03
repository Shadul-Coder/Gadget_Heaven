import {
  Album,
  ChartColumn,
  Heart,
  House,
  Menu,
  ShoppingBag,
} from "lucide-react";

const Navbar = () => {
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
            <a className="px-2.5 py-1.5 rounded-md transition-all active:bg-[#9538e2] active:text-white">
              <div className="flex items-center gap-1.5">
                <House /> Home
              </div>
            </a>
            <a className="px-2.5 py-1.5 rounded-md transition-all active:bg-[#9538e2] active:text-white">
              <div className="flex items-center gap-1.5">
                <ChartColumn /> Statistics
              </div>
            </a>
            <a className="px-2.5 py-1.5 rounded-md transition-all active:bg-[#9538e2] active:text-white">
              <div className="flex items-center gap-1.5">
                <Album /> Dashboard
              </div>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3.5">
          <img className="h-[40px] sm:h-[50px]" src="./Logo.png" alt="" />
          <h1 className="text-xl font-semibold sm:text-2xl">Gadget Heaven</h1>
        </div>
      </div>
      <ul className="hidden sm:flex sm:gap-13">
        <li className="cursor-pointer text-[#0b0b0bb3]">Home</li>
        <li className="cursor-pointer text-[#0b0b0bb3]">Statistics</li>
        <li className="cursor-pointer text-[#0b0b0bb3]">Dashboard</li>
      </ul>
      <div className="flex gap-2 sm:gap-5">
        <div className="cursor-pointer p-1.5 text-black bg-white border-1 border-[#0b0b0b1a] rounded-[50%] sm:p-2.5">
          <ShoppingBag />
        </div>
        <div className="cursor-pointer p-1.5 text-black bg-white border-1 border-[#0b0b0b1a] rounded-[50%] sm:p-2.5">
          <Heart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;