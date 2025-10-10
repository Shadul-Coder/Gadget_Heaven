import Menu from "./Menu/Menu";
import Items from "./Items/Items";
import useProducts from "../../hooks/useProducts";
import { useEffect, useState } from "react";

const GadgetsSection = ({ selected, handleSelected }) => {
  const { loading, products } = useProducts();
  const [selectedData, setSelectedData] = useState([]);
  useEffect(() => {
    if (selected === "All Product") {
      setSelectedData(products);
    } else {
      const newData = products.filter((item) => item.category === selected);
      setSelectedData(newData);
    }
  }, [selected, products]);
  return (
    <div className="max-w-7xl mx-auto py-10 w-[90%] sm:w-[97%] sm:py-20">
      <h2 className="pb-7 text-center text-2xl font-bold sm:pb-15 sm:text-4xl">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="sm:flex sm:items-start sm:gap-5">
        <Menu selected={selected} handleSelected={handleSelected}></Menu>
        <Items loading={loading} selectedData={selectedData}></Items>
      </div>
    </div>
  );
};

export default GadgetsSection;