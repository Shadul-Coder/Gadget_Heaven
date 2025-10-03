import { use } from "react";
import Menu from "./Menu/Menu";
import Items from "./Items/Items";

const GadgetsSection = ({ gadgetsRes }) => {
  const { data } = use(gadgetsRes);
  return (
    <div className="max-w-7xl mx-auto py-10 w-[90%] sm:w-[97%] sm:py-20">
      <h2 className="pb-7 text-center text-2xl font-bold sm:pb-15 sm:text-4xl">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="sm:flex sm:items-start sm:gap-5">
        <Menu></Menu>
        <Items data={data}></Items>
      </div>
    </div>
  );
};

export default GadgetsSection;