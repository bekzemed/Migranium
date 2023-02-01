import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCustomFields from "./AddCustomFields";
import ProfileLogo from "./ProfileLogo";

const AddLocationComponent = () => {
  const navigate = useNavigate();
  const [addCustomFields, setAddCustomFields] = useState(false);

  return (
    <>
      {addCustomFields && (
        <AddCustomFields
          addCustomFields={AddCustomFields}
          setAddCustomFields={setAddCustomFields}
        />
      )}
      <div
        className={`bg-white rounded-lg py-4 mb-4 px-2 dark:text-black ${
          addCustomFields && "filter blur-sm"
        }`}
      >
        <div className="lg:flex justify-between items-center">
          <span className="block text-base pb-5 px-2">Location</span>

          <div className="hidden lg:flex items-center">
            <button
              type="button"
              className="bg-secondary text-xs text-white rounded-full focus-visible:outline-none focus:outline-none mr-3"
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
        <div className="mb-4 px-2 lg:flex">
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

        <div className="pb-4 lg:pb-10 px-2 border-b border-b-gray-300">
          <ProfileLogo />
        </div>

        <div className="py-4 lg:py-6 px-2 border-b border-b-gray-300">
          <span className="block text-base pb-5">Business Info</span>

          <div>
            <div className="lg:flex">
              <div className="lg:w-[250px] lg:mr-3">
                <label
                  htmlFor="businessName"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Business name
                </label>
                <input
                  type="text"
                  id="businessName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Cashex"
                  required
                />
              </div>

              <div className="lg:w-[250px] lg:mr-3">
                <label
                  htmlFor="businessType"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Business type
                </label>
                <input
                  type="text"
                  id="businessType"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Select business type"
                  required
                />
              </div>

              <div className="lg:w-[250px]">
                <label
                  htmlFor="businessEmail"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Business email
                </label>
                <input
                  type="text"
                  id="businessEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter business email"
                  required
                />
              </div>
            </div>

            <div className="lg:flex">
              <div className="lg:w-[250px] lg:mr-3">
                <label
                  htmlFor="businessPhone"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Business phone
                </label>
                <input
                  type="text"
                  id="businessPhone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter business phone"
                  required
                />
              </div>

              <div className="lg:w-[250px] lg:mr-3">
                <label
                  htmlFor="numberOfRooms"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Number of rooms
                </label>
                <input
                  type="text"
                  id="numberOfRooms"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter number of rooms"
                  required
                />
              </div>
              <div className="lg:w-[250px]">
                <label
                  htmlFor="numberOfStaff"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Number of staff
                </label>
                <input
                  type="text"
                  id="numberOfStaff"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter number of staff"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 lg:py-6 px-2 border-b border-b-gray-300">
          <span className="block text-base pb-5">Business Address</span>

          <div>
            <div className="lg:flex">
              <div className="lg:w-[250px] lg:mr-3">
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

              <div className="lg:w-[250px] lg:mr-3">
                <label
                  htmlFor="businessState"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Business state / province
                </label>
                <input
                  type="text"
                  id="businessState"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Select business state / province"
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
                  placeholder="Enter business city"
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

        <div className="py-4 lg:py-6 px-2">
          <div className="pb-5 flex justify-between items-center">
            <span className="block text-base">Custom Fields</span>
            <div
              className="flex justify-center items-center rounded-full bg-secondary px-3 py-2 focus-visible:outline-none focus:outline-none"
              onClick={() => setAddCustomFields(true)}
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
            type="button"
            className="bg-secondary text-white rounded-full focus-visible:outline-none focus:outline-none text-xs"
          >
            Save changes
          </button>
        </div>
      </div>
    </>
  );
};

export default AddLocationComponent;
