import { Link } from "react-router";

const Item = ({ item }) => {
  const { product_image, product_title, price, category, product_id } = item;
  return (
    <div className="bg-white p-5 rounded-4xl shadow flex flex-col justify-between items-start">
      <div>
        <img className="rounded-3xl" src={product_image} alt="" />
        <h3 className="text-xl font-semibold pt-5 sm:text-2xl">
          {product_title}
        </h3>
        <h5 className="text-[#09080f99] pt-1 pb-3">Price : ${price}</h5>
      </div>
      <Link
        to={`/${category.split(" ").join("")}/${product_id}`}
        className="btn p-5.5 bg-white rounded-3xl text-[#9538e2] text-lg font-semibold border-2 border-[#9538E2] transition-all hover:scale-101"
      >
        View Details
      </Link>
    </div>
  );
};

export default Item;