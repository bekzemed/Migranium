import { useLocation } from "react-router-dom";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import { useAppSelector } from "../redux/hooks";

const WaitListMember = () => {
  const { state } = useLocation();
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const textColor = useAppSelector((state) => state.theme.textColor);

  return (
    <div className="bg-primary flex-1 flex flex-col overflow-y-scroll h-full">
      <DashNav />

      <div className="px-2 pb-5 flex-1 overflow-y-scroll lg:hidden dark:text-black mb-6">
        <span className="opacity-80 block mb-1 text-xs">Profile info</span>
        <span className="text-2xl block mb-4">{state.name}</span>

        <div className="bg-white rounded-lg px-2 py-4 mb-10 text-xs">
          <div className="pb-8 border-b">
            <span className="block mb-3">Personal info</span>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                defaultValue={state.name}
                disabled
                required
              />

              <label
                htmlFor="email"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Enter email..."
                required
              />

              <label
                htmlFor="phone"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                placeholder="Enter phone..."
                required
              />
            </div>
          </div>

          <div className="py-4">
            <span className="block text-sm mb-6">Other info</span>
            <div className="mb-4">
              <label
                htmlFor="customField"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                Create custom field
              </label>
              <input
                type="text"
                id="customField"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Enter title of field..."
                required
              />

              <input
                type="text"
                id="customField"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                placeholder="Enter placeholder for field"
                required
              />
            </div>
            <div className="flex items-center ">
              {/* add */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                style={selected === 10 ? { fill: fill } : {}}
                className={`w-5 h-5 mr-2 ${
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

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col">
          <div className="flex-1">
            <Header text={state.name} header="Profile info" />

            <div className="bg-white rounded-lg px-4 py-4 mb-10 text-xs dark:text-black">
              <div className="pb-8 border-b">
                <div className="flex justify-between items-center mb-4">
                  <span className="block text-sm font-extrabold">
                    Personal info
                  </span>
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
                <div className="flex items-center">
                  <div className="mr-5 w-[200px]">
                    <label
                      htmlFor="name"
                      className="block text-xs mb-1 font-medium text-gray-900 dark:text-black"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full py-2 px-3 focus-visible:outline-none focus:outline-none"
                      defaultValue={state.name}
                      disabled
                      required
                    />
                  </div>

                  <div className="mr-5 w-[200px]">
                    <label
                      htmlFor="email"
                      className="block text-xs mb-1 font-medium text-gray-900 dark:text-black"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full py-2 px-3 focus-visible:outline-none focus:outline-none"
                      placeholder="Enter email..."
                      required
                    />
                  </div>

                  <div className="w-[200px]">
                    <label
                      htmlFor="phone"
                      className="block text-xs mb-1 font-medium text-gray-900 dark:text-black"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full py-2 px-3 focus-visible:outline-none focus:outline-none"
                      placeholder="Enter phone..."
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="py-6 border-b border-b-gray-300">
                <span className="block text-sm mb-6">Current Status</span>

                <table className="w-full mb-4">
                  <thead>
                    <tr className="dark:text-black text-xs border-b border-gray-300">
                      <th className="pb-5 opacity-40 flex">Waiting in queue</th>
                    </tr>
                  </thead>
                  <tbody className="text:black dark:text-black text-xs">
                    <tr className="text-center py-4">
                      <td className="py-4 flex">Cashex</td>
                      <td className="py-4">
                        Washington, District of Columbia, US
                      </td>
                      <td className="py-4">November 1, 2022, 08:21pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="py-10 border-b border-b-gray-300">
                <span className="block text-sm mb-6">Work history</span>

                <table className="w-full mb-4">
                  <thead>
                    <tr className="dark:text-black text-xs border-b border-b-gray-300">
                      <th className="pb-5"></th>
                      <th className="pb-5 opacity-40 flex">Location</th>
                      <th className="pb-5 opacity-40">Service</th>
                      <th className="pb-5 opacity-40">Station</th>
                      <th className="pb-5 opacity-40">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text:black dark:text-black text-xs">
                    <tr className="text-center py-4 border-b border-b-gray-300">
                      <td className="py-4">1</td>
                      <td className="py-4 flex">Cashex</td>
                      <td className="py-4">Clinic</td>
                      <td className="py-4">Station 1</td>
                      <td className="py-4">November 1, 2022</td>
                    </tr>
                    <tr className="text-center py-4">
                      <td className="py-4">2</td>
                      <td className="flex py-4">Cashex</td>
                      <td className="py-4">Clinic</td>
                      <td className="py-4">Station 1</td>
                      <td className="py-4">November 1, 2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="py-10">
                <span className="block text-sm mb-6">Other info</span>
                <div className="mb-4">
                  <label
                    htmlFor="customField"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                  >
                    Create custom field
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="customField"
                      className="bg-gray-50 border w-[200px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                      placeholder="Enter title of field..."
                      required
                    />

                    <input
                      type="text"
                      id="customField"
                      className="bg-gray-50 border w-[200px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                      placeholder="Enter placeholder for field"
                      required
                    />

                    <div className="flex items-center">
                      {/* add */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        style={selected === 10 ? { fill: fill } : {}}
                        className={`w-5 h-5 mr-2 ${
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
            </div>
          </div>
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default WaitListMember;
