import deleteIcon from "../assets/delete.svg";
import edit from "../assets/edit.svg";
import Stations from "./Stations";
import TimePicker from "../components/TimePicker";
import Datepicker from "tailwind-datepicker-react";
import { useState } from "react";
import OperatingHours from "./OperatingHours";
import { options } from "../util/operatingHours";

const LocationInput = ({ showLocation, setShowLocation, location }: any) => {
  const [fromDate, setFromDate] = useState(false);
  const [toDate, setToDate] = useState(false);

  const handleFromChange = (selectedDate: Date) => console.log(selectedDate);
  const handleFromClose = (state: boolean) => setFromDate(state);

  const handleToChange = (selectedDate: Date) => console.log(selectedDate);
  const handleToClose = (state: boolean) => setToDate(state);

  const teamMembers = [
    "Ronald Richards",
    "Savannah Niguyen",
    "Cody Fisher",
    "Albert Flores",
  ];
  return (
    <>
      <div className="mb-6 px-2">
        <div className="flex items-center justify-between mb-4">
          <span className="flex items-center">
            <span className="text-sm mr-5">Location</span>
            <img src={edit} alt="Edit" className="mr-2 lg:hidden" />
            <img src={deleteIcon} alt="Delete" className="lg:hidden" />
          </span>
          <span
            className="flex items-center cursor-pointer"
            onClick={() => setShowLocation()}
          >
            {showLocation ? (
              <>
                <span className="text-xs mr-1">Hide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </>
            ) : (
              <>
                <span className="text-xs mr-1">Show all</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </>
            )}
          </span>
        </div>

        <div className={`mb-4 ${!showLocation && "hidden"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:mr-3">
              <label
                htmlFor="businessCountry"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                Business country
              </label>
              <input
                type="text"
                id="businessCountry"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Select country"
                required
              />
            </div>

            <div className="lg:mr-3">
              <label
                htmlFor="city"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Enter business city..."
                required
              />
            </div>

            <div className="lg:flex lg:justify-between">
              <div className="lg:flex-1">
                <label
                  htmlFor="streetAddress"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Street address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                  placeholder="Street address..."
                  required
                />
              </div>
              <span className="hidden lg:ml-3 lg:flex lg:items-center">
                <img src={edit} alt="Edit" className="mr-2" />
                <img src={deleteIcon} alt="Delete" />
              </span>
            </div>
          </div>
          {/* locatin station */}
          <div className="px-2 mb-10">
            <span className="text-sm mb-6 block">Location stations</span>
            <span className="opacity-40 block text-sm mb-4">Station name</span>

            <Stations text="Station 1" />
            <hr className="mb-4" />
            <Stations text="Station 2" />
            <hr className="mb-4" />
            <Stations text="Station 3" />
          </div>

          {/* team member */}
          <div className="px-2 mb-10">
            <span className="text-sm mb-6 block">Location team members</span>
            <span className="opacity-40 block text-xs mb-4">member name</span>

            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="flex justify-between mb-6">
                  <span className="text-xs flex items-center w-[150px]">
                    <span className="mr-5 opacity-40">{index + 1}</span>
                    <span className="text-xs opacity-40">{member}</span>
                  </span>
                  <span className="text-xs flex items-center">
                    <span className="opacity-40 mr-1">Station {index + 1}</span>
                    <img src={edit} alt="Edit" />
                  </span>
                  <span className="text-xs flex items-center">
                    <span className="opacity-40 mr-1">Obstetrician</span>
                    <img src={edit} alt="Edit" />
                  </span>
                  <span className="text-xs flex items-center">
                    <span className="opacity-40 mr-1">Admin</span>
                    <img src={edit} alt="Edit" />
                  </span>
                  <span className="flex items-center">
                    <img src={edit} alt="Edit" className="mr-1" />
                    <img src={deleteIcon} alt="Delete" />
                  </span>
                </div>
                {index === teamMembers.length - 1 ? null : (
                  <hr className="mb-4" />
                )}
              </div>
            ))}
          </div>
          {/* operating hours */}
          <div className="px-2 mb-6">
            <span className="text-sm mb-6 block">Operating hours and days</span>
            <div className="mb-6 text-xs flex items-center">
              <div className="mr-6">
                <span className="block mb-4">Set the operating days</span>
                <div className="flex">
                  <span className="flex items-center mr-2">
                    <span className="mr-2">from</span>
                    <Datepicker
                      options={options}
                      onChange={handleFromChange}
                      show={fromDate}
                      setShow={handleFromClose}
                    />
                  </span>
                  <span className="flex items-center">
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
              <div>
                <span className="block mb-4">Set the operating hours</span>
                <div className="flex">
                  <span className="flex items-center mr-2">
                    <span className="mr-2">from</span>
                    <TimePicker />
                  </span>
                  <span className="flex items-center">
                    <span className="mr-2">to</span>
                    <TimePicker />
                  </span>
                </div>
              </div>
            </div>
            <OperatingHours />

            <div className="mb-10 mt-6 text-xs flex items-center">
              <div className="mr-6">
                <span className="block mb-4">Set the hours</span>
                <div className="flex">
                  <span className="flex items-center mr-2">
                    <span className="mr-2">from</span>
                    <TimePicker />
                  </span>
                  <span className="flex items-center">
                    <span className="mr-2">to</span>
                    <TimePicker />
                  </span>
                </div>
              </div>
              <div>
                <span className="block mb-4">Set the operating hours</span>
                <span className="flex items-center mr-2">
                  <Datepicker
                    options={options}
                    onChange={handleFromChange}
                    show={fromDate}
                    setShow={handleFromClose}
                  />
                </span>
              </div>
            </div>
            <hr className="mb-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationInput;
