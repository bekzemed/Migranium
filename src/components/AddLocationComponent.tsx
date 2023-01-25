import React from "react";
import LocationLogo from "./LocationLogo";

const AddLocationComponent = () => {
  return (
    <div className="bg-white rounded-lg py-4 mb-4 px-2 dark:text-black">
      <div className="lg:flex justify-between items-center">
        <span className="block text-sm pb-5 px-2">Location</span>
        <button
          type="button"
          className="bg-secondary hidden lg:block text-white rounded-full focus-visible:outline-none focus:outline-none text-xs"
        >
          Save changes
        </button>
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
        <LocationLogo />
      </div>

      <div className="py-4 lg:py-6 px-2 border-b border-b-gray-300">
        <span className="block text-sm pb-5">Business Info</span>

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

      <div className="py-4 lg:py-6 px-2">
        <span className="block text-sm pb-5">Business Address</span>

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
      <div className="text-center lg:hidden">
        <button
          type="button"
          className="bg-secondary text-white rounded-full focus-visible:outline-none focus:outline-none text-xs"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default AddLocationComponent;
