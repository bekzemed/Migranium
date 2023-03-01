import { useAppSelector } from "../redux/hooks";

const AddBillingMethod = ({ showAddBilling, setShowAddBilling }: any) => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  return (
    <div className="bg-white rounded-lg p-4 absolute left-1/2 top-1/2 center-absolute dark:text-black w-[350px] h-[500px] z-30 shadow-lg flex flex-col overflow-y-scroll">
      <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
        <span>Add a Billing Method</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowAddBilling(!showAddBilling)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="pt-4 dark:text-black">
        <div className="bg-white rounded-lg py-2 text-xs">
          <div className="pb-8">
            <div>
              <label
                htmlFor="creditOrDebit"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                Card number
              </label>
              <input
                type="text"
                id="creditOrDebit"
                className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="card number"
                required
              />

              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 font-medium text-gray-900 dark:text-black"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 font-medium text-gray-900 dark:text-black"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="expiresOn"
                  className="block mb-2 font-medium text-gray-900 dark:text-black"
                >
                  Expires on
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    id="expiresOn"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4 mr-2"
                    placeholder="MM"
                    required
                  />
                  <input
                    type="text"
                    id="expiresOn"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="YY"
                    required
                  />
                </div>
              </div>

              <label
                htmlFor="securityCode"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                Security code
              </label>

              <input
                type="text"
                id="securityCode"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                required
              />
              <p className="text-sm mb-4">Billing Address</p>

              <label
                htmlFor="country"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Enter country"
                required
              />
              <label
                htmlFor="addressLine1"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                Address line 1
              </label>
              <input
                type="text"
                id="addressLine1"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Enter address line 1"
                required
              />
              <label
                htmlFor="addressLine2"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                Address line 2 (optional)
              </label>
              <input
                type="text"
                id="addressLine2"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Enter address line 2"
                required
              />
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 font-medium text-gray-900 dark:text-black"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block mb-2 font-medium text-gray-900 dark:text-black"
                  >
                    State/Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Enter state"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="postalCode"
                    className="block mb-2 font-medium text-gray-900 dark:text-black"
                  >
                    Postal code (e.g A1A 1A1)
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Enter postal code"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
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
    </div>
  );
};

export default AddBillingMethod;
