import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="max-w-7xl w-[95%] mx-auto sm:w-[97%] min-h-80 flex justify-center items-center sm:min-h-120">
      <PulseLoader />
    </div>
  );
};

export default Loading;