import React, { useState } from "react";
import {
  DashboardDesktop,
  DashboardMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import user from "../assets/user.svg";
import time from "../assets/time.svg";
import downArrow from "../assets/down.svg";
import filter from "../assets/filter.svg";
import Header from "../components/Header";

const WaitList = () => {
  const [show, onShow] = useState(false);
  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black">
        <span className="opacity-80 block mb-1 text-xs">Cashex</span>
        <span className="text-2xl block mb-4">Waitlist</span>

        <div className="flex text-xs justify-between mb-5">
          <div className="px-8 py-1 rounded-full border border-gray-300 bg-white flex items-center">
            <img src={user} alt="User" className="mr-2" />
            <span>0</span>
          </div>

          <div className="px-8 py-1 rounded-full border border-gray-300 bg-white flex items-center">
            <img src={time} alt="Time" className="mr-2" />
            <span>0 hours</span>
          </div>

          <div className="px-8 py-1 rounded-full border border-gray-300 bg-white flex items-center">
            <span className="mr-2">open</span>
            <img src={downArrow} alt="Down arrow" />
          </div>
        </div>

        <div className="bg-white rounded-lg px-2 py-4 mb-6">
          <span className="block text-center text-xs pb-4">
            Your waitlist is empty
          </span>
          <hr className="pb-4" />
        </div>
      </div>

      <div className="text-xs w-screen block lg:hidden">
        <DashboardMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block">
          <Header text="Waitlist" />

          <div className="mb-10 flex items-center justify-between dark:text-black">
            <div className="flex text-xs justify-between">
              <div className="px-8 py-1 rounded-full border border-gray-300 bg-white flex items-center mr-5">
                <img src={user} alt="User" className="mr-2" />
                <span>0</span>
              </div>

              <div className="px-8 py-1 rounded-full border border-gray-300 bg-white flex items-center mr-5">
                <img src={time} alt="Time" className="mr-2" />
                <span>0 hours</span>
              </div>

              <div className="px-8 py-1 rounded-full border border-gray-300 bg-white flex items-center">
                <span className="mr-2">open</span>
                <img src={downArrow} alt="Down arrow" />
              </div>
            </div>

            <div className="px-8 py-1 text-xs rounded-full border border-gray-300 bg-white flex items-center">
              <img src={filter} alt="Down arrow" className="mr-2" />
              <span>Filters</span>
            </div>
          </div>

          <div className="bg-white rounded-lg px-2 py-4 mb-6 dark:text-black">
            <span className="block text-center text-xs pb-4">
              Your waitlist is empty
            </span>
            <hr className="pb-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitList;
