import { useState } from "react";
import { Link } from "react-router-dom";
import AddStation from "../components/AddStation";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import GenerateQRCode from "../components/GenerateQRCode";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import PoweredBy from "../components/PoweredBy";
import StationInfo from "../components/StationInfo";
import { useAppSelector } from "../redux/hooks";

const Dashboard = () => {
  const [locationStation, setLocationStation] = useState({
    location1: false,
    location2: false,
  });

  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const [addStation, setAddStation] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [acceptingCustomers, setAcceptingCustomers] = useState(false);
  const cashex = [1, 2];
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const textColor = useAppSelector((state) => state.theme.textColor);
  const switchColor = useAppSelector((state) => state.theme.switchColor);

  return (
    <div className="bg-primary flex-1 flex flex-col overflow-y-scroll h-full">
      <DashNav />

      {showLocationInfo && (
        <StationInfo
          showLocationInfo={showLocationInfo}
          setShowLocationInfo={setShowLocationInfo}
        />
      )}

      {showQRCode && (
        <GenerateQRCode showQRCode={showQRCode} setShowQRCode={setShowQRCode} />
      )}

      {addStation && (
        <AddStation addStation={addStation} setAddStation={setAddStation} />
      )}

      <div
        className={`px-2 pb-5 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black ${
          (showLocationInfo || addStation || showQRCode) && "filter blur-sm"
        }`}
      >
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <span className="opacity-80 block mb-1 text-xs">Cashex</span>
              <span className="text-2xl block mb-4">Locations</span>
            </div>

            <Link to="add-location">
              <div
                style={selected === 10 ? { backgroundColor: theme } : {}}
                className={`flex justify-center items-center rounded-full ${
                  theme === "bg-theme0" || theme === "bg-theme1"
                    ? "bg-black"
                    : theme
                } px-3 py-2 focus-visible:outline-none focus:outline-none`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  className="w-5 h-5"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>

                <span className="text-white cursor-pointer text-xs">
                  Add location
                </span>
              </div>
            </Link>
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

          <div className="mb-[12px] shadow-sm">
            {/* <div className="h-[50vh] mb-[12px] overflow-y-scroll shadow-sm"> */}
            {cashex.length ? (
              cashex.map((_, index) => (
                <div
                  className={`bg-white rounded-lg px-2 py-4 dark:text-black ${
                    index + 1 === cashex.length ? "mb-0" : "mb-5"
                  }`}
                  key={index}
                >
                  <div className="mb-6">
                    <div className="flex justify-between mb-4">
                      <span>Cashex</span>

                      <div className="flex items-center">
                        <div className="flex items-center mr-3">
                          <span className="mr-3 text-xs font-medium text-black whitespace-nowrap">
                            Accepting customers?
                          </span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              title=""
                              placeholder=""
                              className="sr-only peer"
                              onClick={() =>
                                setAcceptingCustomers(!acceptingCustomers)
                              }
                            />
                            <div
                              style={
                                selected === 10
                                  ? { backgroundColor: switchColor }
                                  : {}
                              }
                              className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                                switchColor === "peer-checked:bg-theme0" ||
                                theme === "peer-checked:bg-theme1"
                                  ? "peer-checked:bg-black"
                                  : switchColor
                              }`}
                            ></div>
                          </label>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-[25px] ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                          onClick={() => setShowLocationInfo(true)}
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-xs mb-2 opacity-50">
                      <div className="flex">
                        <span className="mr-1">Address:</span>
                        <span>Canada</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-4">
                        <span>Location stations</span>
                        <span
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            index === 0
                              ? setLocationStation({
                                  ...locationStation,
                                  location1: !locationStation.location1,
                                })
                              : setLocationStation({
                                  ...locationStation,
                                  location2: !locationStation.location2,
                                })
                          }
                        >
                          {index === 0 ? (
                            locationStation.location1 ? (
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
                            )
                          ) : locationStation.location2 ? (
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

                      {index === 0
                        ? locationStation.location1 && (
                            <div>
                              <div className="flex justify-between text-sm mb-4">
                                <span>Station 1</span>
                                <div className="flex items-center">
                                  <div className="flex items-center mr-3">
                                    <span className="mr-3 text-xs font-medium text-black whitespace-nowrap">
                                      Accepting customers?
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        title=""
                                        placeholder=""
                                        className="sr-only peer"
                                        onClick={() =>
                                          setAcceptingCustomers(
                                            !acceptingCustomers
                                          )
                                        }
                                      />
                                      <div
                                        style={
                                          selected === 10
                                            ? { backgroundColor: switchColor }
                                            : {}
                                        }
                                        className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                                          switchColor ===
                                            "peer-checked:bg-theme0" ||
                                          theme === "peer-checked:bg-theme1"
                                            ? "peer-checked:bg-black"
                                            : switchColor
                                        }`}
                                      ></div>
                                    </label>
                                  </div>
                                  {/* edit */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-5 h-5 mr-2 cursor-pointer ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
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
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-5 h-5 cursor-pointer ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
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

                              <div className="flex flex-col mb-5">
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Name of waitlist
                                  </span>
                                  <span className="text-sm">
                                    Cashex waitlist
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Waiting list
                                  </span>
                                  <span className="text-sm">
                                    7 people waiting
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Total waiting time
                                  </span>
                                  <span className="text-sm">
                                    6.9 hours waiting
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Last active:
                                  </span>
                                  <span className="text-sm">
                                    October 21, 2022, 08:21pm
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-xs opacity-40 mb-2">
                                    Team members:
                                  </span>
                                  <span className="text-sm">
                                    Savannah Niguyen, Jane Cooper, Guy Hawkins,
                                    Darrell Steward, Dianne Russell, Albert
                                    Flores
                                  </span>
                                </div>
                              </div>

                              <div className="flex text-sm mb-4">
                                <div className="flex items-center mr-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-[20px] ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
                                        ? "fill-black"
                                        : fill
                                    } mr-1`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z"
                                      clipRule="evenodd"
                                    />
                                  </svg>

                                  <span
                                    style={
                                      selected === 10
                                        ? { color: textColor }
                                        : {}
                                    }
                                    className={`${
                                      textColor === "text-theme0" ||
                                      textColor === "text-theme1"
                                        ? "text-black"
                                        : textColor
                                    }`}
                                  >
                                    Generate QR
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-[20px] ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
                                        ? "fill-black"
                                        : fill
                                    } mr-1`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                                      clipRule="evenodd"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                                      clipRule="evenodd"
                                    />
                                  </svg>

                                  <span
                                    style={
                                      selected === 10
                                        ? { color: textColor }
                                        : {}
                                    }
                                    className={`${
                                      textColor === "text-theme0" ||
                                      textColor === "text-theme1"
                                        ? "text-black"
                                        : textColor
                                    }`}
                                  >
                                    Copy the link
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        : locationStation.location2 && (
                            <div>
                              <div className="flex justify-between text-sm mb-4">
                                <span>Station 1</span>
                                <div className="flex items-center">
                                  <div className="flex items-center mr-3">
                                    <span className="mr-3 text-xs font-medium text-black whitespace-nowrap">
                                      Accepting customers?
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        title=""
                                        placeholder=""
                                        className="sr-only peer"
                                        onClick={() =>
                                          setAcceptingCustomers(
                                            !acceptingCustomers
                                          )
                                        }
                                      />
                                      <div
                                        style={
                                          selected === 10
                                            ? { backgroundColor: switchColor }
                                            : {}
                                        }
                                        className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                                          switchColor ===
                                            "peer-checked:bg-theme0" ||
                                          theme === "peer-checked:bg-theme1"
                                            ? "peer-checked:bg-black"
                                            : switchColor
                                        }`}
                                      ></div>
                                    </label>
                                  </div>
                                  {/* edit */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-5 h-5 mr-2 cursor-pointer ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
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
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-5 h-5 cursor-pointer ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
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

                              <div className="flex flex-col mb-5">
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Name of waitlist
                                  </span>
                                  <span className="text-sm">
                                    Cashex waitlist
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Waiting list
                                  </span>
                                  <span className="text-sm">
                                    7 people waiting
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Total waiting time
                                  </span>
                                  <span className="text-sm">
                                    6.9 hours waiting
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Last active:
                                  </span>
                                  <span className="text-sm">
                                    October 21, 2022, 08:21pm
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-xs opacity-40 mb-2">
                                    Team members:
                                  </span>
                                  <span className="text-sm">
                                    Savannah Niguyen, Jane Cooper, Guy Hawkins,
                                    Darrell Steward, Dianne Russell, Albert
                                    Flores
                                  </span>
                                </div>
                              </div>

                              <div className="flex text-sm mb-4">
                                <div className="flex items-center mr-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-[20px] ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
                                        ? "fill-black"
                                        : fill
                                    } mr-1`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z"
                                      clipRule="evenodd"
                                    />
                                  </svg>

                                  <span
                                    style={
                                      selected === 10
                                        ? { color: textColor }
                                        : {}
                                    }
                                    className={`${
                                      textColor === "text-theme0" ||
                                      textColor === "text-theme1"
                                        ? "text-black"
                                        : textColor
                                    }`}
                                  >
                                    Generate QR
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-[20px] ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
                                        ? "fill-black"
                                        : fill
                                    } mr-1`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                                      clipRule="evenodd"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                                      clipRule="evenodd"
                                    />
                                  </svg>

                                  <span
                                    style={
                                      selected === 10
                                        ? { color: textColor }
                                        : {}
                                    }
                                    className={`${
                                      textColor === "text-theme0" ||
                                      textColor === "text-theme1"
                                        ? "text-black"
                                        : textColor
                                    }`}
                                  >
                                    Copy the link
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                    </div>

                    <hr className="mb-4" />

                    <div className="mb-3">
                      <div className="text-xs opacity-40 mb-2">
                        <span className="pr-2 border-r-2">0 serving</span>
                        <span className="px-2 border-r-2">1 waiting</span>
                        <span className="pl-2">6.9 hours wait</span>
                      </div>
                      <div className="text-xs opacity-40">
                        <span>Last active: October 19, 2022, 09:46pm</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <div
                        className="flex items-center"
                        onClick={() => setShowQRCode(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-[20px] ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          } mr-1`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z"
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
                          Generate QR
                        </span>
                      </div>
                      <div
                        className="flex items-center"
                        onClick={() => setAddStation(true)}
                      >
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
                            textColor === "text-theme0" ||
                            textColor === "text-theme1"
                              ? "text-black"
                              : textColor
                          }`}
                        >
                          Add station
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg px-2 py-4 mb-6">
                <span className="block text-center text-xs pb-4">
                  No locations yet
                </span>
                <hr className="pb-4" />
              </div>
            )}
          </div>
        </div>
        <Pagination />
        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        {showLocationInfo && (
          <StationInfo
            showLocationInfo={showLocationInfo}
            setShowLocationInfo={setShowLocationInfo}
          />
        )}

        {showQRCode && (
          <GenerateQRCode
            showQRCode={showQRCode}
            setShowQRCode={setShowQRCode}
          />
        )}

        <div
          className={`lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col ${
            (showLocationInfo || addStation || showQRCode) && "filter blur-sm"
          }`}
        >
          <div className="flex-1">
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

              <Link to="add-location">
                <button
                  style={selected === 10 ? { backgroundColor: theme } : {}}
                  type="button"
                  className={`text-white border-slate-300 flex items-center ${
                    theme === "bg-theme0" || theme === "bg-theme1"
                      ? "bg-black"
                      : theme
                  } justify-center text-xs focus:outline-none  font-medium rounded-full px-5 py-2 text-center`}
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
              </Link>
            </div>

            {cashex.length ? (
              cashex.map((_, index) => (
                <div
                  className="bg-white rounded-lg px-4 py-4 mb-10 dark:text-black"
                  key={index}
                >
                  <div className="mb-6">
                    <div className="flex justify-between mb-6">
                      <div className="flex items-center">
                        <span className="mr-3">Cashex</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-[25px] ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                          onClick={() => setShowLocationInfo(true)}
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center mr-3">
                          <span className="mr-3 text-xs font-medium text-black whitespace-nowrap">
                            Accepting customers?
                          </span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              title=""
                              placeholder=""
                              className="sr-only peer"
                              onClick={() =>
                                setAcceptingCustomers(!acceptingCustomers)
                              }
                            />
                            <div
                              style={
                                selected === 10
                                  ? { backgroundColor: switchColor }
                                  : {}
                              }
                              className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                                switchColor === "peer-checked:bg-theme0" ||
                                theme === "peer-checked:bg-theme1"
                                  ? "peer-checked:bg-black"
                                  : switchColor
                              }`}
                            ></div>
                          </label>
                        </div>
                        <div
                          className="flex items-center mr-3 cursor-pointer"
                          onClick={() => setShowQRCode(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-[20px] ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            } mr-1`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z"
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
                            Generate QR
                          </span>
                        </div>
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() => setAddStation(true)}
                        >
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
                            Add station
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs mb-2 opacity-50">
                      <div className="flex">
                        <span className="mr-1">Address:</span>
                        <span>Canada</span>
                      </div>
                    </div>
                    <div
                      className={`w-[400px] pr-4 ${
                        locationStation && "border-r-2 border-gray-300"
                      }`}
                    >
                      <div className="flex justify-between mb-4">
                        <span>Location stations</span>
                        <span
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            index === 0
                              ? setLocationStation({
                                  ...locationStation,
                                  location1: !locationStation.location1,
                                })
                              : setLocationStation({
                                  ...locationStation,
                                  location2: !locationStation.location2,
                                })
                          }
                        >
                          {index === 0 ? (
                            locationStation.location1 ? (
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
                            )
                          ) : locationStation.location2 ? (
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

                      {index === 0
                        ? locationStation.location1 && (
                            <div>
                              <div className="flex justify-between text-sm mb-4">
                                <span>Station 1</span>
                                <div className="flex items-center">
                                  <div className="flex items-center mr-3">
                                    <span className="mr-3 text-xs font-medium text-black whitespace-nowrap">
                                      Accepting customers?
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        title=""
                                        placeholder=""
                                        className="sr-only peer"
                                        onClick={() =>
                                          setAcceptingCustomers(
                                            !acceptingCustomers
                                          )
                                        }
                                      />
                                      <div
                                        style={
                                          selected === 10
                                            ? { backgroundColor: switchColor }
                                            : {}
                                        }
                                        className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                                          switchColor ===
                                            "peer-checked:bg-theme0" ||
                                          theme === "peer-checked:bg-theme1"
                                            ? "peer-checked:bg-black"
                                            : switchColor
                                        }`}
                                      ></div>
                                    </label>
                                  </div>

                                  {/* edit */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-5 h-5 mr-2 cursor-pointer ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
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
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-5 h-5 cursor-pointer ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
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

                              <div className="flex flex-col mb-5">
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Name of waitlist
                                  </span>
                                  <span className="text-sm">
                                    Cashex waitlist
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Waiting list
                                  </span>
                                  <span className="text-sm">
                                    7 people waiting
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Total waiting time
                                  </span>
                                  <span className="text-sm">
                                    6.9 hours waiting
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Last active:
                                  </span>
                                  <span className="text-sm">
                                    October 21, 2022, 08:21pm
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-xs opacity-40 mb-2">
                                    Team members:
                                  </span>
                                  <span className="text-sm">
                                    Savannah Niguyen, Jane Cooper, Guy Hawkins,
                                    Darrell Steward, Dianne Russell, Albert
                                    Flores
                                  </span>
                                </div>
                              </div>

                              <div className="mb-4">
                                <div className="flex items-center justify-center mb-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-[20px] ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
                                        ? "fill-black"
                                        : fill
                                    } mr-1`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z"
                                      clipRule="evenodd"
                                    />
                                  </svg>

                                  <span
                                    style={
                                      selected === 10
                                        ? { color: textColor }
                                        : {}
                                    }
                                    className={`${
                                      textColor === "text-theme0" ||
                                      textColor === "text-theme1"
                                        ? "text-black"
                                        : textColor
                                    }`}
                                  >
                                    Generate QR
                                  </span>
                                </div>
                                <div className="flex justify-center mb-4">
                                  <span className="opacity-40 text-xs">
                                    or copy the link
                                  </span>
                                </div>

                                <div className="relative mb-5">
                                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      style={
                                        selected === 10 ? { fill: fill } : {}
                                      }
                                      className={`w-[20px] ${
                                        fill === "fill-theme0" ||
                                        fill === "fill-theme1"
                                          ? "fill-black"
                                          : fill
                                      }`}
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                                        clipRule="evenodd"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    id="copy"
                                    className="bg-gray-100 border border-gray-300 placeholder:text-bright text-xs rounded-full cursor-pointer block w-full p-2 focus-visible:outline-none focus:outline-none"
                                    placeholder="migranium.com/welcome/cashex/que-to-get-services"
                                    required
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          )
                        : locationStation.location2 && (
                            <div>
                              <div className="flex justify-between text-sm mb-4">
                                <span>Station 1</span>
                                <div className="flex items-center">
                                  <div className="flex items-center mr-3">
                                    <span className="mr-3 text-xs font-medium text-black whitespace-nowrap">
                                      Accepting customers?
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        title=""
                                        placeholder=""
                                        className="sr-only peer"
                                        onClick={() =>
                                          setAcceptingCustomers(
                                            !acceptingCustomers
                                          )
                                        }
                                      />
                                      <div
                                        style={
                                          selected === 10
                                            ? { backgroundColor: switchColor }
                                            : {}
                                        }
                                        className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                                          switchColor ===
                                            "peer-checked:bg-theme0" ||
                                          theme === "peer-checked:bg-theme1"
                                            ? "peer-checked:bg-black"
                                            : switchColor
                                        }`}
                                      ></div>
                                    </label>
                                  </div>
                                  {/* edit */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-5 h-5 mr-2 cursor-pointer ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
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
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-5 h-5 cursor-pointer ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
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

                              <div className="flex flex-col mb-5">
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Name of waitlist
                                  </span>
                                  <span className="text-sm">
                                    Cashex waitlist
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Waiting list
                                  </span>
                                  <span className="text-sm">
                                    7 people waiting
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Total waiting time
                                  </span>
                                  <span className="text-sm">
                                    6.9 hours waiting
                                  </span>
                                </div>
                                <div className="flex flex-col mb-3">
                                  <span className="text-xs opacity-40 mb-2">
                                    Last active:
                                  </span>
                                  <span className="text-sm">
                                    October 21, 2022, 08:21pm
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-xs opacity-40 mb-2">
                                    Team members:
                                  </span>
                                  <span className="text-sm">
                                    Savannah Niguyen, Jane Cooper, Guy Hawkins,
                                    Darrell Steward, Dianne Russell, Albert
                                    Flores
                                  </span>
                                </div>
                              </div>

                              <div className="mb-4">
                                <div className="flex items-center justify-center mb-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    style={
                                      selected === 10 ? { fill: fill } : {}
                                    }
                                    className={`w-[20px] ${
                                      fill === "fill-theme0" ||
                                      fill === "fill-theme1"
                                        ? "fill-black"
                                        : fill
                                    } mr-1`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z"
                                      clipRule="evenodd"
                                    />
                                  </svg>

                                  <span
                                    style={
                                      selected === 10
                                        ? { color: textColor }
                                        : {}
                                    }
                                    className={`${
                                      textColor === "text-theme0" ||
                                      textColor === "text-theme1"
                                        ? "text-black"
                                        : textColor
                                    }`}
                                  >
                                    Generate QR
                                  </span>
                                </div>
                                <div className="flex justify-center mb-4">
                                  <span className="opacity-40 text-xs">
                                    or copy the link
                                  </span>
                                </div>

                                <div className="relative mb-5">
                                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      style={
                                        selected === 10 ? { fill: fill } : {}
                                      }
                                      className={`w-[20px] ${
                                        fill === "fill-theme0" ||
                                        fill === "fill-theme1"
                                          ? "fill-black"
                                          : fill
                                      }`}
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                                        clipRule="evenodd"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    id="copy"
                                    className="bg-gray-100 border border-gray-300 placeholder:text-bright text-xs rounded-full cursor-pointer block w-full p-2 focus-visible:outline-none focus:outline-none"
                                    placeholder="migranium.com/welcome/cashex/que-to-get-services"
                                    required
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                    </div>

                    <hr className="mb-4" />

                    <div className="mb-6">
                      <div className="text-xs opacity-40 mb-2">
                        <span className="pr-2 border-r-2">0 serving</span>
                        <span className="px-2 border-r-2">1 waiting</span>
                        <span className="px-2 border-r-2">6.9 hours wait</span>

                        <span className="pl-2">
                          Last active: October 19, 2022, 09:46pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg px-2 py-4 mb-6 dark:text-black">
                <span className="block text-center text-xs pb-4">
                  No locations yet
                </span>
                <hr className="pb-10" />
              </div>
            )}
            {cashex.length && <Pagination />}
          </div>
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
