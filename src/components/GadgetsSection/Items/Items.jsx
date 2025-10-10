import Item from "./Item";
import Loader from "./Loader";

const Items = ({ loading, selectedData }) => {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:flex-4 sm:grid-cols-3">
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          {selectedData.map((item) => (
            <Item key={item.product_id} item={item}></Item>
          ))}
        </>
      )}
    </div>
  );
};

export default Items;