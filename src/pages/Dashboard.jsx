import { use } from "react";
import { Link, Outlet } from "react-router";
import CartContext from "../context/CartContext";

const Dashboard = () => {
  const [, , , , clicked, setClicked] = use(CartContext);
  return (
    <>
      <div className="bg-[#9538e2]">
        <div className="max-w-7xl mx-auto w-[95%] text-white text-center py-5 space-y-3 sm:w-[97%] sm:space-y-7 sm:py-13">
          <h1 className="text-2xl font-bold sm:text-3xl">Dashboard</h1>
          <p className="w-[95%] mx-auto sm:w-[55%]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="space-x-3">
            <Link
              onClick={() => setClicked("Cart")}
              to={"/Dashboard/Cart"}
              className={`btn ${
                clicked === "Cart"
                  ? "text-[#9538e2] font-bold"
                  : "text-white bg-[#9538e2]"
              } px-10 rounded-3xl p-6 sm:px-15 sm:py-7 sm:rounded-4xl sm:text-lg`}
            >
              Cart
            </Link>
            <Link
              onClick={() => setClicked("Wishlist")}
              to={"/Dashboard/Wishlist"}
              className={`btn ${
                clicked === "Wishlist"
                  ? "text-[#9538e2] font-bold"
                  : "text-white bg-[#9538e2]"
              } px-10 rounded-3xl p-6 sm:px-15 sm:py-7 sm:rounded-4xl sm:text-lg`}
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Dashboard;