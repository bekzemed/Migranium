import { useState } from "react";
import {
  DashboardDesktop,
  DashboardMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";

const Dashboard = () => {
  const [show, onShow] = useState(false);
  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black">
        <span className="opacity-80 block mb-1 text-xs">Cashex</span>
        <span className="text-2xl block mb-4">Locations</span>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-2 pl-10 text-sm rounded-full text-gray-900 border border-gray-300 bg-white dark:text-black focus-visible:outline-none focus:outline-none"
            placeholder="Search..."
            required
          />
        </div>

        <div className="bg-white rounded-lg px-2 py-4 mb-6">
          <span className="block text-center text-xs pb-4">
            No locations yet
          </span>
          <hr className="pb-4" />
        </div>

        <div className="flex justify-center items-center mb-6">
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
          <span className="text-primary text-xs">Add location</span>
        </div>
      </div>

      <div className="text-xs w-screen block lg:hidden">
        <DashboardMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block">
          <Header text="Locations" />

          <div className="mb-10 flex items-center justify-between">
            <div className="relative w-[300px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-2 pl-10 text-xs rounded-full text-gray-900 border border-gray-300 bg-white dark:text-black focus-visible:outline-none focus:outline-none"
                placeholder="Search..."
                required
              />
            </div>

            <button
              type="button"
              className="text-white border-slate-300 flex items-center justify-center text-xs  bg-secondary focus:outline-none  font-medium rounded-full px-5 py-2 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                  clipRule="evenodd"
                />
              </svg>
              Add location
            </button>
          </div>

          <div className="bg-white rounded-lg px-2 py-4 mb-6 dark:text-black">
            <span className="block text-center text-xs pb-4">
              No locations yet
            </span>
            <hr className="pb-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
