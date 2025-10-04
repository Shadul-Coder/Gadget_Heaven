import Error from "../assets/Error.png";

const ErrorPage = () => {
  return (
    <div className="h-[75vh] sm:h-[100vh]">
      <img
        className="h-[100%] w-[70%] mx-auto object-contain sm:w-[35%]"
        src={Error}
        alt=""
      />
    </div>
  );
};

export default ErrorPage;