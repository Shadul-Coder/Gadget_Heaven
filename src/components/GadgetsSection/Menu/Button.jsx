const Button = ({ button, selected, handleSelected }) => {
  return (
    <div
      onClick={() => handleSelected(button)}
      className={`rounded-3xl px-5 py-3 cursor-pointer transition-all ${
        selected === button ? "bg-[#9538e2] text-white" : "bg-[#09080f0d]"
      } hover:bg-[#9538e2] hover:text-white`}
    >
      <h3>{button}</h3>
    </div>
  );
};

export default Button;