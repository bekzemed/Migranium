import React from "react";
import locationLogo from "../assets/location-upload.svg";

const LocationLogo = () => {
  return (
    <>
      <span className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
        Location logo
      </span>
      <div className="flex items-center">
        <img src={locationLogo} alt="Location logo" className="mr-4" />
        <button
          type="button"
          className="bg-secondary text-white rounded-full text-xs focus-visible:outline-none focus:outline-none"
        >
          Browse
        </button>
      </div>
    </>
  );
};

export default LocationLogo;
