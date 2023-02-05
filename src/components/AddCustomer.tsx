import { useState } from "react";
import add from "../assets/add.svg";
import OperatingHours from "./OperatingHours";

const AddCustomer = ({ showAddCustomer, setShowAddCustomer }: any) => {
  const stations = ["Station 1", "Station 2"];
  const locations = ["Location 1", "Location 2"];
  const [showStation, setShowStation] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [station, setStation] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="bg-white rounded-lg z-40 absolute h-[450px] xl:h-auto overflow-y-scroll left-1/2 top-1/2 center-absolute dark:text-black w-[350px] p-4 shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
        <span>Add Customer to waitlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowAddCustomer(!showAddCustomer)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="py-4 flex flex-col">
        <div className="mb-2">
          <label
            htmlFor="customerName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Customer name
          </label>
          <input
            type="text"
            id="customerName"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none"
            placeholder="Enter customer name"
            required
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none"
            placeholder="Enter customer phone"
            required
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none"
            placeholder="Enter customer email"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="station"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Station
          </label>
          <div
            className="relative w-full "
            onClick={() => setShowStation(!showStation)}
          >
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#005893"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="station"
              className="bg-gray-50 border w-full cursor-pointer border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none"
              placeholder="Enter customer station"
              value={station}
              required
            />
          </div>
        </div>

        {showStation && (
          <ul className="w-full mb-5 float-right border border-gray-300 text-xs cursor-pointer mt-2 rounded-lg ml-2">
            {stations.map((station, index) => (
              <li
                key={index}
                className="p-2 border-b hover:bg-gray-300 dark:text-black"
                onClick={() => setStation(station)}
              >
                {station}
              </li>
            ))}
          </ul>
        )}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Location
          </label>
          <div
            className="relative w-full cursor-pointer"
            onClick={() => setShowLocation(!showLocation)}
          >
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#005893"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="location"
              className="bg-gray-50 border w-full cursor-pointer border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none"
              placeholder="Enter customer location"
              value={location}
              required
            />
          </div>
        </div>
        {showLocation && (
          <ul className="w-full mb-5 float-right border border-gray-300 text-xs cursor-pointer mt-2 rounded-lg ml-2">
            {locations.map((location, index) => (
              <li
                key={index}
                className="p-2 border-b hover:bg-gray-300 dark:text-black"
                onClick={() => setLocation(location)}
              >
                {location}
              </li>
            ))}
          </ul>
        )}

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

export default AddCustomer;
