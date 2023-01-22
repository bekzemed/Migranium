import deleteIcon from "../assets/delete.svg";
import edit from "../assets/edit.svg";

const LocationInput = ({ showLocation, setShowLocation, location }: any) => {
  return (
    <>
      <div className="mb-6 px-2">
        <div className="flex items-center justify-between mb-4">
          <span className="flex items-center">
            <span className="text-sm mr-5">{location}</span>
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
                <span className="text-xs mr-1">Show all information</span>
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

        <div
          className={`mb-4 ${
            !showLocation && "hidden"
          } grid grid-cols-1 lg:grid-cols-3`}
        >
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
      </div>
    </>
  );
};

export default LocationInput;
