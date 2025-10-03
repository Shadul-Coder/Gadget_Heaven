import { Heart, Menu, ShoppingBag } from "lucide-react";
import BannerImage from "../../assets/Banner-Image.jpg";

const HeroSection = () => {
  return (
    <div className="pt-3 pb-40 sm:pt-7 sm:pb-90">
      <div className="relative max-w-7xl mx-auto w-[95%] bg-[#9538e2] text-white rounded-2xl outline-1 outline-[#9538e2] outline-offset-5 sm:w-[97%] sm:outline-offset-7 sm:rounded-4xl">
        <div className="w-[97%] py-5 mx-auto flex justify-between items-center sm:py-7">
          <div className="flex items-center gap-2.5">
            <div className="dropdown sm:hidden">
              <div tabIndex={0} role="button">
                <Menu />
              </div>
              <div
                tabIndex={0}
                className="text-black menu dropdown-content bg-white rounded-box z-1 mt-3 w-30 p-1.5 shadow"
              >
                <a className="px-2 py-1 rounded-md transition-all active:bg-[#9538e2] active:text-white">
                  Home
                </a>
                <a className="px-2 py-1 rounded-md transition-all active:bg-[#9538e2] active:text-white">
                  Statistics
                </a>
                <a className="px-2 py-1 rounded-md transition-all active:bg-[#9538e2] active:text-white">
                  Dashboard
                </a>
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
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Statistics</li>
            <li className="cursor-pointer">Dashboard</li>
          </ul>
          <div className="flex gap-2 sm:gap-5">
            <div className="cursor-pointer p-1.5 text-black bg-white rounded-[50%] sm:p-2.5">
              <ShoppingBag />
            </div>
            <div className="cursor-pointer p-1.5 text-black bg-white rounded-[50%] sm:p-2.5">
              <Heart />
            </div>
          </div>
        </div>
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
        <div className="absolute top-100 border-1 h-[240px] w-[90%] border-white bg-[#ffffff4d] p-3 rounded-2xl left-1/2 -translate-x-1/2 sm:top-[calc(100%-200px)] sm:h-[550px] sm:w-[75%] sm:rounded-4xl sm:p-5">
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