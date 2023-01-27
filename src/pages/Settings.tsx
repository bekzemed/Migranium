import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import add from "../assets/add.svg";
import deleteIcon from "../assets/delete.svg";
import edit from "../assets/edit.svg";
import BusinessInfoInput from "../components/BusinessInfoInput";
import {
  DashboardDesktop,
  DashboardMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import LocationLogo from "../components/LocationLogo";
import OperatingHours from "../components/OperatingHours";
import Stations from "../components/Stations";
import TimePicker from "../components/TimePicker";
import { options } from "../util/operatingHours";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

const Settings = () => {
  const [show, onShow] = useState(false);
  const [showLocation1, setShowLocation1] = useState(false);
  const [showLocation2, setShowLocation2] = useState(false);

  const [settingFromDate, setSettingFromDate] = useState(false);
  const [settingToDate, setSettingToDate] = useState(false);
  const [dateMultipleHours, setDateMultipleHours] = useState(false);
  const [showBusinessType, setShowBusinessType] = useState(false);
  const [businessType, setBusinessType] = useState("");

  const [showBusinessInfo, setShowBusinessInfo] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const [showStation, setShowStation] = useState(false);
  const [showTeamMember, setShowTeamMember] = useState(false);
  const [showOperatingHours, setShowOperatingHours] = useState(false);
  const [showCustomFields, setShowCustomFields] = useState(false);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const handleSettingFromChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleSettingFromClose = (state: boolean) => setSettingFromDate(state);

  const handleSettingToChange = (selectedDate: Date) =>
    console.log(selectedDate);
  const handleSettingToClose = (state: boolean) => setSettingToDate(state);

  const handleMultipleDateHours = (selectedDate: Date) =>
    console.log(selectedDate);
  const handleMultipleDateHoursClose = (state: boolean) =>
    setDateMultipleHours(state);

  const teamMembers = [
    "Ronald Richards",
    "Savannah Niguyen",
    "Cody Fisher",
    "Albert Flores",
  ];

  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black">
        <span className="opacity-80 block mb-1 text-xs">Cashex</span>
        <span className="text-2xl block mb-4">General settings</span>

        <div className="mb-4">
          <div className="bg-white rounded-lg py-4 mb-4">
            <div className="pb-5 flex items-center justify-between px-2">
              <span className="block">Business info</span>
              <span
                className="flex items-center cursor-pointer"
                onClick={() => setShowBusinessInfo(!showBusinessInfo)}
              >
                {showBusinessInfo ? (
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

            {showBusinessInfo && (
              <>
                <div className="mb-4 px-2">
                  <label
                    htmlFor="businessName"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                  >
                    Business name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Cashex"
                    required
                  />
                  <label
                    htmlFor="businessType"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                  >
                    Business type
                  </label>
                  <div
                    className="relative w-full cursor-pointer mb-4"
                    onClick={() => setShowBusinessType(!showBusinessType)}
                  >
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      id="businessType"
                      value={businessType}
                      className="bg-primary border border-gray-300 text-gray-900 text-xs pr-10 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none cursor-pointer"
                      placeholder="select a business type"
                      required
                    />
                  </div>

                  {showBusinessType && (
                    <ul className="w-full mb-5 float-right border border-gray-300 text-xs cursor-pointer bg-primary rounded-lg">
                      <li
                        className="p-2 border-b hover:bg-gray-300 dark:text-black"
                        onClick={() => setBusinessType("Health")}
                      >
                        Health
                      </li>
                      <li
                        className="p-2 hover:bg-gray-300 dark:text-black"
                        onClick={() => setBusinessType("Technology")}
                      >
                        Technology
                      </li>
                    </ul>
                  )}

                  <div>
                    <label
                      htmlFor="businessEmail"
                      className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                    >
                      Business email
                    </label>
                    <input
                      type="text"
                      id="businessEmail"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                      placeholder="cashex@gmail.com"
                      required
                    />

                    <label
                      htmlFor="businessPhone"
                      className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                    >
                      Business phone
                    </label>
                    <input
                      type="text"
                      id="businessPhone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                      placeholder="+7 890 123 23 88"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 px-2">
                  <LocationLogo />
                </div>

                <div className="px-2">
                  <BusinessInfoInput />
                </div>
              </>
            )}
          </div>

          <div className="bg-white rounded-lg py-4 mb-4">
            <div className="mb-2">
              <div className="flex items-center px-2 justify-between mb-6">
                <span className="flex items-center">
                  <span className="mr-5">Location</span>
                  <img src={edit} alt="Edit" className="mr-2 lg:hidden" />
                  <img src={deleteIcon} alt="Delete" className="lg:hidden" />
                </span>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowLocation(!showLocation)}
                >
                  {showLocation ? (
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

              <div
                className={`flex items-center justify-between px-2 mb-6 ${
                  !showLocation && "hidden"
                }`}
              >
                <span className="flex items-center">
                  <span className="text-sm mr-5">Location 1</span>
                </span>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowLocation1(!showLocation1)}
                >
                  {showLocation1 ? (
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

              <div
                className={`pb-6 ${
                  (!showLocation1 || !showLocation) && "hidden"
                } px-2`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:mr-3">
                    <label
                      htmlFor="businessCountry"
                      className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                    >
                      Business country
                    </label>
                    <input
                      type="text"
                      id="businessCountry"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                      placeholder="Select country"
                      required
                    />
                  </div>

                  <div className="lg:mr-3">
                    <label
                      htmlFor="city"
                      className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                      placeholder="Enter business city..."
                      required
                    />
                  </div>

                  <div className="lg:flex lg:justify-between">
                    <div className="lg:flex-1">
                      <label
                        htmlFor="streetAddress"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                        placeholder="Street address..."
                        required
                      />
                    </div>
                    <span className="hidden lg:ml-3 lg:flex lg:items-center">
                      <img src={edit} alt="Edit" className="mr-2" />
                      <img src={deleteIcon} alt="Delete" />
                    </span>
                  </div>
                </div>
              </div>
              {/* location station */}

              <div className="mb-6 px-2">
                <div
                  className={`flex items-center justify-between mb-4 ${
                    (!showLocation1 || !showLocation) && "hidden"
                  }`}
                >
                  <span className="flex items-center">
                    <span className="mr-5 text-sm">Station</span>
                  </span>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowStation(!showStation)}
                  >
                    {showStation ? (
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
                <div
                  className={`mb-6 ${
                    (!showStation || !showLocation) && "hidden"
                  }`}
                >
                  <div className="text-xs opacity-80 flex justify-between mb-4">
                    <span>Station 1</span>
                    <div className="flex">
                      <img
                        src={edit}
                        alt="Edit"
                        className="mr-1 cursor-pointer"
                      />
                      <img
                        src={add}
                        alt="Add"
                        className="mr-1 cursor-pointer"
                      />
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="text-xs opacity-80 flex justify-between mb-4">
                    <span>Station 2</span>
                    <div className="flex">
                      <img
                        src={edit}
                        alt="Edit"
                        className="mr-1 cursor-pointer"
                      />
                      <img
                        src={add}
                        alt="Add"
                        className="mr-1 cursor-pointer"
                      />
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* team member */}
              <div className="mb-6">
                <div
                  className={`flex items-center justify-between mb-4 px-2 ${
                    (!showLocation1 || !showLocation) && "hidden"
                  }`}
                >
                  <span className="flex items-center">
                    <span className="text-sm mr-5 whitespace-nowrap">
                      Location team members
                    </span>
                  </span>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowTeamMember(!showTeamMember)}
                  >
                    {showTeamMember ? (
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
                        <span className="text-xs mr-1 whitespace-nowrap">
                          Show all
                        </span>
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

                {/* team members */}
                <div
                  className={`${
                    (!showTeamMember || !showLocation) && "hidden"
                  }`}
                >
                  <div className="mb-10 px-2">
                    <div className="mb-8">
                      <div className="flex justify-between mb-2 text-xs">
                        <span className="block opacity-40">member name</span>
                        <div className="flex">
                          <img
                            src={edit}
                            alt="Edit"
                            className="mr-1 cursor-pointer"
                          />
                          <img
                            src={deleteIcon}
                            alt="Delete"
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                      <span className="text-sm block">Ronald Richards</span>
                    </div>

                    <div className="flex opacity-40 text-xs justify-between mb-2">
                      <span>Member station</span>
                      <span>Member position</span>
                      <span>Member role</span>
                    </div>
                    <div className="flex text-xs justify-between">
                      <span className="flex items-center">
                        <span className="mr-1"> Station 1</span>

                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">Obstetrician</span>

                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">Admin</span>
                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                    </div>
                  </div>

                  <div className="mb-10 bg-[#F8F8F8]">
                    <hr className="mb-8 mx-2" />
                    <div className="mb-8">
                      <div className="flex justify-between mb-2 text-xs px-2">
                        <span className="block opacity-40">member name</span>
                        <div className="flex">
                          <img
                            src={edit}
                            alt="Edit"
                            className="mr-1 cursor-pointer"
                          />
                          <img
                            src={deleteIcon}
                            alt="Delete"
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                      <span className="text-sm block px-2">
                        Savannah Niguyen
                      </span>
                    </div>

                    <div className="flex opacity-40 text-xs justify-between mb-2 px-2">
                      <span>Member station</span>
                      <span>Member position</span>
                      <span>Member role</span>
                    </div>
                    <div className="flex text-xs justify-between px-2 mb-8">
                      <span className="flex items-center">
                        <span className="mr-1"> Station 1</span>

                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">Obstetrician</span>

                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">Admin</span>
                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                    </div>
                    <hr />
                  </div>

                  <div className="mb-10 px-2">
                    <div className="mb-8">
                      <div className="flex justify-between mb-2 text-xs">
                        <span className="block opacity-40">member name</span>
                        <div className="flex">
                          <img
                            src={edit}
                            alt="Edit"
                            className="mr-1 cursor-pointer"
                          />
                          <img
                            src={deleteIcon}
                            alt="Delete"
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                      <span className="text-sm block">Cody Fisher</span>
                    </div>

                    <div className="flex opacity-40 text-xs justify-between mb-2">
                      <span>Member station</span>
                      <span>Member position</span>
                      <span>Member role</span>
                    </div>
                    <div className="flex text-xs justify-between">
                      <span className="flex items-center">
                        <span className="mr-1"> Station 1</span>

                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">Obstetrician</span>

                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">Admin</span>
                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#F8F8F8]">
                    <hr className="mb-8 mx-2" />
                    <div className="mb-8">
                      <div className="flex justify-between mb-2 text-xs px-2">
                        <span className="block opacity-40">member name</span>
                        <div className="flex">
                          <img
                            src={edit}
                            alt="Edit"
                            className="mr-1 cursor-pointer"
                          />
                          <img
                            src={deleteIcon}
                            alt="Delete"
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                      <span className="text-sm block px-2">Albert Flores</span>
                    </div>

                    <div className="flex opacity-40 text-xs justify-between mb-2 px-2">
                      <span>Member station</span>
                      <span>Member position</span>
                      <span>Member role</span>
                    </div>
                    <div className="flex text-xs justify-between px-2 mb-8">
                      <span className="flex items-center">
                        <span className="mr-1"> Station 1</span>

                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">Obstetrician</span>

                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">Admin</span>
                        <img src={edit} alt="Edit" className="cursor-pointer" />
                      </span>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>

              {/* operating hours */}
              <div
                className={`mb-6 px-2 ${
                  (!showLocation1 || !showLocation) && "hidden"
                }`}
              >
                <div className={`flex items-center justify-between mb-4 `}>
                  <span className="flex items-center">
                    <span className="text-sm mr-5 whitespace-nowrap">
                      Operating hours & days
                    </span>
                  </span>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowOperatingHours(!showOperatingHours)}
                  >
                    {showOperatingHours ? (
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
                        <span className="text-xs mr-1 whitespace-nowrap">
                          Show all
                        </span>
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
                <div
                  className={`${
                    (!showOperatingHours || !showLocation) && "hidden"
                  }`}
                >
                  <div className="mb-6 text-xs">
                    <div className="mb-6">
                      <span className="block mb-4">Set the operating days</span>
                      <div className="flex">
                        <span className="flex items-center mr-2">
                          <span className="mr-2">from</span>
                          <Datepicker
                            options={options}
                            onChange={handleSettingFromChange}
                            show={settingFromDate}
                            setShow={handleSettingFromClose}
                          />
                          {/* <DatePicker
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                            className="cursor-pointer dark:text-black dark:bg-white dark:border-gray-300 text-xs py-1 focus-visible:outline-none focus:outline-none"
                          /> */}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">to</span>
                          <Datepicker
                            options={options}
                            onChange={handleSettingToChange}
                            show={settingToDate}
                            setShow={handleSettingToClose}
                          />
                          {/* <DatePicker
                            selected={endDate}
                            onChange={(date: Date) => setEndDate(date)}
                            className="cursor-pointer dark:text-black dark:bg-white dark:border-gray-300 text-xs py-1 focus-visible:outline-none focus:outline-none"
                          /> */}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="block mb-4">
                        Set the operating hours
                      </span>
                      <div className="flex justify-between">
                        <span className="flex items-center mr-2">
                          <span className="mr-2">from</span>
                          <TimePicker />
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">to</span>
                          <TimePicker />
                        </span>
                      </div>
                    </div>
                  </div>
                  <OperatingHours />

                  <div className="mb-10 mt-6 text-xs">
                    <div className="mb-5">
                      <span className="block mb-4">
                        Set the day with multiple hours
                      </span>
                      <div className="w-1/2">
                        <Datepicker
                          options={options}
                          onChange={handleMultipleDateHours}
                          show={dateMultipleHours}
                          setShow={handleMultipleDateHoursClose}
                        />
                        {/* <DatePicker
                          selected={multipleHourDate}
                          onChange={(date: Date) => setMultipleHourDate(date)}
                          className="cursor-pointer dark:text-black dark:bg-white dark:border-gray-300 text-xs py-1 focus-visible:outline-none focus:outline-none"
                        /> */}
                      </div>
                    </div>
                    <div className="mr-6">
                      <span className="block mb-4">Set the hours</span>
                      <div className="flex">
                        <span className="flex items-center mr-2">
                          <span className="mr-2">from</span>
                          <TimePicker />
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">to</span>
                          <TimePicker />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 bg-white rounded-lg py-4 mb-4">
            <div className="mb-4">
              <span className="block mb-4">Add new location</span>
              <div className="mb-4">
                <label
                  htmlFor="businessCountry"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Business country
                </label>
                <input
                  type="text"
                  id="businessCountry"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Select country"
                  required
                />

                <label
                  htmlFor="city"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter business city..."
                  required
                />

                <label
                  htmlFor="streetAddress"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Street address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Street address..."
                  required
                />
              </div>
              <span className="text-xs flex items-center my-4">
                <img src={add} alt="Add" className="mr-2" />
                <span className="text-primary">Add new location</span>
              </span>
            </div>
          </div>

          <div className="px-2 text-xs bg-white rounded-lg py-4 mb-4">
            <span className="block text-base mb-4">
              Set approximate wait time
            </span>
            <TimePicker text="Set approximate wait time in minutes" />
          </div>

          <div className="px-2 text-xs bg-white rounded-lg py-4 mb-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-base">Custom fields</span>

              <span
                className="flex items-center cursor-pointer"
                onClick={() => setShowCustomFields(!showCustomFields)}
              >
                {showCustomFields ? (
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

            <div className={`${!showCustomFields && "hidden"}`}>
              <div className="flex">
                <div className="flex-1 mr-3">
                  <label
                    htmlFor="creditOrDebit"
                    className="block mb-2 font-medium text-gray-900 dark:text-black"
                  >
                    Postal code
                  </label>
                  <input
                    type="text"
                    id="creditOrDebit"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Enter postal code..."
                    required
                  />
                </div>
                <div className="flex items-center">
                  <img src={edit} alt="" className="mr-1" />
                  <img src={deleteIcon} alt="" />
                </div>
              </div>

              <div className="flex">
                <div className="flex-1 mr-3">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 font-medium text-gray-900 dark:text-black"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Enter phone number..."
                    required
                  />
                </div>
                <div className="flex items-center">
                  <img src={edit} alt="" className="mr-1" />
                  <img src={deleteIcon} alt="" />
                </div>
              </div>

              <label
                htmlFor="customField"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                Create custom field
              </label>
              <input
                type="text"
                id="customField"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Enter title of field..."
                required
              />
              <input
                type="text"
                id="customField"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Enter placeholder for field..."
                required
              />

              <span className="text-xs flex items-center my-4">
                <img src={add} alt="Add" className="mr-2" />
                <span className="text-primary">Add field</span>
              </span>
            </div>
          </div>

          <div className="px-2 text-xs bg-white rounded-lg py-4 mb-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-base">Payment details</span>

              <span
                className="flex items-center cursor-pointer"
                onClick={() => setShowPaymentDetails(!showPaymentDetails)}
              >
                {showPaymentDetails ? (
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
            <div className={`${!showPaymentDetails && "hidden"}`}>
              <label
                htmlFor="creditOrDebit"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                Credit or debit card
              </label>
              <input
                type="text"
                id="creditOrDebit"
                className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="card number"
                required
              />

              <div className="flex">
                <input
                  type="text"
                  id="creditOrDebit"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full mr-2  block w-1/2 p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Card date"
                  required
                />

                <input
                  type="text"
                  id="creditOrDebit"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-1/2 p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="CVV"
                  required
                />
              </div>

              <label
                htmlFor="country"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                country
              </label>
              <input
                type="text"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Select country"
                required
              />

              <label
                htmlFor="state"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="Select state..."
                required
              />
              <label
                htmlFor="zip"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                Zip code
              </label>
              <input
                type="text"
                id="zip"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="02231"
                required
              />
              <label
                htmlFor="billingEmail"
                className="block mb-2 font-medium text-gray-900 dark:text-black"
              >
                Billing email
              </label>
              <input
                type="text"
                id="billingEmail"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                placeholder="mailforspam@mailforspam.com"
                required
              />
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

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block">
          <Header text="General settings" />

          <div className="dark:text-black">
            <div className="mb-6 p-4 bg-white rounded-lg">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-bold">Business info</span>

                <div className="flex items-center">
                  <span
                    className="flex items-center cursor-pointer mr-5"
                    onClick={() => setShowBusinessInfo(!showBusinessInfo)}
                  >
                    {showBusinessInfo ? (
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
                  <button
                    type="button"
                    className="bg-secondary text-white rounded-full focus-visible:outline-none focus:outline-none text-xs"
                  >
                    Save changes
                  </button>
                </div>
              </div>
              {showBusinessInfo && (
                <>
                  {/*  */}
                  <div className="mb-6 flex">
                    <div className="mr-4 w-[200px]">
                      <label
                        htmlFor="businessName"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Business name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                        placeholder="Cashex"
                        required
                      />
                    </div>

                    <div className="mr-4 w-[200px]">
                      <label
                        htmlFor="businessType"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Business type
                      </label>
                      <div
                        className="relative w-full cursor-pointer"
                        onClick={() => setShowBusinessType(!showBusinessType)}
                      >
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>

                        <input
                          type="text"
                          id="businessType"
                          value={businessType}
                          className="bg-primary border border-gray-300 text-gray-900 text-xs pr-10 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none cursor-pointer"
                          placeholder="select a business type"
                          required
                        />
                      </div>

                      {showBusinessType && (
                        <ul className="w-full mt-2 float-right border border-gray-300 text-xs cursor-pointer bg-primary rounded-lg">
                          <li
                            className="p-2 border-b hover:bg-gray-300 dark:text-black"
                            onClick={() => setBusinessType("Health")}
                          >
                            Health
                          </li>
                          <li
                            className="p-2 hover:bg-gray-300 dark:text-black"
                            onClick={() => setBusinessType("Technology")}
                          >
                            Technology
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="mr-4 w-[200px]">
                      <label
                        htmlFor="businessEmail"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Business email
                      </label>
                      <input
                        type="text"
                        id="businessEmail"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                        placeholder="cashex@gmail.com"
                        required
                      />
                    </div>

                    <div className="w-[200px]">
                      <label
                        htmlFor="businessPhone"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Business phone
                      </label>
                      <input
                        type="text"
                        id="businessPhone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                        placeholder="+7 890 123 23 88"
                        required
                      />
                    </div>
                  </div>
                  {/*  */}

                  <div className="mb-6">
                    <LocationLogo />
                  </div>
                  <BusinessInfoInput />
                </>
              )}
            </div>

            <div className="p-4 bg-white rounded-lg mb-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex items-center">
                  <span className="mr-5">Location</span>
                  <img src={edit} alt="Edit" className="mr-2 lg:hidden" />
                  <img src={deleteIcon} alt="Delete" className="lg:hidden" />
                </span>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowLocation(!showLocation)}
                >
                  {showLocation ? (
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

              <div
                className={`flex items-center justify-between mb-6 ${
                  !showLocation && "hidden"
                }`}
              >
                <span className="flex items-center">
                  <span className="text-sm mr-5">Location 1</span>
                  <img src={edit} alt="Edit" className="mr-2 lg:hidden" />
                  <img src={deleteIcon} alt="Delete" className="lg:hidden" />
                </span>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowLocation1(!showLocation1)}
                >
                  {showLocation1 ? (
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

              <div
                className={`pb-6 ${
                  (!showLocation1 || !showLocation) && "hidden"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:mr-3">
                    <label
                      htmlFor="businessCountry"
                      className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                    >
                      Business country
                    </label>
                    <input
                      type="text"
                      id="businessCountry"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                      placeholder="Select country"
                      required
                    />
                  </div>

                  <div className="lg:mr-3">
                    <label
                      htmlFor="city"
                      className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                      placeholder="Enter business city..."
                      required
                    />
                  </div>

                  <div className="lg:flex lg:justify-between">
                    <div className="lg:flex-1">
                      <label
                        htmlFor="streetAddress"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                        placeholder="Street address..."
                        required
                      />
                    </div>
                    <span className="hidden lg:ml-3 lg:flex lg:items-center">
                      <img src={edit} alt="Edit" className="mr-2" />
                      <img src={deleteIcon} alt="Delete" />
                    </span>
                  </div>
                </div>
              </div>
              {/* location station */}

              <div className={`${showLocation && "mb-6"}`}>
                <div
                  className={`flex items-center justify-between mb-4 ${
                    (!showLocation1 || !showLocation) && "hidden"
                  }`}
                >
                  <span className="flex items-center">
                    <span className="text-sm mr-5">Station</span>
                  </span>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowStation(!showStation)}
                  >
                    {showStation ? (
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
                <div
                  className={`${
                    (!showStation || !showLocation || !showLocation1) &&
                    "hidden"
                  }`}
                >
                  <span className="opacity-40 block text-sm mb-4">
                    Station name
                  </span>

                  <Stations text="Station 1" />
                  <hr className="mb-4" />
                  <Stations text="Station 2" />
                </div>
              </div>

              {/* team member */}
              <div className={`${showLocation && "mb-6"}`}>
                <div
                  className={`flex items-center justify-between mb-4 ${
                    (!showLocation1 || !showLocation) && "hidden"
                  }`}
                >
                  <span className="flex items-center">
                    <span className="text-sm mr-5">Location team members</span>
                  </span>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowTeamMember(!showTeamMember)}
                  >
                    {showTeamMember ? (
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

                <div
                  className={`${
                    (!showTeamMember || !showLocation || !showLocation1) &&
                    "hidden"
                  }`}
                >
                  <span className="opacity-40 block text-xs mb-4">
                    member name
                  </span>

                  {teamMembers.map((member, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-6">
                        <span className="text-xs flex items-center w-[150px]">
                          <span className="mr-5 opacity-40">{index + 1}</span>
                          <span className="text-xs opacity-40">{member}</span>
                        </span>
                        <span className="text-xs flex items-center">
                          <span className="opacity-40 mr-1">
                            Station {index + 1}
                          </span>
                          <img src={edit} alt="Edit" />
                        </span>
                        <span className="text-xs flex items-center">
                          <span className="opacity-40 mr-1">Obstetrician</span>
                          <img src={edit} alt="Edit" />
                        </span>
                        <span className="text-xs flex items-center">
                          <span className="opacity-40 mr-1">Admin</span>
                          <img src={edit} alt="Edit" />
                        </span>
                        <span className="flex items-center">
                          <img src={edit} alt="Edit" className="mr-1" />
                          <img src={deleteIcon} alt="Delete" />
                        </span>
                      </div>
                      {index === teamMembers.length - 1 ? null : (
                        <hr className="mb-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* operating hours */}
              <div className={`${showLocation && "mb-6"}`}>
                <div
                  className={`flex items-center justify-between mb-4 ${
                    (!showLocation1 || !showLocation) && "hidden"
                  }`}
                >
                  <span className="flex items-center">
                    <span className="text-sm mr-5">
                      Operating hours and days
                    </span>
                  </span>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowOperatingHours(!showOperatingHours)}
                  >
                    {showOperatingHours ? (
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
                <div
                  className={`${
                    (!showOperatingHours || !showLocation || !showLocation1) &&
                    "hidden"
                  }`}
                >
                  <div className="mb-6 text-xs flex items-center">
                    <div className="mr-6">
                      <span className="block mb-4">Set the operating days</span>
                      <div className="flex">
                        <span className="flex items-center mr-2">
                          <span className="mr-2">from</span>
                          <Datepicker
                            options={options}
                            onChange={handleSettingFromChange}
                            show={settingFromDate}
                            setShow={handleSettingFromClose}
                          />
                          {/* <DatePicker
                              selected={startDate}
                              onChange={(date: Date) => setStartDate(date)}
                              className="cursor-pointer dark:text-black dark:bg-white dark:border-gray-300 text-xs py-1 focus-visible:outline-none focus:outline-none"
                            /> */}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">to</span>
                          <Datepicker
                            options={options}
                            onChange={handleSettingToChange}
                            show={settingToDate}
                            setShow={handleSettingToClose}
                          />
                          {/* <DatePicker
                              selected={endDate}
                              onChange={(date: Date) => setEndDate(date)}
                              className="cursor-pointer dark:text-black dark:bg-white dark:border-gray-300 text-xs py-1 focus-visible:outline-none focus:outline-none"
                            /> */}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="block mb-4">
                        Set the operating hours
                      </span>
                      <div className="flex">
                        <span className="flex items-center mr-2">
                          <span className="mr-2">from</span>
                          <TimePicker />
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">to</span>
                          <TimePicker />
                        </span>
                      </div>
                    </div>
                  </div>
                  <OperatingHours />

                  <div className="mb-10 mt-6 text-xs flex items-center">
                    <div className="mr-6">
                      <span className="block mb-4">Set the hours</span>
                      <div className="flex">
                        <span className="flex items-center mr-2">
                          <span className="mr-2">from</span>
                          <TimePicker />
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">to</span>
                          <TimePicker />
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="block mb-4">
                        Set the day with multiple hours
                      </span>
                      <span className="flex items-center mr-2">
                        <Datepicker
                          options={options}
                          onChange={handleMultipleDateHours}
                          show={dateMultipleHours}
                          setShow={handleMultipleDateHoursClose}
                        />

                        {/* <DatePicker
                            selected={multipleHourDate}
                            onChange={(date: Date) => setMultipleHourDate(date)}
                            className="cursor-pointer dark:text-black dark:bg-white dark:border-gray-300 text-xs py-1 focus-visible:outline-none focus:outline-none"
                          /> */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="p-4 bg-white rounded-lg mb-6">
              <span className="block mb-6 white">Add new location</span>
              <div className="flex items-center">
                <div className="w-[200px] mr-3">
                  <label
                    htmlFor="businessCountry"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                  >
                    Business country
                  </label>
                  <input
                    type="text"
                    id="businessCountry"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Select country"
                    required
                  />
                </div>

                <div className="w-[200px] mr-3">
                  <label
                    htmlFor="city"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Enter business city..."
                    required
                  />
                </div>

                <div className="w-[200px] mr-3">
                  <label
                    htmlFor="streetAddress"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                    placeholder="Street address..."
                    required
                  />
                </div>
                <span className="text-xs flex items-center">
                  <img src={add} alt="Add" className="mr-2" />
                  <span className="text-primary whitespace-nowrap">
                    Add new location
                  </span>
                </span>
              </div>
            </div>

            {/*  */}
            <div className="p-4 bg-white rounded-lg mb-6 text-xs">
              <span className="block text-base mb-4">
                Set approximate wait time
              </span>
              <TimePicker text="Set approximate wait time in minutes" />
            </div>

            {/*  */}
            <div className="p-4 bg-white rounded-lg mb-6 text-xs">
              <div className="flex items-center justify-between mb-6">
                <span className="text-base">Custom fields</span>

                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowCustomFields(!showCustomFields)}
                >
                  {showCustomFields ? (
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

              <div className={`${!showCustomFields && "hidden"}`}>
                <div className="flex lg:w-[300px]">
                  <div className="flex-1 mr-3">
                    <label
                      htmlFor="creditOrDebit"
                      className="block mb-2 font-medium text-gray-900 dark:text-black"
                    >
                      Postal code
                    </label>
                    <input
                      type="text"
                      id="creditOrDebit"
                      className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                      placeholder="Enter postal code..."
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <img src={edit} alt="" className="mr-1" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>

                <div className="flex lg:w-[300px]">
                  <div className="flex-1 mr-3">
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 font-medium text-gray-900 dark:text-black"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                      placeholder="Enter phone number..."
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <img src={edit} alt="" className="mr-1" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="customField"
                    className="block mb-2 font-medium text-gray-900 dark:text-black"
                  >
                    Create custom field
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="customField"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-[200px] mr-3 p-2 focus-visible:outline-none focus:outline-none"
                      placeholder="Enter title of field..."
                      required
                    />
                    <input
                      type="text"
                      id="customField"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-[200px] mr-3 p-2 focus-visible:outline-none focus:outline-none"
                      placeholder="Enter placeholder for field..."
                      required
                    />
                    <span className="text-xs flex items-center">
                      <img src={add} alt="Add" className="mr-2" />
                      <span className="text-primary">Add field</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="p-4 bg-white rounded-lg mb-6 text-xs">
              <div className="flex items-center justify-between mb-6">
                <span className="text-base">Payment details</span>

                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowPaymentDetails(!showPaymentDetails)}
                >
                  {showPaymentDetails ? (
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
              <div className={`${!showPaymentDetails && "hidden"}`}>
                <label
                  htmlFor="creditOrDebit"
                  className="block mb-2 font-medium text-gray-900 dark:text-black"
                >
                  Credit or debit card
                </label>
                <div className="mb-4 flex">
                  <input
                    type="text"
                    id="creditOrDebit"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-[200px] mr-3 p-2 focus-visible:outline-none focus:outline-none"
                    placeholder="card number"
                    required
                  />

                  <input
                    type="text"
                    id="creditOrDebit"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full mr-2  block w-[145px] p-2 focus-visible:outline-none focus:outline-none"
                    placeholder="Card date"
                    required
                  />

                  <input
                    type="text"
                    id="creditOrDebit"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-[145px] p-2 focus-visible:outline-none focus:outline-none"
                    placeholder="CVV"
                    required
                  />
                </div>

                <div className="flex mb-4">
                  <div className="w-[250px] mr-3">
                    <label
                      htmlFor="country"
                      className="block mb-2 font-medium text-gray-900 dark:text-black"
                    >
                      country
                    </label>
                    <input
                      type="text"
                      id="country"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                      placeholder="Select country"
                      required
                    />
                  </div>

                  <div className="w-[250px]">
                    <label
                      htmlFor="state"
                      className="block mb-2 font-medium text-gray-900 dark:text-black"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                      placeholder="Select state..."
                      required
                    />
                  </div>
                </div>

                <div className="flex mb-4">
                  <div className="w-[250px] mr-3">
                    <label
                      htmlFor="zip"
                      className="block mb-2 font-medium text-gray-900 dark:text-black"
                    >
                      Zip code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                      placeholder="02231"
                      required
                    />
                  </div>

                  <div className="w-[250px]">
                    <label
                      htmlFor="billingEmail"
                      className="block mb-2 font-medium text-gray-900 dark:text-black"
                    >
                      Billing email
                    </label>
                    <input
                      type="text"
                      id="billingEmail"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                      placeholder="mailforspam@mailforspam.com"
                      required
                    />
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

export default Settings;
