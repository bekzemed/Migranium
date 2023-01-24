import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import add from "../assets/add.svg";
import { options } from "../util/operatingHours";
import TimePicker from "./TimePicker";

const AddStation = ({ addStation, setAddStation }: any) => {
  const [fromDate, setFromDate] = useState(false);
  const [toDate, setToDate] = useState(false);

  const handleFromChange = (selectedDate: Date) => console.log(selectedDate);
  const handleFromClose = (state: boolean) => setFromDate(state);

  const handleToChange = (selectedDate: Date) => console.log(selectedDate);
  const handleToClose = (state: boolean) => setToDate(state);

  return (
    <div className="bg-white rounded-lg absolute left-1/2 top-1/2 date-picker dark:text-black w-[350px] xl:w-[500px] p-4 z-30 shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
        <span>Add new station</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setAddStation(!addStation)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="py-4 border-b border-b-gray-300 xl:flex xl:flex-wrap">
        <div className="mb-4">
          <label
            htmlFor="stationName"
            className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
          >
            Station name
          </label>
          <input
            type="text"
            id="stationName"
            className="bg-gray-50 border w-full xl:w-[200px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
            placeholder="Enter station name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="stationLocation"
            className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
          >
            Station location
          </label>
          <input
            type="text"
            id="stationLocation"
            className="bg-gray-50 border w-full xl:w-[200px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
            placeholder="Select station location"
            required
          />
        </div>
      </div>

      <div className="py-4">
        <div className="py-4 border-b border-b-gray-300">
          <span className="mb-4 block">Operating hours and days</span>
          <div className="mb-2">
            <span className="block text-xs mb-2">Set the operating days</span>
            <div className="flex mb-4">
              <span className="flex items-center text-xs mr-2">
                <span className="mr-2">from</span>
                <Datepicker
                  options={options}
                  onChange={handleFromChange}
                  show={fromDate}
                  setShow={handleFromClose}
                />
              </span>
              <span className="flex items-center text-xs">
                <span className="mr-2">to</span>
                <Datepicker
                  options={options}
                  onChange={handleToChange}
                  show={toDate}
                  setShow={handleToClose}
                />
              </span>
            </div>
          </div>
          <div className=" text-xs mb-2">
            <span className="block text-xs mb-2">Set the operating hours</span>

            <div className="flex items-center">
              <div className="mr-3">
                <TimePicker text="from" />
              </div>
              <TimePicker text="to" />
            </div>
          </div>

          <span className="text-xs flex items-center my-6">
            <img src={add} alt="Add" className="mr-2" />
            <span className="text-primary">The day with multiple hours</span>
          </span>
        </div>

        <div className="py-4">
          <span className="mb-4 block">Add team members</span>

          <div className="mb-4">
            <label
              htmlFor="selectTeamMember"
              className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
            >
              Select team member
            </label>
            <input
              type="text"
              id="selectTeamMember"
              className="bg-gray-50 border w-full xl:w-[200px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
              placeholder="Select team member"
              required
            />
            <span className="text-xs flex items-center my-6">
              <img src={add} alt="Add" className="mr-2" />
              <span className="text-primary">Add team member</span>
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className=" p-2 text-xs xl:w-[150px] font-medium text-center bg-secondary text-white  rounded-full focus-visible:outline-none focus:outline-none"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStation;
