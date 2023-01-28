import React from "react";
import add from "../assets/add.svg";

const OperatingHours = () => {
  return (
    <>
      <div className="flex flex-col text-xs flex-wrap mb-4">
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Mon</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Tue</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Wed</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Thu</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Fri</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Sat</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Sun</span>
          <span>Weekend</span>
        </div>
      </div>

      <span className="text-xs lg:text-sm flex items-center mb-4">
        <img src={add} alt="Add" className="mr-2" />
        <span className="text-primary">Add the day with multiple hours</span>
      </span>
    </>
  );
};

export default OperatingHours;
