import deleteIcon from "../assets/delete.svg";
import edit from "../assets/edit.svg";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import { useAppSelector } from "../redux/hooks";

const CustomFields = () => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  return (
    <div className="bg-primary h-screen flex flex-col overflow-y-scroll">
      <DashNav />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black">
        <div className="flex-1">
          <span className="opacity-80 block mb-1 text-xs">Cashex</span>
          <span className="text-2xl block mb-4">Custom fields</span>
          <div className="bg-white rounded-lg px-2 py-4 mb-4">
            <div className="pb-6 border-b border-b-gray-300">
              <span className="block text-base mb-6">Add new field</span>
              <div className="mb-4">
                <label
                  htmlFor="postalCode"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Create custom field
                </label>
                <input
                  type="text"
                  id="postalCode"
                  className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mb-2"
                  placeholder="Enter title of field..."
                  required
                />
                <input
                  type="text"
                  id="postalCode"
                  className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mb-2"
                  placeholder="Enter placeholder for field..."
                  required
                />
                <div className="flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#0070BA"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-primary text-xs">Add field</span>
                </div>
              </div>
            </div>
            <div className="py-6 ">
              <span className="block text-base mb-6 dark:text-black">
                List of fields
              </span>
              <div className="mb-4">
                <label
                  htmlFor="postalCode"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Postal code
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="postalCode"
                    className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                    placeholder="Enter postal code..."
                    required
                  />

                  <img src={edit} alt="Edit" className="mr-2" />
                  <img src={deleteIcon} alt="Delete" />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Phone number
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="phoneNumber"
                    className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                    placeholder="Enter phone number..."
                    required
                  />

                  <img src={edit} alt="Edit" className="mr-2" />
                  <img src={deleteIcon} alt="Delete" />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  City
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="city"
                    className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                    placeholder="Enter city..."
                    required
                  />

                  <img src={edit} alt="Edit" className="mr-2" />
                  <img src={deleteIcon} alt="Delete" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Country
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="country"
                    className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                    placeholder="Enter country..."
                    required
                  />

                  <img src={edit} alt="Edit" className="mr-2" />
                  <img src={deleteIcon} alt="Delete" />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                style={selected === 10 ? { backgroundColor: theme } : {}}
                className={`text-xs text-white rounded-full focus-visible:outline-none focus:outline-none mr-3 ${
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

        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col">
          <div className="flex-1">
            <Header text="Custom fields" />

            <div className="bg-white rounded-lg px-4 py-4 mb-4 dark:text-black">
              <div className="pb-10 border-b border-b-gray-300">
                <span className="block text-base mb-6">Add new field</span>
                <div className="mb-4">
                  <label
                    htmlFor="postalCode"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                  >
                    Create custom field
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="postalCode"
                      className="bg-gray-50 border w-[250px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                      placeholder="Enter title of field..."
                      required
                    />
                    <input
                      type="text"
                      id="postalCode"
                      className="bg-gray-50 border w-[250px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                      placeholder="Enter placeholder for field..."
                      required
                    />
                    <div className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#0070BA"
                        className="w-6 h-6 mr-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-primary text-xs">Add field</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-6">
                <div className="flex items-center justify-between">
                  <span className="block text-base mb-6">List of fields</span>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      style={selected === 10 ? { backgroundColor: theme } : {}}
                      className={`text-xs text-white rounded-full focus-visible:outline-none focus:outline-none mr-3 ${
                        theme === "bg-theme0" || theme === "bg-theme1"
                          ? "bg-black"
                          : theme
                      }`}
                    >
                      Save changes
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <div className="mr-3">
                      <label
                        htmlFor="postalCode"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Postal code
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          id="postalCode"
                          className="bg-gray-50 border w-[250px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                          placeholder="Enter postal code..."
                          required
                        />

                        <img src={edit} alt="Edit" className="mr-2" />
                        <img src={deleteIcon} alt="Delete" />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Phone number
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          id="phoneNumber"
                          className="bg-gray-50 border w-[250px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                          placeholder="Enter phone number..."
                          required
                        />

                        <img src={edit} alt="Edit" className="mr-2" />
                        <img src={deleteIcon} alt="Delete" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <label
                        htmlFor="city"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        City
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          id="city"
                          className="bg-gray-50 border w-[250px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                          placeholder="Enter city..."
                          required
                        />

                        <img src={edit} alt="Edit" className="mr-2" />
                        <img src={deleteIcon} alt="Delete" />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Country
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          id="country"
                          className="bg-gray-50 border w-[250px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                          placeholder="Enter country..."
                          required
                        />

                        <img src={edit} alt="Edit" className="mr-2" />
                        <img src={deleteIcon} alt="Delete" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default CustomFields;
