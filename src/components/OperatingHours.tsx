import React from "react";
import add from "../assets/add.svg";

const OperatingHours = () => {
  return (
    <>
      <div className="flex text-xs flex-wrap mb-4">
        <div className="w-[150px] mb-4">
          <span className="block opacity-40 mb-2">Monday</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="w-[150px] mb-4">
          <span className="block opacity-40 mb-2">Tuesday</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="w-[150px] mb-4">
          <span className="block opacity-40 mb-2">Wednesday</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="w-[150px] mb-4">
          <span className="block opacity-40 mb-2">Thursday</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="w-[150px] mb-4">
          <span className="block opacity-40 mb-2">Friday</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="w-[150px] mb-4">
          <span className="block opacity-40 mb-2">Saturday</span>
          <span>09:00 am - 06:00pm</span>
        </div>
        <div className="w-[70px] mb-4">
          <span className="block opacity-40 mb-2">Sunday</span>
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
