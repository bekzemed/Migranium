import React from "react";

const WaitlistButtons = () => {
  return (
    <div className="flex justify-between lg:justify-start text-xs mb-6">
      <button
        type="button"
        className="text-white bg-secondary mr-2 hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-5 py-2.5 text-center mb-2"
      >
        All stations
      </button>
      <button
        type="button"
        className="text-black bg-white mr-2 border-bright hover:bg-bright hover:text-white focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-5 py-2.5 text-center mb-2"
      >
        Station 1
      </button>
      <button
        type="button"
        className="text-black bg-white border-bright hover:bg-bright hover:text-white focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-5 py-2.5 text-center mb-2"
      >
        Station 2
      </button>
    </div>
  );
};

export default WaitlistButtons;
