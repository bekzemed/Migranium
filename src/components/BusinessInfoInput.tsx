import React from "react";

const BusinessInfoInput = () => {
  return (
    <div className="mb-6 px-2 grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:mr-3">
        <label
          htmlFor="businessCountry"
          className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
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
          htmlFor="businessState"
          className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
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

      <div>
        <label
          htmlFor="city"
          className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
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

      <div className="lg:mr-3">
        <label
          htmlFor="streetAddress"
          className="block mb-2 text-xs lg:mr-2 font-medium text-gray-900 dark:text-white"
        >
          Street address
        </label>
        <div className="lg:flex ">
          <input
            type="text"
            id="streetAddress"
            className="bg-gray-50 border border-gray-300 text-gray-900 lg:mr-3 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
            placeholder="Street address..."
            required
          />
          <input
            type="text"
            id="streetAddress"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
            placeholder="Address line 2"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="zip"
          className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
        >
          Zip / Postal code
        </label>
        <input
          type="text"
          id="zip"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
          placeholder="Zip / Postal code..."
          required
        />
      </div>
    </div>
  );
};

export default BusinessInfoInput;
