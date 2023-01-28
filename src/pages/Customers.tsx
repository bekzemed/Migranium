import { useState } from "react";
import {
  DashboardDesktop,
  DashboardMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import downArrow from "../assets/down.svg";
import exportIcon from "../assets/export.svg";

const Customers = () => {
  const [show, onShow] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div
      className={`bg-primary h-screen flex flex-col ${
        showNotification && "bg-[#00000005]"
      }`}
    >
      <DashNav
        showNotification={showNotification}
        setShowNotification={setShowNotification}
        notification={true}
        show={show}
        onDone={() => onShow(!show)}
      />

      <div
        className={`px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black ${
          showNotification && "background-notification dark:bg-primary"
        }`}
      >
        <span className="opacity-80 block mb-1 text-xs">Cashex</span>
        <span className="text-2xl block mb-4">Customers</span>

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

        <div
          className={` ${
            showNotification
              ? "background-notification dark:bg-primary"
              : "bg-white"
          } rounded-lg px-2 py-4 flex flex-col mb-6`}
        >
          <div className="pb-4">
            <span className="block mb-4">Arlene McCoy</span>
            <div className="pb-4 text-sm">
              <span className="opacity-40 block pb-2">Email</span>
              <span>arlene@mailforspam.com</span>
            </div>

            <div className="pb-4 text-sm">
              <span className="opacity-40 block pb-2">Phone number</span>
              <span>+ 1 (239) 555-0108</span>
            </div>

            <div className="pb-4 text-sm">
              <span className="opacity-40 block pb-2">Location</span>
              <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            </div>

            <div className="pb-4 text-sm">
              <span className="opacity-40 block pb-2">Last acive:</span>
              <span>October 21, 2022, 01:46pm</span>
            </div>
            <hr />
          </div>

          <div>
            <span className="block mb-4">Cody Fisher</span>
            <div className="pb-4 text-sm">
              <span className="opacity-40 block pb-2">Email</span>
              <span>cody@mailforspam.com</span>
            </div>

            <div className="pb-4 text-sm">
              <span className="opacity-40 block pb-2">Phone number</span>
              <span>+ 1 (217) 555-0113</span>
            </div>

            <div className="pb-4 text-sm">
              <span className="opacity-40 block pb-2">Location</span>
              <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
            </div>

            <div className="pb-4 text-sm">
              <span className="opacity-40 block pb-2">Last acive:</span>
              <span>October 19, 2022, 09:46pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs w-screen block lg:hidden">
        <DashboardMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div
          className={`lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block ${
            showNotification && "bg-primary"
          }`}
        >
          <Header
            showNotification={showNotification}
            setShowNotification={setShowNotification}
            text="Customers"
            onNotificationShow={true}
          />

          <div className="mb-10 flex items-center justify-between">
            <div className="flex text-xs justify-between">
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
                  className="block w-full p-2 pl-10 text-sm rounded-full text-gray-900 border border-gray-300 bg-white dark:text-black focus-visible:outline-none focus:outline-none"
                  placeholder="Search..."
                  required
                />
              </div>
            </div>

            <div className="dark:text-black text-sm flex">
              <div className="px-6 py-1 text-xs cursor-pointer rounded-full border border-gray-300 bg-white flex items-center mr-3">
                <span className="mr-2">Today</span>
                <img src={downArrow} alt="Down arrow" />
              </div>
              <div className="px-6 py-1 text-xs cursor-pointer rounded-full border border-gray-300 bg-white flex items-center">
                <img src={exportIcon} alt="Export" className="mr-2" />
                <span>Export</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg px-2 py-4">
            <table className="w-full mb-4">
              <thead>
                <tr className="opacity-40 dark:text-black text-xs border-b border-gray-300">
                  <th className="pb-5">Name</th>
                  <th className="pb-5">Email</th>
                  <th className="pb-5">Phone number</th>
                  <th className="pb-5">Location</th>
                  <th className="pb-5">Last active</th>
                </tr>
              </thead>
              <tbody className="text:black dark:text-black text-xs">
                <tr className="text-center border-b border-gray-300">
                  <td className="py-4">Arlene McCoy</td>
                  <td className="py-4">arlene@mailforspam.com</td>
                  <td className="py-4">+ 1 (239) 555-0108</td>
                  <td className="py-4">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </td>
                  <td className="py-4">October 21, 2022, 01:46pm</td>
                </tr>
                <tr className="text-center ">
                  <td className="py-4">Cody Fisher</td>
                  <td className="py-4">cody@mailforspam.com</td>
                  <td className="py-4">+ 1 (217) 555-0113</td>
                  <td className="py-4">
                    2464 Royal Ln. Mesa, New Jersey 45463
                  </td>
                  <td className="py-4">October 19, 2022, 09:46pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
