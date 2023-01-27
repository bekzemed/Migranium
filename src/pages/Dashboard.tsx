import { useState } from "react";
import add from "../assets/add.svg";
import copy from "../assets/copy.svg";
import deleteOutline from "../assets/delete-outline.svg";
import editOutline from "../assets/edit-outline.svg";
import info from "../assets/info.svg";
import QR from "../assets/qr-disabled.svg";
import AddStation from "../components/AddStation";
import {
  DashboardDesktop,
  DashboardMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import GenerateQRCode from "../components/GenerateQRCode";
import Header from "../components/Header";
import LocationInfo from "../components/LocationInfo";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [show, onShow] = useState(false);
  const [locationStation, setLocationStation] = useState({
    location1: false,
    location2: false,
  });

  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const [addStation, setAddStation] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const cashex = [1, 2];
  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      {showLocationInfo && (
        <LocationInfo
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
        className={`px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black ${
          (showLocationInfo || addStation || showQRCode) && "filter blur-sm"
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <span className="opacity-80 block mb-1 text-xs">Cashex</span>
            <span className="text-2xl block mb-4">Locations</span>
          </div>
          <Link to="add-location">
            <div className="flex justify-center items-center rounded-full bg-secondary px-3 py-2 focus-visible:outline-none focus:outline-none">
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
        {cashex.length ? (
          cashex.map((_, index) => (
            <div
              className="bg-white rounded-lg px-2 py-4 mb-10 dark:text-black"
              key={index}
            >
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>Cashex</span>
                  <img
                    src={info}
                    alt="Info"
                    onClick={() => setShowLocationInfo(true)}
                  />
                </div>
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
                    <img src={QR} alt="QR code" className="mr-1 bg-secondary" />
                    <span className="text-primary">Generate QR</span>
                  </div>
                  <div
                    className="flex items-center"
                    onClick={() => setAddStation(true)}
                  >
                    <img src={add} alt="Add" className="mr-1" />
                    <span className="text-primary">Add station</span>
                  </div>
                </div>
                <hr className="mb-4" />

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
                              <img
                                src={editOutline}
                                alt="Edit"
                                className="mr-2"
                              />
                              <img src={deleteOutline} alt="Delete" />
                            </div>
                          </div>

                          <div className="flex flex-col mb-5">
                            <div className="flex flex-col mb-3">
                              <span className="text-xs opacity-40 mb-2">
                                Name of waitlist
                              </span>
                              <span className="text-sm">Cashex waitlist</span>
                            </div>
                            <div className="flex flex-col mb-3">
                              <span className="text-xs opacity-40 mb-2">
                                Waiting list
                              </span>
                              <span className="text-sm">7 people waiting</span>
                            </div>
                            <div className="flex flex-col mb-3">
                              <span className="text-xs opacity-40 mb-2">
                                Total waiting time
                              </span>
                              <span className="text-sm">6.9 hours waiting</span>
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
                                Darrell Steward, Dianne Russell, Albert Flores
                              </span>
                            </div>
                          </div>

                          <div className="flex text-sm mb-4">
                            <div className="flex items-center mr-4">
                              <img
                                src={QR}
                                alt="QR code"
                                className="mr-1 bg-secondary"
                              />
                              <span className="text-primary">Generate QR</span>
                            </div>
                            <div className="flex items-center">
                              <img src={copy} alt="Copy" className="mr-1" />
                              <span className="text-primary">
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
                              <img
                                src={editOutline}
                                alt="Edit"
                                className="mr-2"
                              />
                              <img src={deleteOutline} alt="Delete" />
                            </div>
                          </div>

                          <div className="flex flex-col mb-5">
                            <div className="flex flex-col mb-3">
                              <span className="text-xs opacity-40 mb-2">
                                Name of waitlist
                              </span>
                              <span className="text-sm">Cashex waitlist</span>
                            </div>
                            <div className="flex flex-col mb-3">
                              <span className="text-xs opacity-40 mb-2">
                                Waiting list
                              </span>
                              <span className="text-sm">7 people waiting</span>
                            </div>
                            <div className="flex flex-col mb-3">
                              <span className="text-xs opacity-40 mb-2">
                                Total waiting time
                              </span>
                              <span className="text-sm">6.9 hours waiting</span>
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
                                Darrell Steward, Dianne Russell, Albert Flores
                              </span>
                            </div>
                          </div>

                          <div className="flex text-sm mb-4">
                            <div className="flex items-center mr-4">
                              <img
                                src={QR}
                                alt="QR code"
                                className="mr-1 bg-secondary"
                              />
                              <span className="text-primary">Generate QR</span>
                            </div>
                            <div className="flex items-center">
                              <img src={copy} alt="Copy" className="mr-1" />
                              <span className="text-primary">
                                Copy the link
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
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

        <Pagination />
      </div>

      <div className="text-xs w-screen block lg:hidden">
        <DashboardMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        {showLocationInfo && (
          <LocationInfo
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

        {showLocationInfo && (
          <LocationInfo
            showLocationInfo={showLocationInfo}
            setShowLocationInfo={setShowLocationInfo}
          />
        )}

        <div
          className={`lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden ${
            (showLocationInfo || addStation || showQRCode) && "filter blur-sm"
          } lg:block`}
        >
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
                      <img
                        src={info}
                        alt="Info"
                        className="cursor-pointer"
                        onClick={() => setShowLocationInfo(true)}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <div
                        className="flex items-center mr-3 cursor-pointer"
                        onClick={() => setShowQRCode(true)}
                      >
                        <img
                          src={QR}
                          alt="QR code"
                          className="mr-1 bg-secondary"
                        />
                        <span className="text-primary">Generate QR</span>
                      </div>
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={() => setAddStation(true)}
                      >
                        <img src={add} alt="Add" className="mr-1" />
                        <span className="text-primary">Add station</span>
                      </div>
                    </div>
                  </div>

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

                  <hr className="mb-4" />

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
                                <img
                                  src={editOutline}
                                  alt="Edit"
                                  className="mr-2"
                                />
                                <img src={deleteOutline} alt="Delete" />
                              </div>
                            </div>

                            <div className="flex flex-col mb-5">
                              <div className="flex flex-col mb-3">
                                <span className="text-xs opacity-40 mb-2">
                                  Name of waitlist
                                </span>
                                <span className="text-sm">Cashex waitlist</span>
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
                                  Darrell Steward, Dianne Russell, Albert Flores
                                </span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="flex items-center justify-center mb-4">
                                <img
                                  src={QR}
                                  alt="QR code"
                                  className="mr-1 bg-secondary"
                                />
                                <span className="text-primary">
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
                                  <img src={copy} alt="Copy" />
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
                                <img
                                  src={editOutline}
                                  alt="Edit"
                                  className="mr-2"
                                />
                                <img src={deleteOutline} alt="Delete" />
                              </div>
                            </div>

                            <div className="flex flex-col mb-5">
                              <div className="flex flex-col mb-3">
                                <span className="text-xs opacity-40 mb-2">
                                  Name of waitlist
                                </span>
                                <span className="text-sm">Cashex waitlist</span>
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
                                  Darrell Steward, Dianne Russell, Albert Flores
                                </span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="flex items-center justify-center mb-4">
                                <img
                                  src={QR}
                                  alt="QR code"
                                  className="mr-1 bg-secondary"
                                />
                                <span className="text-primary">
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
                                  <img src={copy} alt="Copy" />
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
      </div>
    </div>
  );
};

export default Dashboard;
