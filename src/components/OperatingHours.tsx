import React, { useState } from "react";
import add from "../assets/add.svg";
import TimePicker from "./TimePicker";

const OperatingHours = () => {
  const [closeMonday, setCloseMonday] = useState(false);
  const [closeTuesday, setCloseTuesday] = useState(false);
  const [closeWednesday, setCloseWednesday] = useState(false);
  const [closeThursday, setCloseThursday] = useState(false);
  const [closeFriday, setCloseFriday] = useState(false);
  const [closeSaturday, setCloseSaturday] = useState(false);
  const [closeSunday, setCloseSunday] = useState(false);
  return (
    <>
      <div className="flex flex-col text-xs flex-wrap mb-4">
        <div className="mb-4 flex items-center">
          <span className="block opacity-40 w-[50px]">Mon</span>
          <div className="flex items-center">
            {closeMonday ? (
              <span>Closed</span>
            ) : (
              <>
                <TimePicker />
                <TimePicker />
              </>
            )}

            <Toggle setClose={setCloseMonday} close={closeMonday} />
          </div>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Tue</span>
          <div className="flex items-center">
            {closeTuesday ? (
              <span>Closed</span>
            ) : (
              <>
                <TimePicker />
                <TimePicker />
              </>
            )}

            <Toggle setClose={setCloseTuesday} close={closeTuesday} />
          </div>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Wed</span>
          <div className="flex items-center">
            {closeWednesday ? (
              <span>Closed</span>
            ) : (
              <>
                <TimePicker />
                <TimePicker />
              </>
            )}

            <Toggle setClose={setCloseWednesday} close={closeWednesday} />
          </div>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Thu</span>
          <div className="flex items-center">
            {closeThursday ? (
              <span>Closed</span>
            ) : (
              <>
                <TimePicker />
                <TimePicker />
              </>
            )}

            <Toggle setClose={setCloseThursday} close={closeThursday} />
          </div>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Fri</span>
          <div className="flex items-center">
            {closeFriday ? (
              <span>Closed</span>
            ) : (
              <>
                <TimePicker />
                <TimePicker />
              </>
            )}

            <Toggle setClose={setCloseFriday} close={closeFriday} />
          </div>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Sat</span>
          <div className="flex items-center">
            {closeSaturday ? (
              <span>Closed</span>
            ) : (
              <>
                <TimePicker />
                <TimePicker />
              </>
            )}

            <Toggle setClose={setCloseSaturday} close={closeSaturday} />
          </div>
        </div>
        <div className="mb-4 flex">
          <span className="block opacity-40 w-[50px]">Sun</span>
          <div className="flex items-center">
            {closeSunday ? (
              <span>Closed</span>
            ) : (
              <>
                <TimePicker />
                <TimePicker />
              </>
            )}

            <Toggle setClose={setCloseSunday} close={closeSunday} />
          </div>
        </div>
      </div>

      <span className="text-xs lg:text-sm flex items-center mb-4">
        <img src={add} alt="Add" className="mr-2" />
        <span className="text-primary">Add the day with multiple hours</span>
      </span>
    </>
  );
};

const Toggle = ({ setClose, close }: any) => {
  return (
    <div className="ml-3 lg:ml-[15px] 2xl:ml-10 flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          title=""
          placeholder=""
          className="sr-only peer"
          onClick={() => setClose(!close)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
      </label>
    </div>
  );
};

export default OperatingHours;
