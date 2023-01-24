import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  DashboardDesktop,
  DashboardMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";

const TeamMember = () => {
  const { state } = useLocation();

  const [show, onShow] = useState(false);

  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black mb-6">
        <span className="opacity-80 block mb-1 text-xs">Cashex</span>
        <span className="text-2xl block mb-4">Team Members - {state.name}</span>

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
                defaultValue={state.email}
                disabled
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
                defaultValue={state.phone}
                disabled
                required
              />
            </div>
          </div>

          <div className="text-xs py-8 border-b border-b-gray-300">
            <span className="block mb-3 text-sm">Current position</span>
            <div className="mb-4">
              <div className="flex justify-between mb-1 items-center">
                <span className="opacity-40">Job title</span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#fb2a2a"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <span>{state.job}</span>
            </div>
            <div className="flex flex-col mb-4">
              <div className="mb-4">
                <span className="block opacity-40 mb-2">Location</span>
                <span className="block">{state.location}</span>
              </div>
              <div className="mb-4">
                <span className="block opacity-40 mb-2">Station</span>
                <span className="block">{state.station}</span>
              </div>

              <div className="mb-4">
                <span className="block opacity-40 mb-2">Id</span>
                <span className="block">{state.id}</span>
              </div>

              <div className="mb-4">
                <span className="block opacity-40 mb-2">Role</span>
                <span className="block">{state.role}</span>
              </div>
            </div>
            <div className="flex items-center">
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
              <span className="text-primary text-xs">Add position</span>
            </div>
          </div>

          <div className="my-6">
            <span className="block text-sm mb-6">Work history</span>

            <table className="w-full mb-4">
              <thead>
                <tr className="dark:text-black text-xs">
                  <th className="pb-5 opacity-40 flex">Action</th>
                  <th className="pb-5 opacity-40">Service</th>
                  <th className="pb-5 opacity-40">Station</th>
                  <th className="pb-5 opacity-40">Date</th>
                </tr>
              </thead>
              <tbody className="text:black dark:text-black text-xs">
                <tr className="text-center py-4">
                  <td className="pb-4 flex">Closed client</td>
                  <td className="pb-4">Clinic</td>
                  <td className="pb-4">Station 1</td>
                  <td className="pb-4">November 1, 2022</td>
                </tr>
                <tr className="text-center py-4">
                  <td className="flex">Closed client</td>
                  <td>Clinic</td>
                  <td>Station 1</td>
                  <td>November 1, 2022</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
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
        <div className="flex justify-center">
          <button
            type="button"
            className=" p-2 text-xs font-medium text-center bg-secondary text-white  rounded-full focus-visible:outline-none focus:outline-none"
          >
            Save changes
          </button>
        </div>
      </div>

      <div className="text-xs w-screen block lg:hidden">
        <DashboardMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block">
          <Header text={`Team Members - ${state.name}`} />

          <div className="bg-white rounded-lg px-4 py-4 mb-10 text-xs">
            <div className="pb-8 border-b">
              <div className="flex justify-between items-center mb-4">
                <span className="block text-sm font-extrabold">
                  Personal info
                </span>
                <button
                  type="button"
                  className=" p-2 text-xs font-medium text-center bg-secondary text-white  rounded-full focus-visible:outline-none focus:outline-none"
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
                    defaultValue={state.email}
                    disabled
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
                    defaultValue={state.phone}
                    disabled
                    required
                  />
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-b-gray-300">
              <span className="block text-sm mb-6">Current Position</span>

              <table className="w-full mb-4">
                <thead>
                  <tr className="dark:text-black text-xs border-b border-gray-300">
                    <th className="pb-5 opacity-40 flex">Job title</th>
                    <th className="pb-5 opacity-40">Location</th>
                    <th className="pb-5 opacity-40">Station</th>
                    <th className="pb-5 opacity-40">Id</th>
                    <th className="pb-5 opacity-40">Role</th>
                    <th className="pb-5">
                      <div className="flex items-center justify-end">
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
                        <span className="text-primary text-xs">
                          Add position
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text:black dark:text-black text-xs">
                  <tr className="text-center py-4">
                    <td className="py-4 flex">{state.job}</td>
                    <td className="py-4">{state.location}</td>
                    <td className="py-4">{state.station}</td>
                    <td className="py-4">{state.id}</td>
                    <td className="py-4">{state.role}</td>
                    <td className="py-4">
                      <div className="flex items-center justify-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="#fb2a2a"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
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
                    <th className="pb-5 opacity-40 flex">Action</th>
                    <th className="pb-5 opacity-40">Service</th>
                    <th className="pb-5 opacity-40">Station</th>
                    <th className="pb-5 opacity-40">Date</th>
                  </tr>
                </thead>
                <tbody className="text:black dark:text-black text-xs">
                  <tr className="text-center py-4 border-b border-b-gray-300">
                    <td className="py-4">1</td>
                    <td className="py-4 flex">Closed client</td>
                    <td className="py-4">Clinic</td>
                    <td className="py-4">Station 1</td>
                    <td className="py-4">November 1, 2022</td>
                  </tr>
                  <tr className="text-center py-4">
                    <td className="py-4">2</td>
                    <td className="flex py-4">Closed client</td>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
