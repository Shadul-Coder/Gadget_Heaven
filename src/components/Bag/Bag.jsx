import { ArrowDownUp } from "lucide-react";
import ButtonBg from "../../assets/Button-Bg.jpg";
import BoxItem from "./BoxItem";
import { use, useEffect, useState } from "react";
import Success from "../../assets/Success.png";
import { useNavigate } from "react-router";
import CartContext from "../../context/CartContext";

const Bag = () => {
  const navigate = useNavigate();
  const [cart, setCart] = use(CartContext);
  const [cost, setCost] = useState(0);
  const [order, setOrder] = useState(true);
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.product_id !== id);
    setCart(newCart);
  };
  useEffect(() => {
    let total = 0;
    for (const product of cart) {
      total += product.price * product.quantity;
    }
    setCost(total);
  }, [cart]);
  return (
    <div className="max-w-7xl mx-auto py-9 w-[95%] sm:w-[97%] sm:py-15">
      <div className="flex flex-col gap-3.5 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold sm:text-2xl">Cart</h3>
          <h5 className="text-xl font-bold sm:hidden">Total Cost : ${cost}</h5>
        </div>
        <div className="flex justify-end gap-3 sm:items-center sm:gap-5">
          <h5 className="hidden sm:block sm:text-2xl sm:font-bold">
            Total Cost : ${cost}
          </h5>
          <button
            onClick={() => {
              const sortCart = [...cart];
              if (order) {
                sortCart.sort((x, y) => x.price - y.price);
              } else {
                sortCart.sort((x, y) => y.price - x.price);
              }
              setCart(sortCart);
              setOrder(!order);
            }}
            className="btn rounded-3xl p-5.5 text-[#9538e2] border-1 border-[#9538e2] sm:p-6"
          >
            <div className="flex gap-1.5 sm:text-lg">
              Sort by Price <ArrowDownUp />
            </div>
          </button>
          <button
            style={{
              backgroundImage: `url(${ButtonBg})`,
              backgroundPosition: "bottom left, bottom right",
            }}
            onClick={() => document.getElementById("purchase").showModal()}
            disabled={cost === 0 ? true : false}
            className="btn text-white rounded-3xl p-5.5 bg-cover sm:text-lg sm:p-6"
          >
            Purchase
          </button>
          <dialog id="purchase" className="modal">
            <div className="modal-box pt-10 rounded-4xl text-center space-y-3 sm:space-y-5">
              <img className="mx-auto" src={Success} alt="" />
              <h5 className="text-xl font-bold pb-3 border-b-1 border-[#09080f1a] sm:pb-5 sm:text-2xl">
                Payment Successfully
              </h5>
              <p className="text-[#09080f99] sm:text-lg">
                Thanks for purchasing
              </p>
              <h5 className="text-[#09080f99] sm:text-lg">Total : ${cost}</h5>
              <form method="dialog">
                <button
                  onClick={() => {
                    setCart([]);
                    navigate("/");
                  }}
                  className="btn w-[100%] font-semibold rounded-3xl py-5.5 sm:text-lg sm:py-6"
                >
                  Close
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      <div className="mt-5 space-y-3 sm:mt-10 sm:space-y-5">
        {cart.length === 0 ? (
          <p className="my-25 text-center text-[#0b0b0bb3] sm:my-35">
            Your cart is empty
          </p>
        ) : (
          cart.map((item) => (
            <BoxItem
              key={item.product_id}
              item={item}
              removeFromCart={removeFromCart}
            ></BoxItem>
          ))
        )}
      </div>
    </div>
  );
};

export default Bag;