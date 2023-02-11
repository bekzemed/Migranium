import { useState } from "react";
import downArrow from "../assets/down.svg";
import exportIcon from "../assets/export.svg";
import filter from "../assets/filter.svg";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";

const Customers = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [customer1, setCustomer1] = useState(false);
  const [customer2, setCustomer2] = useState(false);

  return (
    <div
      className={`bg-primary flex-1 flex flex-col h-full ${
        showNotification && "bg-[#00000005]"
      } overflow-y-scroll`}
    >
      <DashNav
        showNotification={showNotification}
        setShowNotification={setShowNotification}
        notification={true}
      />

      <div
        className={`px-2 pb-5 flex-1 flex flex-col overflow-y-scroll lg:hidden dark:text-black ${
          showNotification && "background-notification dark:bg-primary"
        }`}
      >
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <span className="opacity-80 block mb-1 text-xs">Cashex</span>
              <span className="text-2xl block mb-4">Customers</span>
            </div>
            <div className="dark:text-black text-sm flex">
              <div className="p-2 rounded-full border border-gray-300 bg-white flex items-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>
              <div className="p-2 rounded-full border border-gray-300 bg-white flex items-center">
                <img src={filter} alt="Down arrow" />
              </div>
            </div>
          </div>

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
            className={`${
              showNotification
                ? "background-notification dark:bg-primary"
                : "bg-white"
            } rounded-lg px-2 py-4 flex flex-col ${
              (customer1 || customer2) && "h-[45vh] overflow-y-scroll"
            }`}
          >
            <div className="pb-4">
              <div className="mb-4 flex justify-between items-center">
                <span className="block">Arlene McCoy</span>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setCustomer1(!customer1)}
                >
                  {customer1 ? (
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
                      <span className="text-xs mr-1">Show all</span>
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

              {customer1 && (
                <div>
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
                </div>
              )}
              <hr />
            </div>

            <div>
              <div className="mb-4 flex justify-between items-center">
                <span className="block">Cody Fisher</span>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setCustomer2(!customer2)}
                >
                  {customer2 ? (
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
                      <span className="text-xs mr-1">Show all</span>
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

              {customer2 && (
                <div>
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
              )}
            </div>
          </div>
        </div>

        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div
          className={`lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col ${
            showNotification && "bg-primary"
          }`}
        >
          <div className="flex-1">
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

          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default Customers;
