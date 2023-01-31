import React from "react";

const WaitlistButtons = () => {
  return (
    <div className="flex justify-between lg:justify-start text-xs mb-6">
      <button
        type="button"
        className="text-white bg-secondary mr-2 hover:bg-secondary focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-3 py-2.5 text-center mb-2"
      >
        All Locations
      </button>
      <button
        type="button"
        className="text-black bg-white mr-2 border-secondary hover:bg-secondary hover:text-white focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-3 py-2.5 text-center mb-2"
      >
        Location 1
      </button>
      <button
        type="button"
        className="text-black bg-white border-secondary hover:bg-secondary hover:text-white focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-3 py-2.5 text-center mb-2"
      >
        Location 2
      </button>
    </div>
  );
};

export default WaitlistButtons;
