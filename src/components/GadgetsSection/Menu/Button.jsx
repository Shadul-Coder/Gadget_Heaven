const Button = ({ button }) => {
  return (
    <div className="bg-[#09080f0d] rounded-3xl px-5 py-3 cursor-pointer transition-all hover:bg-[#9538e2] hover:text-white">
      <h3>{button}</h3>
    </div>
  );
};

export default Button;