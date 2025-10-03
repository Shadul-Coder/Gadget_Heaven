const Footer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto w-[95%] text-[#09080f99] sm:w-[97%] sm:text-center">
        <div className="pt-9 pb-7 border-b-1 border-[#09080f1a] space-y-3 sm:pt-20 sm:pb-10">
          <h3 className="text-2xl font-bold text-black sm:text-3xl">
            Gadget Heaven
          </h3>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="flex flex-col gap-5 my-7 sm:flex-row sm:justify-around sm:my-10">
          <div className="flex flex-col gap-1.5">
            <h6 className="mb-1.5 text-lg text-black font-bold">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </div>
          <div className="flex flex-col gap-1.5">
            <h6 className="mb-1.5 text-lg text-black font-bold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div className="flex flex-col gap-1.5">
            <h6 className="mb-1.5 text-lg text-black font-bold">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
        <small className="block text-center py-5 border-t-1 border-[#09080f1a] sm:py-7">
          &copy; 2025 Gadget Heaven. All rights reserved
        </small>
      </div>
    </>
  );
};

export default Footer;