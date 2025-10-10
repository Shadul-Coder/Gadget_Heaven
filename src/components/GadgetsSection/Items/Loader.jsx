const SkeletonBlock = () => (
  <div className="flex flex-col gap-5">
    <div className="skeleton h-73 w-full rounded-4xl"></div>
    <div className="skeleton h-5 w-50 rounded-2xl"></div>
    <div className="skeleton h-4 w-30"></div>
    <div className="skeleton h-10 w-40 rounded-3xl"></div>
  </div>
);

const Loader = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <SkeletonBlock key={index} />
      ))}
    </>
  );
};

export default Loader;