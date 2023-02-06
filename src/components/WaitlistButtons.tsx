import React from "react";
import { useAppSelector } from "../redux/hooks";

const WaitlistButtons = () => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  return (
    <div className="flex justify-between lg:justify-start text-xs mb-6">
      <button
        style={selected === 10 ? { backgroundColor: theme } : {}}
        type="button"
        className={`text-white ${
          theme === "bg-theme0" || theme === "bg-theme1" ? "bg-black" : theme
        } mr-2  focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-3 py-2.5 text-center mb-2`}
      >
        All Locations
      </button>
      <button
        type="button"
        className="text-black mr-2 border border-gray-300 hover:border-gray-300 focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-3 py-2.5 text-center mb-2"
      >
        Location 1
      </button>
      <button
        type="button"
        className="text-black border border-gray-300 hover:border-gray-300 focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-3 py-2.5 text-center mb-2"
      >
        Location 2
      </button>
    </div>
  );
};

export default WaitlistButtons;
