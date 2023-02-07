import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import AddCustomFields from "./AddCustomFields";
import OperatingHours from "./OperatingHours";
import TimePicker from "./TimePicker";
import Datepicker from "tailwind-datepicker-react";
import { options } from "../util/operatingHours";

const AddLocationComponent = () => {
  const navigate = useNavigate();
  const [addCustomFields, setAddCustomFields] = useState(false);
  const [dateMultipleHours, setDateMultipleHours] = useState(false);

  const handleMultipleDateHours = (selectedDate: Date) =>
    console.log(selectedDate);
  const handleMultipleDateHoursClose = (state: boolean) =>
    setDateMultipleHours(state);
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);

  return (
    <>
      {addCustomFields && (
        <AddCustomFields
          addCustomFields={AddCustomFields}
          setAddCustomFields={setAddCustomFields}
        />
      )}
      <div
        className={`bg-white rounded-lg py-4 mb-4 px-2 lg:px-4 dark:text-black ${
          addCustomFields && "filter blur-sm"
        }`}
      >
        <div className="lg:flex justify-between items-center">
          <span className="block text-base pb-5">Location</span>

          <div className="hidden lg:flex items-center">
            <button
              style={selected === 10 ? { backgroundColor: theme } : {}}
              type="button"
              className={`p-2 mr-3 text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              }`}
            >
              Save changes
            </button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="pb-6 lg:flex border-b border-b-gray-300">
          <div className="lg:w-[250px] lg:mr-3">
            <label
              htmlFor="locationName"
              className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
            >
              Location name
            </label>
            <input
              type="text"
              id="locationName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
              placeholder="Cashex"
              required
            />
          </div>

          <div className="lg:w-[250px]">
            <label
              htmlFor="locationURL"
              className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
            >
              Location URL and ID
            </label>
            <input
              type="text"
              id="locationURL"
              className="bg-gray-50 border border-gray-300 placeholder:text-bright text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
              placeholder="migranium.com/welcome/cashex"
              required
            />
          </div>
        </div>

        <div className="py-4 lg:py-6 border-b border-b-gray-300">
          <span className="block text-base pb-5">Team member</span>

          <div>
            <div className="lg:flex">
              <div className="lg:w-[250px] lg:mr-3 mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                  placeholder="Enter name"
                  required
                />
              </div>

              <div className="lg:w-[250px] lg:mr-3 mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="lg:w-[250px] mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className="lg:flex">
              <div className="lg:w-[250px] lg:mr-3 mb-4 lg:mb-0">
                <label
                  htmlFor="station"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Station
                </label>
                <input
                  type="text"
                  id="station"
                  className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                  placeholder="Enter station"
                  required
                />
              </div>

              <div className="lg:w-[250px] lg:mr-3 mb-4 lg:mb-0">
                <label
                  htmlFor="jobTitle"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Job title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                  placeholder="Enter job title"
                  required
                />
              </div>
              <div className="lg:w-[250px] mb-4 lg:mb-0">
                <label
                  htmlFor="role"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                  placeholder="Enter role"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 lg:py-6 border-b border-b-gray-300">
          <span className="block text-base pb-5">Address</span>

          <div>
            <div className="lg:flex">
              <div className="lg:w-[250px] lg:mr-3">
                <label
                  htmlFor="Country"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  country
                </label>
                <input
                  type="text"
                  id="Country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Select country"
                  required
                />
              </div>

              <div className="lg:w-[250px] lg:mr-3">
                <label
                  htmlFor="State"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  State / province
                </label>
                <input
                  type="text"
                  id="State"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Select  state / province"
                  required
                />
              </div>

              <div className="lg:w-[250px]">
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
                  placeholder="Enter  city"
                  required
                />
              </div>
            </div>

            <div className="lg:flex">
              <div className="lg:mr-3">
                <label
                  htmlFor="streetAddress"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Street address
                </label>

                <div className="lg:flex">
                  <input
                    type="text"
                    id="streetAddress"
                    className="bg-gray-50 border lg:w-[250px] border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4 lg:mr-3"
                    placeholder="Street address"
                    required
                  />
                  <input
                    type="text"
                    id="streetAddress"
                    className="bg-gray-50 border lg:w-[250px] border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Address line 2"
                    required
                  />
                </div>
              </div>

              <div className="lg:w-[250px]">
                <label
                  htmlFor="numberOfRooms"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Zip / Postal code
                </label>
                <input
                  type="text"
                  id="numberOfRooms"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Zip / Postal code"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 lg:py-6 border-b border-b-gray-300">
          <span className="block mb-6">Set the operating days</span>
          <OperatingHours />
          <span className="text-xs lg:text-sm flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={selected === 10 ? { fill: fill } : {}}
              className={`w-6 h-6 ${
                fill === "fill-theme0" || fill === "fill-theme1"
                  ? "fill-black"
                  : fill
              } cursor-pointer`}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-primary">
              Add the day with multiple hours
            </span>
          </span>

          <div className="mt-6 text-xs lg:flex lg:flex-row-reverse lg:justify-end items-center">
            <div className="mb-5 lg:mb-0">
              <span className="block mb-4">
                Set the day with multiple hours
              </span>
              <div className="w-1/2 lg:w-max">
                <Datepicker
                  options={options}
                  onChange={handleMultipleDateHours}
                  show={dateMultipleHours}
                  setShow={handleMultipleDateHoursClose}
                />
              </div>
            </div>
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
          </div>
        </div>

        <div className="py-4 lg:py-6 border-b border-b-gray-300">
          <span className="block mb-6">Approximate wait time</span>
          <div className="text-xs">
            <TimePicker text="Set approximate wait time in hours" />
          </div>
        </div>

        <div className="py-4 lg:py-6">
          <div className="pb-5 flex justify-between items-center">
            <span className="block text-base">Custom Fields</span>
            <div
              className={`flex justify-center items-center rounded-full px-3 py-2 focus-visible:outline-none focus:outline-none ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              }`}
              onClick={() => setAddCustomFields(true)}
              style={selected === 10 ? { backgroundColor: theme } : {}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#fff"
                className="w-5 h-5"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>

              <span className="text-white cursor-pointer text-xs">
                Add custom fields
              </span>
            </div>
          </div>

          <div>
            <div className="lg:flex">
              <div className="lg:w-[250px] lg:mr-3">
                <label
                  htmlFor="postalCode"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Postal code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter postal code"
                  required
                />
              </div>

              <div className="lg:w-[250px] lg:mr-3">
                <label
                  htmlFor="phone number"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="lg:w-[250px]">
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
                  placeholder="Enter city"
                  required
                />
              </div>
            </div>

            <div className="lg:flex">
              <div className="lg:w-[250px]">
                <label
                  htmlFor="country"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter country"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:hidden">
          <button
            style={selected === 10 ? { backgroundColor: theme } : {}}
            type="button"
            className={`p-2 text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
              theme === "bg-theme0" || theme === "bg-theme1"
                ? "bg-black"
                : theme
            }`}
          >
            Save changes
          </button>
        </div>
      </div>
    </>
  );
};

export default AddLocationComponent;
