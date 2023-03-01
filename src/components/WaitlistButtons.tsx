import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";

const WaitlistButtons = ({ activeButton, setActiveButton }) => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  return (
    <div className="flex justify-between lg:justify-start text-xs mb-6">
      <button
        style={
          selected === 10 && activeButton === 0
            ? { backgroundColor: theme }
            : {}
        }
        type="button"
        onClick={() => setActiveButton(0)}
        className={`text-white ${
          activeButton === 0
            ? theme === "bg-theme0" || theme === "bg-theme1"
              ? "bg-black"
              : theme
            : "text-black"
        } mr-2 border border-gray-300 hover:border-gray-300 focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-3 py-2.5 text-center mb-2`}
      >
        All Locations
      </button>
      <button
        type="button"
        onClick={() => setActiveButton(1)}
        style={
          selected === 10 && activeButton === 1
            ? { backgroundColor: theme }
            : {}
        }
        className={`text-white mr-2 border border-gray-300 hover:border-gray-300 focus-visible:outline-none focus:outline-none font-medium rounded-full w-full lg:w-[150px] px-3 py-2.5 text-center mb-2
        ${
          activeButton === 1
            ? theme === "bg-theme0" || theme === "bg-theme1"
              ? "bg-black"
              : theme
            : "text-black"
        }
        `}
      >
        Location 1
      </button>
    </div>
  );
};

export default WaitlistButtons;
