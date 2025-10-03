import Button from "./Button";

const Menu = () => {
  const buttons = [
    "All Product",
    "Laptops",
    "Phones",
    "Accessories",
    "Smart Watches",
    "MacBook",
    "Iphone",
  ];
  return (
    <div className="hidden sm:block sm:bg-white sm:flex-1 sm:p-5 sm:rounded-4xl sm:space-y-5">
      {buttons.map((button, index) => (
        <Button key={index} button={button}></Button>
      ))}
    </div>
  );
};

export default Menu;