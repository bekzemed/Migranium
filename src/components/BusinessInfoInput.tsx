import { useState } from "react";
const BusinessCountries = ["Ethiopia", "Canada"];
const BusinessStates = ["Addis Ababa", "Toronto"];
const BusinessCities = ["Harar", "Ottawa"];

const BusinessInfoInput = () => {
  const [showBusinessCountry, setShowBusinessCountry] = useState(false);
  const [businessCountry, setBusinessCountry] = useState("");

  const [showBusinessState, setShowBusinessState] = useState(false);
  const [businessState, setBusinessState] = useState("");

  const [showBusinessCity, setShowBusinessCity] = useState(false);
  const [businessCity, setBusinessCity] = useState("");

  return (
    <div className="mb-6 grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:mr-3">
        <label
          htmlFor="businessCountry"
          className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
        >
          Business country
        </label>

        <div
          className="relative w-full cursor-pointer mb-4"
          onClick={() => setShowBusinessCountry(!showBusinessCountry)}
        >
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
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
            id="businessCountry"
            className="bg-primary border cursor-pointer border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
            placeholder="Select country"
            value={businessCountry}
            required
          />
        </div>

        {showBusinessCountry && (
          <ul className="w-full mb-5 float-right border border-gray-300 text-xs cursor-pointer bg-primary rounded-lg">
            {BusinessCountries.map((country) => (
              <li
                className="p-2 border-b hover:bg-gray-300 dark:text-black"
                onClick={() => setBusinessCountry(country)}
              >
                {country}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="lg:mr-3">
        <label
          htmlFor="businessState"
          className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
        >
          Business state / province
        </label>

        <div
          className="relative w-full cursor-pointer mb-4"
          onClick={() => setShowBusinessState(!showBusinessState)}
        >
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
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
            id="businessState"
            className="bg-primary border cursor-pointer border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
            placeholder="Select business state / province"
            value={businessState}
            required
          />
        </div>

        {showBusinessState && (
          <ul className="w-full mb-5 float-right border border-gray-300 text-xs cursor-pointer bg-primary rounded-lg">
            {BusinessStates.map((state) => (
              <li
                className="p-2 border-b hover:bg-gray-300 dark:text-black"
                onClick={() => setBusinessState(state)}
              >
                {state}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label
          htmlFor="city"
          className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
        >
          City
        </label>
        {/* <input
          type="text"
          id="city"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
          placeholder="Enter business city..."
          required
        /> */}
        <div
          className="relative w-full cursor-pointer mb-4"
          onClick={() => setShowBusinessCity(!showBusinessCity)}
        >
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
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
            id="city"
            className="bg-primary border cursor-pointer border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
            placeholder="Enter business city..."
            value={businessCity}
            required
          />
        </div>

        {showBusinessCity && (
          <ul className="w-full mb-5 float-right border border-gray-300 text-xs cursor-pointer bg-primary rounded-lg">
            {BusinessCities.map((city) => (
              <li
                className="p-2 border-b hover:bg-gray-300 dark:text-black"
                onClick={() => setBusinessCity(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="lg:mr-3">
        <label
          htmlFor="streetAddress"
          className="block mb-2 text-xs lg:mr-2 font-medium text-gray-900 dark:text-black"
        >
          Street address
        </label>
        <div className="lg:flex">
          <input
            type="text"
            id="streetAddress"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
            placeholder="Street address..."
            required
          />
        </div>
      </div>

      <div className="lg:flex lg:mr-3">
        <div className="lg:flex lg:items-end lg:flex-1">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
            placeholder="Address line 2"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="zip"
          className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
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
