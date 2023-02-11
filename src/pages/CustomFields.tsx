import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import WaitlistButtons from "../components/WaitlistButtons";
import { useAppSelector } from "../redux/hooks";

const CustomFields = () => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const textColor = useAppSelector((state) => state.theme.textColor);
  return (
    <div className="bg-primary flex flex-col overflow-y-scroll h-full">
      <DashNav />

      <div className="px-2 pb-5 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black">
        <div className="flex-1">
          <span className="opacity-80 block mb-1 text-xs">Cashex</span>
          <span className="text-2xl block mb-4">Custom fields</span>
          <WaitlistButtons />
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
                <div className="flex items-center cursor-pointer text-xs">
                  {/* add */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    style={selected === 10 ? { fill: fill } : {}}
                    className={`w-[25px] ${
                      fill === "fill-theme0" || fill === "fill-theme1"
                        ? "fill-black"
                        : fill
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span
                    style={selected === 10 ? { color: textColor } : {}}
                    className={`${
                      textColor === "text-theme0" || textColor === "text-theme1"
                        ? "text-black"
                        : textColor
                    }`}
                  >
                    Add field
                  </span>
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

                  {/* edit */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={selected === 10 ? { fill: fill } : {}}
                    className={`w-5 h-5 mr-2 ${
                      fill === "fill-theme0" || fill === "fill-theme1"
                        ? "fill-black"
                        : fill
                    }`}
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                  </svg>
                  {/* delete */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={selected === 10 ? { fill: fill } : {}}
                    className={`w-5 h-5 ${
                      fill === "fill-theme0" || fill === "fill-theme1"
                        ? "fill-black"
                        : fill
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
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

                  {/* edit */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={selected === 10 ? { fill: fill } : {}}
                    className={`w-5 h-5 mr-2 ${
                      fill === "fill-theme0" || fill === "fill-theme1"
                        ? "fill-black"
                        : fill
                    }`}
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                  </svg>
                  {/* delete */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={selected === 10 ? { fill: fill } : {}}
                    className={`w-5 h-5 ${
                      fill === "fill-theme0" || fill === "fill-theme1"
                        ? "fill-black"
                        : fill
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
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

                  {/* edit */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={selected === 10 ? { fill: fill } : {}}
                    className={`w-5 h-5 mr-2 ${
                      fill === "fill-theme0" || fill === "fill-theme1"
                        ? "fill-black"
                        : fill
                    }`}
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                  </svg>
                  {/* delete */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={selected === 10 ? { fill: fill } : {}}
                    className={`w-5 h-5 ${
                      fill === "fill-theme0" || fill === "fill-theme1"
                        ? "fill-black"
                        : fill
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
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

                  {/* edit */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={selected === 10 ? { fill: fill } : {}}
                    className={`w-5 h-5 mr-2 ${
                      fill === "fill-theme0" || fill === "fill-theme1"
                        ? "fill-black"
                        : fill
                    }`}
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                  </svg>
                  {/* delete */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={selected === 10 ? { fill: fill } : {}}
                    className={`w-5 h-5 ${
                      fill === "fill-theme0" || fill === "fill-theme1"
                        ? "fill-black"
                        : fill
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
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
            <WaitlistButtons />

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
                    <div className="flex items-center cursor-pointer text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        style={selected === 10 ? { fill: fill } : {}}
                        className={`w-[25px] ${
                          fill === "fill-theme0" || fill === "fill-theme1"
                            ? "fill-black"
                            : fill
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span
                        style={selected === 10 ? { color: textColor } : {}}
                        className={`${
                          textColor === "text-theme0" ||
                          textColor === "text-theme1"
                            ? "text-black"
                            : textColor
                        }`}
                      >
                        Add field
                      </span>
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

                        {/* edit */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 mr-2 cursor-pointer ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                        {/* delete */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 cursor-pointer ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
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

                        {/* edit */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 mr-2 cursor-pointer ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                        {/* delete */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 cursor-pointer ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
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

                        {/* edit */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 mr-2 cursor-pointer ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                        {/* delete */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 cursor-pointer ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
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

                        {/* edit */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 mr-2 cursor-pointer ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                        {/* delete */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 cursor-pointer ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
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
