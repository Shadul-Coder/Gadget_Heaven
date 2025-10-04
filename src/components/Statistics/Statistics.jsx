import Chart from "./Chart";

const Statistics = () => {
  return (
    <>
      <div className="bg-[#9538e2]">
        <div className="max-w-7xl mx-auto w-[95%] text-white text-center py-5 space-y-3 sm:w-[97%] sm:space-y-7 sm:py-13">
          <h1 className="text-2xl font-bold sm:text-3xl">Statistics</h1>
          <p className="w-[95%] mx-auto sm:w-[55%]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-9 w-[95%] sm:w-[97%] sm:py-15">
        <div className="mx-auto text-[10px] h-[300px] bg-white rounded-3xl pr-5 py-5 sm:w-[70%] sm:h-[550px] sm:text-[13px]">
          <Chart></Chart>
        </div>
      </div>
    </>
  );
};

export default Statistics;