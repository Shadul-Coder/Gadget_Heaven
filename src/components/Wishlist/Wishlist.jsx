import { use } from "react";
import WishItem from "./WishItem";
import CartContext from "../../context/CartContext";

const Wishlist = () => {
  const [, , wishlist, setWishlist] = use(CartContext);
  const removeFromWishlist = (id) => {
    const newList = wishlist.filter((item) => item.product_id !== id);
    setWishlist(newList);
  };
  return (
    <div className="max-w-7xl mx-auto py-9 w-[95%] sm:w-[97%] sm:py-15">
      <h3 className="text-xl font-bold sm:text-2xl">Wishlist</h3>
      <div className="mt-5 space-y-3 sm:mt-10 sm:space-y-5">
        {wishlist.length === 0 ? (
          <p className="my-25 text-center text-[#0b0b0bb3] sm:my-35">
            Nothing in your wishlist yet
          </p>
        ) : (
          wishlist.map((item) => (
            <WishItem
              key={item.product_id}
              item={item}
              removeFromWishlist={removeFromWishlist}
            ></WishItem>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;