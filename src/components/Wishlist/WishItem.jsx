import { CircleX } from "lucide-react";
import { use } from "react";
import toast from "react-hot-toast";
import CartContext from "../../context/CartContext";

const WishItem = ({ item, removeFromWishlist }) => {
  const [cart, setCart] = use(CartContext);
  const {
    availability,
    product_id,
    product_image,
    product_title,
    price,
    description,
  } = item;
  const handleAddToCart = () => {
    if (!availability) {
      toast.error("Product is out of stock");
      return;
    }
    let index = cart.findIndex((item) => item.product_title === product_title);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
      toast.success("Item Added To Cart");
    } else {
      const newProduct = { ...item, quantity: 1 };
      setCart([...cart, newProduct]);
      toast.success("Item Added To Cart");
    }
  };
  return (
    <div className="bg-white p-3 rounded-3xl flex justify-between items-center gap-3 sm:gap-5 sm:p-5">
      <div className="flex items-center gap-3 sm:gap-5">
        <img
          className="h-[130px] w-[130px] rounded-2xl sm:h-[250px] sm:w-[250px]"
          src={product_image}
          alt=""
        />
        <div className="space-y-1.5 sm:space-y-3">
          <h2 className="text-lg font-semibold sm:text-2xl">{product_title}</h2>
          <p className="hidden sm:block">{description.slice(0, 90)}...</p>
          <h3 className="font-semibold text-[#09080fcc] text-sm sm:text-lg">
            Price: ${price}
          </h3>
          <button
            onClick={handleAddToCart}
            className="btn rounded-3xl bg-[#9538e2] text-white sm:text-lg sm:rounded-4xl sm:p-7"
          >
            Add to Card
          </button>
        </div>
      </div>
      <div className="mr-3 sm:mr-7">
        <CircleX
          onClick={() => {
            removeFromWishlist(product_id);
            toast.success("Item removed from wishlist");
          }}
          className="cursor-pointer"
          size={32}
          color="#ff0000"
        />
      </div>
    </div>
  );
};

export default WishItem;