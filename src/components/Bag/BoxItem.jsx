import { CircleX } from "lucide-react";
import toast from "react-hot-toast";

const BoxItem = ({ item, removeFromCart }) => {
  const {
    product_id,
    product_image,
    product_title,
    price,
    quantity,
    description,
  } = item;
  return (
    <div className="bg-white p-3 rounded-3xl flex justify-between items-center gap-3 sm:gap-5 sm:p-5">
      <div className="flex items-center gap-3 sm:gap-5">
        <img
          className="h-[105px] w-[105px] rounded-2xl sm:h-[200px] sm:w-[200px]"
          src={product_image}
          alt=""
        />
        <div className="sm:space-y-3">
          <h2 className="text-lg font-semibold sm:text-2xl">{product_title}</h2>
          <p className="hidden sm:block">{description.slice(0, 90)}...</p>
          <div className="sm:space-y-1">
            <h3 className="font-semibold text-[#09080fcc] text-sm sm:text-lg">
              Price: ${price}
            </h3>
            <h5 className="font-semibold text-[#09080fcc] text-sm sm:text-lg">
              Quantity : {quantity}
            </h5>
          </div>
        </div>
      </div>
      <div className="mr-3 sm:mr-7">
        <CircleX
          onClick={() => {
            removeFromCart(product_id);
            toast.success("Product removed from cart");
          }}
          className="cursor-pointer"
          size={32}
          color="#ff0000"
        />
      </div>
    </div>
  );
};

export default BoxItem;