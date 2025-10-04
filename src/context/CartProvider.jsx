import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [clicked, setClicked] = useState("Cart");
  return (
    <CartContext.Provider
      value={[cart, setCart, wishlist, setWishlist, clicked, setClicked]}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;