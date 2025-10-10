import { Bolt, Heart, ShoppingBag } from "lucide-react";
import { useLoaderData, useParams } from "react-router";
import StarIcon from "../assets/Star-Icon.png";
import StarIconEmpty from "../assets/Star-Icon-Empty.png";
import { use } from "react";
import toast from "react-hot-toast";
import CartContext from "../context/CartContext";

const ProductDetails = () => {
  const [cart, setCart, wishlist, setWishlist] = use(CartContext);
  const { data } = useLoaderData();
  const { id } = useParams();
  const product = data.find((item) => item.product_id === id);
  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    Specification,
    rating,
  } = product;
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(StarIcon);
  }
  if (rating < 5) {
    stars.push(StarIconEmpty);
  }
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
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
      toast.success("Item Added To Cart");
    }
  };
  const handleWishlist = () => {
    let index = wishlist.findIndex(
      (item) => item.product_title === product_title
    );
    if (index !== -1) {
      toast.error("Item Already In Wishlist");
      return;
    }
    setWishlist([...wishlist, product]);
    toast.success("Item Added To Wishlist");
  };
  return (
    <div className="pb-10">
      <div className="bg-[#9538e2]">
        <div className="max-w-7xl mx-auto w-[95%] sm:w-[97%]">
          <div className="text-center pt-5 pb-60 space-y-3 sm:space-y-7 sm:pt-13 sm:pb-60">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Product Details
            </h1>
            <p className="w-[95%] mx-auto text-white sm:w-[55%]">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-50 max-w-7xl mx-auto shadow w-[90%] bg-white p-5 rounded-2xl flex flex-col gap-5 sm:w-[97%] sm:flex-row sm:items-center sm:p-7 sm:rounded-4xl sm:-mt-45">
        <div className="w-full">
          <img
            className="h-full rounded-xl sm:rounded-2xl"
            src={product_image}
            alt=""
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">{product_title}</h2>
          <h3 className="text-[#09080fcc] font-semibold text-lg">
            Price : ${price}
          </h3>
          <h3>
            <span
              className={`border-1 px-3 py-1.5 rounded-3xl ${
                availability
                  ? "border-[#309c08] text-[#309c08] bg-[#309C081A]"
                  : "border-[#d32f2f] text-[#d32f2f] bg-[#d32f2f1A]"
              }`}
            >
              {availability ? "In Stock" : "Stock Out"}
            </span>
          </h3>
          <p className="text-[#09080f99] text-justify">{description}</p>
          <h5 className="font-bold">Specification :</h5>
          <ul>
            {Specification.map((feature, index) => (
              <li key={index} className="text-[#09080f99]">
                <div className="flex items-center gap-1.5">
                  <Bolt /> {feature}
                </div>
              </li>
            ))}
          </ul>
          <h5 className="font-bold">Rating :</h5>
          <div className="flex items-center gap-1">
            {stars.map((star, index) => (
              <span key={index}>
                <img className="h-[25px]" src={star} alt="" />
              </span>
            ))}
            <span className="ml-3 text-sm bg-[#09080f0d] px-3 py-1.5 rounded-2xl">
              {rating}
            </span>
          </div>
          <div className="flex justify-between items-center sm:justify-normal sm:gap-5">
            <button
              onClick={handleAddToCart}
              className="bg-[#9538e2] text-white btn rounded-3xl p-5.5 sm:p-6.5 sm:rounded-4xl"
            >
              <div className="flex items-center gap-1.5">
                Add To Cart <ShoppingBag />
              </div>
            </button>
            <button
              onClick={handleWishlist}
              className="bg-white btn border-1 btn-circle border-[#09080f40] p-5.5 sm:p-6"
            >
              <div>
                <Heart />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;