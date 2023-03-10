import { useState } from "react";
import { Link } from "react-router-dom";
import Datepicker from "tailwind-datepicker-react";
import deleteIcon from "../assets/delete.svg";
import edit from "../assets/edit.svg";
import AddBillingMethod from "../components/AddBillingMethod";
import BusinessInfoInput from "../components/BusinessInfoInput";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import EditTeamMember from "../components/EditTeamMember";
import Header from "../components/Header";
import OperatingHours from "../components/OperatingHours";
import PoweredBy from "../components/PoweredBy";
import ProfileLogo from "../components/ProfileLogo";
import ResetPassword from "../components/ResetPassword";
import TimePicker from "../components/TimePicker";
import { useAppSelector } from "../redux/hooks";
import { options } from "../util/operatingHours";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

const Settings = () => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const textColor = useAppSelector((state) => state.theme.textColor);
  const color = useAppSelector((state) => state.theme.color);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showLocation1, setShowLocation1] = useState(false);

  const [dateMultipleHours, setDateMultipleHours] = useState(false);
  const [showBusinessType, setShowBusinessType] = useState(false);
  const [showApproximateWaitTime, setShowApproximateWaitTime] = useState(false);

  const [businessType, setBusinessType] = useState("");

  const [showBusinessInfo, setShowBusinessInfo] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const [showStation, setShowStation] = useState(false);
  const [showOperatingHours, setShowOperatingHours] = useState(false);
  const [showCustomFields, setShowCustomFields] = useState(false);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showAddBilling, setShowAddBilling] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showPostalCode, setShowPostalCode] = useState(false);

  const [onEditTeamMember, setOnEditTeamMember] = useState(false);
  const [editTeamMember, setEditTeamMember] = useState("");

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

  const station1TeamMember = ["Ronald Richards", "Savannah Niguyen"];
  const station2TeamMember = ["Cody Fisher", "Albert Flores"];
  const currentPlan = "Free";

  return (
    <div className="bg-primary flex-1 flex flex-col overflow-y-scroll h-full">
      <DashNav />

      {onEditTeamMember && (
        <EditTeamMember
          value={editTeamMember}
          setOnEditTeamMember={setOnEditTeamMember}
          onEditTeamMember={onEditTeamMember}
        />
      )}

      {showResetPassword && (
        <ResetPassword
          showResetPassword={showResetPassword}
          setShowResetPassword={setShowResetPassword}
        />
      )}
      {showAddBilling && (
        <AddBillingMethod
          showAddBilling={showAddBilling}
          setShowAddBilling={setShowAddBilling}
        />
      )}

      <div
        className={`px-2 pb-5 flex-1 overflow-y-scroll lg:hidden flex flex-col dark:text-black ${
          (onEditTeamMember || showResetPassword || showAddBilling) &&
          "filter blur-sm"
        }`}
      >
        <div className="flex-1">
          <div className="flex justify-between mb-4 items-end">
            <div>
              <span className="opacity-80 block mb-1 text-xs">Cashex</span>
              <span className="text-2xl block">General settings</span>
            </div>
            <div className="text-center lg:hidden">
              <button
                type="button"
                style={selected === 10 ? { backgroundColor: theme } : {}}
                className={`p-2 text-xs font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
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
            {/* <div className="setting"> */}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                        placeholder="+7 890 123 23 88"
                        required
                      />
                      <label
                        htmlFor="password"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                      >
                        Password
                      </label>
                      <div className="flex items-center">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mr-3"
                          placeholder="Enter your password"
                          required
                        />
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke={`${color}`}
                            className="w-5 h-5 cursor-pointer mr-2"
                            onClick={() => setShowPassword(false)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke={`${color}`}
                            className="w-5 h-5 cursor-pointer mr-2"
                            onClick={() => setShowPassword(true)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
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
                          onClick={() => setShowResetPassword(true)}
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 px-2">
                    <ProfileLogo />
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
                  <span>Locations</span>
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
                    </div>
                  </div>
                </div>
                {/* location station */}

                <div>
                  <div
                    className={`flex items-center justify-between mb-4 px-2 ${
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
                    className={`${
                      !showStation || !showLocation ? "hidden" : "mb-6"
                    }`}
                  >
                    <div>
                      <div className="text-xs flex justify-between mb-4 px-2">
                        <span className="text-sm">Station 1</span>
                        <div className="flex">
                          {/* edit */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 cursor-pointer ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                          </svg>

                          {/* add */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 ${
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
                      {station1TeamMember.map((member, index) => (
                        <div
                          key={index}
                          className={`pt-4 pb-6 ${
                            index % 2 !== 0 ? "bg-[#F8F8F8]" : "px-2 "
                          }`}
                        >
                          <div className={`mb-8 ${index % 2 !== 0 && "px-2"}`}>
                            <div className="flex justify-between text-xs">
                              <span className="block opacity-40">name</span>
                              <div className="flex">
                                {/* edit */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  style={selected === 10 ? { fill: fill } : {}}
                                  className={`w-5 h-5 mr-1 cursor-pointer ${
                                    fill === "fill-theme0" ||
                                    fill === "fill-theme1"
                                      ? "fill-black"
                                      : fill
                                  }`}
                                  onClick={() => {
                                    setOnEditTeamMember(true);
                                    setEditTeamMember(
                                      station1TeamMember[index]
                                    );
                                  }}
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
                            <span className="text-sm block">{member}</span>
                          </div>

                          <div className={`${index % 2 !== 0 && "px-2"}`}>
                            <div className="flex opacity-40 text-xs justify-between mb-2">
                              <span>Station</span>
                              <span>Position</span>
                              <span>Role</span>
                            </div>
                            <div className="flex text-xs justify-between">
                              <span className="flex items-center">
                                <span className="mr-1"> Station 1</span>
                              </span>
                              <span className="flex items-center">
                                <span className="mr-1">Obstetrician</span>
                              </span>
                              <span className="flex items-center">
                                <span>Admin</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr className="mb-4" />
                    <div>
                      <div className="text-xs  flex justify-between mb-4 px-2">
                        <span className="text-sm">Station 2</span>
                        <div className="flex">
                          {/* edit */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 cursor-pointer ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                          </svg>

                          {/* add */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 ${
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
                      {station2TeamMember.map((member, index) => (
                        <div
                          key={index}
                          className={`pt-4 pb-6 ${
                            index % 2 !== 0 ? "bg-[#F8F8F8]" : "px-2 "
                          }`}
                        >
                          <div className={`mb-8 ${index % 2 !== 0 && "px-2"}`}>
                            <div className="flex justify-between text-xs">
                              <span className="block opacity-40">name</span>
                              <div className="flex">
                                {/* edit */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  style={selected === 10 ? { fill: fill } : {}}
                                  className={`w-5 h-5 mr-1 cursor-pointer ${
                                    fill === "fill-theme0" ||
                                    fill === "fill-theme1"
                                      ? "fill-black"
                                      : fill
                                  }`}
                                  onClick={() => {
                                    setOnEditTeamMember(true);
                                    setEditTeamMember(
                                      station2TeamMember[index]
                                    );
                                  }}
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
                            <span className="text-sm block">{member}</span>
                          </div>

                          <div className={`${index % 2 !== 0 && "px-2"}`}>
                            <div className="flex opacity-40 text-xs justify-between mb-2">
                              <span>Station</span>
                              <span>Position</span>
                              <span>Role</span>
                            </div>
                            <div className="flex text-xs justify-between">
                              <span className="flex items-center">
                                <span className="mr-1"> Station 1</span>
                              </span>
                              <span className="flex items-center">
                                <span className="mr-1">Obstetrician</span>
                              </span>
                              <span className="flex items-center">
                                <span>Admin</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
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
                      <div>
                        <span className="block mb-6">
                          Set the operating days
                        </span>
                      </div>
                      <OperatingHours />
                      <span className="text-xs lg:text-sm flex items-center mb-4">
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
                          Add the day with multiple hours
                        </span>
                      </span>

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
                  {/* approximate wait time */}
                  <div
                    className={`mb-4 ${
                      (!showLocation1 || !showLocation) && "hidden"
                    }`}
                  >
                    <div className={`flex items-center justify-between mb-4 `}>
                      <span className="flex items-center">
                        <span className="text-sm mr-5 whitespace-nowrap">
                          Approximate wait time
                        </span>
                      </span>
                      <span
                        className="flex items-center cursor-pointer"
                        onClick={() =>
                          setShowApproximateWaitTime(!showApproximateWaitTime)
                        }
                      >
                        {showApproximateWaitTime ? (
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
                        (!showApproximateWaitTime || !showLocation) && "hidden"
                      }`}
                    >
                      <div className="mb-6 text-xs">
                        <TimePicker text="Set approximate wait time in hours" />
                      </div>
                    </div>
                  </div>

                  {/* custom field */}

                  <div
                    className={`mb-4 ${
                      (!showLocation1 || !showLocation) && "hidden"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm">Custom fields</span>

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
                    <div
                      className={`${
                        (!showCustomFields || !showLocation) && "hidden"
                      }`}
                    >
                      <div className="flex">
                        <div className="flex-1 mr-3 text-xs">
                          <label
                            htmlFor="creditOrDebit"
                            className="block mb-2 font-medium text-gray-900 dark:text-black"
                          >
                            Postal code
                          </label>
                          <input
                            type={showPostalCode ? "text" : "password"}
                            id="creditOrDebit"
                            className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                            placeholder="Enter postal code..."
                            required
                          />
                        </div>
                        <div className="flex items-center text-xs">
                          {/* edit */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 cursor-pointer ${
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
                            className={`w-5 h-5 cursor-pointer mr-1 ${
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
                          {showPostalCode ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-5 h-5 cursor-pointer ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                              onClick={() => setShowPostalCode(false)}
                            >
                              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                              <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                              <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-5 h-5 cursor-pointer ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                              onClick={() => setShowPostalCode(true)}
                            >
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                              <path
                                fillRule="evenodd"
                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div className="flex text-xs">
                        <div className="flex-1 mr-3">
                          <label
                            htmlFor="phoneNumber"
                            className="block mb-2 font-medium text-gray-900 dark:text-black"
                          >
                            Phone number
                          </label>
                          <input
                            type={showPhoneNumber ? "text" : "password"}
                            id="phoneNumber"
                            className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                            placeholder="Enter phone number..."
                            required
                          />
                        </div>
                        <div className="flex items-center">
                          {/* edit */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 cursor-pointer ${
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
                            className={`w-5 h-5 cursor-pointer mr-1 ${
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
                          {showPhoneNumber ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-5 h-5 cursor-pointer ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                              onClick={() => setShowPhoneNumber(false)}
                            >
                              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                              <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                              <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-5 h-5 cursor-pointer ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                              onClick={() => setShowPhoneNumber(true)}
                            >
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                              <path
                                fillRule="evenodd"
                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <label
                        htmlFor="customField"
                        className="block mb-2 font-medium text-gray-900 dark:text-black text-xs"
                      >
                        Create custom field
                      </label>
                      <input
                        type="text"
                        id="customField"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4 text-xs"
                        placeholder="Enter title of field..."
                        required
                      />
                      <input
                        type="text"
                        id="customField"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4 text-xs"
                        placeholder="Enter placeholder for field..."
                        required
                      />

                      <span className="text-xs flex items-center my-4">
                        {/* add */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 mr-1 ${
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
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2 text-xs bg-white rounded-lg py-4 mb-4">
              <div className="flex items-center justify-between mb-6">
                <span className="text-base">Subscription and Billing</span>

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
              <div className={`${!showPaymentDetails && "hidden"} mb-4`}>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-base">Subscription</span>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowSubscription(!showSubscription)}
                  >
                    {showSubscription ? (
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
                    (!showSubscription || !showPaymentDetails) && "hidden"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm mb-2">
                      Current plan - {`${currentPlan}`}
                    </span>
                    <div className="flex">
                      <Link to="/dashboard/upgrade-profile">
                        <button
                          style={
                            selected === 10 ? { backgroundColor: theme } : {}
                          }
                          type="button"
                          className={`p-2 text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none mr-2 ${
                            theme === "bg-theme0" || theme === "bg-theme1"
                              ? "bg-black"
                              : theme
                          }`}
                        >
                          Upgrade plan
                        </button>
                      </Link>

                      <button
                        style={
                          selected === 10 ? { backgroundColor: theme } : {}
                        }
                        type="button"
                        className={`p-2 text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                          theme === "bg-theme0" || theme === "bg-theme1"
                            ? "bg-black"
                            : theme
                        }`}
                      >
                        Cancel subscription
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center justify-between mb-6 ${
                  !showPaymentDetails && "hidden"
                }`}
              >
                <span className="text-base">Billing</span>

                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowBilling(!showBilling)}
                >
                  {showBilling ? (
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
                  (!showBilling || !showPaymentDetails) && "hidden"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">Manage billing methods</span>
                  <button
                    style={selected === 10 ? { backgroundColor: theme } : {}}
                    type="button"
                    className={`p-2 text-xs font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                      theme === "bg-theme0" || theme === "bg-theme1"
                        ? "bg-black"
                        : theme
                    }`}
                    onClick={() => setShowAddBilling(!showAddBilling)}
                  >
                    Add a new Billing Method
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        {onEditTeamMember && (
          <EditTeamMember
            value={editTeamMember}
            setOnEditTeamMember={setOnEditTeamMember}
            onEditTeamMember={onEditTeamMember}
          />
        )}
        {showResetPassword && (
          <ResetPassword
            showResetPassword={showResetPassword}
            setShowResetPassword={setShowResetPassword}
          />
        )}

        {showAddBilling && (
          <AddBillingMethod
            showAddBilling={showAddBilling}
            setShowAddBilling={setShowAddBilling}
          />
        )}

        <div
          className={`lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col ${
            (onEditTeamMember || showResetPassword || showAddBilling) &&
            "filter blur-sm"
          }`}
        >
          <div className="flex-1">
            <Header text="General settings" />
            <div className="text-end mb-6">
              <button
                type="button"
                style={selected === 10 ? { backgroundColor: theme } : {}}
                className={`p-2 text-xs font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                  theme === "bg-theme0" || theme === "bg-theme1"
                    ? "bg-black"
                    : theme
                }`}
              >
                Save changes
              </button>
            </div>

            <div className="dark:text-black">
              <div className="mb-6 p-4 bg-white rounded-lg">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-bold">Business info</span>

                  <div className="flex items-center">
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
                </div>
                {showBusinessInfo && (
                  <>
                    {/*  */}
                    <div className="mb-6 flex flex-wrap gap-10">
                      <div className="w-[200px]">
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

                      <div className="w-[200px]">
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

                      <div className="w-[200px]">
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
                      <div className="w-[200px]">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                        >
                          Password
                        </label>
                        <div className="flex items-center">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mr-3"
                            placeholder="Enter your password"
                            required
                          />
                          {showPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke={`${color}`}
                              className="w-6 h-6 cursor-pointer mr-2"
                              onClick={() => setShowPassword(false)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke={`${color}`}
                              className="w-6 h-6 cursor-pointer mr-2"
                              onClick={() => setShowPassword(true)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                          {/* edit */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-6 h-6 cursor-pointer ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                            onClick={() => setShowResetPassword(true)}
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/*  */}

                    <div className="mb-6">
                      <ProfileLogo />
                    </div>
                    <BusinessInfoInput />
                  </>
                )}
              </div>

              <div className="p-4 bg-white rounded-lg mb-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-5 text-base">Locations</span>
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
                    <span className="text-base mr-5">Location 1</span>
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
                      </span>
                    </div>
                  </div>
                </div>
                {/* location station */}

                <div>
                  <div
                    className={`flex items-center justify-between mb-4 ${
                      (!showLocation1 || !showLocation) && "hidden"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="text-base mr-5">Station</span>
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
                    <div>
                      <div className="text-xs flex justify-between mb-4">
                        <span className="text-base">Station 1</span>
                        <div className="flex text-xs">
                          {/* edit */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 cursor-pointer ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                          </svg>

                          {/* add */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 ${
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
                      <span className="opacity-40 block text-xs mb-4">
                        member name
                      </span>

                      {station1TeamMember.map((member, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-6">
                            <span className="text-xs flex items-center w-[150px]">
                              <span className="mr-5 opacity-40">
                                {index + 1}
                              </span>
                              <span className="text-xs opacity-40">
                                {member}
                              </span>
                            </span>
                            <span className="text-xs flex items-center">
                              <span className="opacity-40 mr-1">
                                Station {index + 1}
                              </span>
                            </span>
                            <span className="text-xs flex items-center">
                              <span className="opacity-40 mr-1">
                                Obstetrician
                              </span>
                            </span>
                            <span className="text-xs flex items-center">
                              <span className="opacity-40 mr-1">Admin</span>
                            </span>
                            <span className="flex items-center">
                              {/* edit */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={selected === 10 ? { fill: fill } : {}}
                                onClick={() => {
                                  setOnEditTeamMember(true);
                                  setEditTeamMember(station1TeamMember[index]);
                                }}
                                className={`w-5 h-5 mr-1 cursor-pointer ${
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
                                style={selected === 10 ? { fill: fill } : {}}
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
                            </span>
                          </div>
                          {index !== teamMembers.length - 1 && (
                            <hr className="mb-4" />
                          )}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs flex justify-between mb-4">
                        <span className="text-base">Station 2</span>
                        <div className="flex text-xs">
                          {/* edit */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 cursor-pointer ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                          </svg>

                          {/* add */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-1 ${
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
                      <span className="opacity-40 block text-xs mb-4">
                        member name
                      </span>

                      {station2TeamMember.map((member, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-6">
                            <span className="text-xs flex items-center w-[150px]">
                              <span className="mr-5 opacity-40">
                                {index + 1}
                              </span>
                              <span className="text-xs opacity-40">
                                {member}
                              </span>
                            </span>
                            <span className="text-xs flex items-center">
                              <span className="opacity-40 mr-1">
                                Station {index + 1}
                              </span>
                            </span>
                            <span className="text-xs flex items-center">
                              <span className="opacity-40 mr-1">
                                Obstetrician
                              </span>
                            </span>
                            <span className="text-xs flex items-center">
                              <span className="opacity-40 mr-1">Admin</span>
                            </span>
                            <span className="flex items-center">
                              {/* edit */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={selected === 10 ? { fill: fill } : {}}
                                onClick={() => {
                                  setOnEditTeamMember(true);
                                  setEditTeamMember(station2TeamMember[index]);
                                }}
                                className={`w-5 h-5 mr-1 cursor-pointer ${
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
                                style={selected === 10 ? { fill: fill } : {}}
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
                            </span>
                          </div>
                          {index !== teamMembers.length - 1 && (
                            <hr className="mb-4" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* operating hours */}
                <div>
                  <div
                    className={`flex items-center justify-between mb-4 ${
                      (!showLocation1 || !showLocation) && "hidden"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="text-base mr-5">
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
                      (!showOperatingHours ||
                        !showLocation ||
                        !showLocation1) &&
                      "hidden"
                    }`}
                  >
                    <div className="mb-6 text-xs flex items-center">
                      <span className="block">Set the operating days</span>
                    </div>
                    <OperatingHours />
                    <span className="text-xs lg:text-sm flex items-center mb-4">
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
                        Add the day with multiple hours
                      </span>
                    </span>

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

                {/* approximate wait time */}
                <div
                  className={`${(!showLocation1 || !showLocation) && "hidden"}`}
                >
                  <div className={`flex items-center justify-between mb-4 `}>
                    <span className="flex items-center">
                      <span className="text-base mr-5 whitespace-nowrap">
                        Approximate wait time
                      </span>
                    </span>
                    <span
                      className="flex items-center cursor-pointer"
                      onClick={() =>
                        setShowApproximateWaitTime(!showApproximateWaitTime)
                      }
                    >
                      {showApproximateWaitTime ? (
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
                      (!showApproximateWaitTime || !showLocation) && "hidden"
                    }`}
                  >
                    <div className="mb-6 text-xs">
                      <TimePicker text="Set approximate wait time in hours" />
                    </div>
                  </div>
                </div>

                {/* custom fields */}
                <div
                  className={`${(!showLocation1 || !showLocation) && "hidden"}`}
                >
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

                  <div className={`${!showCustomFields && "hidden"} text-xs`}>
                    <div className="flex lg:w-[300px]">
                      <div className="flex-1 mr-3">
                        <label
                          htmlFor="creditOrDebit"
                          className="block mb-2 font-medium text-gray-900 dark:text-black"
                        >
                          Postal code
                        </label>
                        <input
                          type={showPostalCode ? "text" : "password"}
                          id="creditOrDebit"
                          className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                          placeholder="Enter postal code..."
                          required
                        />
                      </div>
                      <div className="flex items-center">
                        {/* edit */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 mr-1 cursor-pointer ${
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
                          className={`w-5 h-5 cursor-pointer mr-1 ${
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
                        {showPostalCode ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 cursor-pointer ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                            onClick={() => setShowPostalCode(false)}
                          >
                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 cursor-pointer ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                            onClick={() => setShowPostalCode(true)}
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
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
                          type={showPhoneNumber ? "text" : "password"}
                          id="phoneNumber"
                          className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                          placeholder="Enter phone number..."
                          required
                        />
                      </div>
                      <div className="flex items-center">
                        {/* edit */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 mr-1 cursor-pointer ${
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
                          className={`w-5 h-5 cursor-pointer mr-1 ${
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
                        {showPhoneNumber ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 cursor-pointer ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                            onClick={() => setShowPhoneNumber(false)}
                          >
                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 cursor-pointer ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                            onClick={() => setShowPhoneNumber(true)}
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
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
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="p-4 bg-white rounded-lg mb-6 text-xs">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base">Subscription and Billing</span>

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
                <div className={`${!showPaymentDetails && "hidden"} mb-4`}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-base">Subscription</span>
                    <span
                      className="flex items-center cursor-pointer"
                      onClick={() => setShowSubscription(!showSubscription)}
                    >
                      {showSubscription ? (
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
                      (!showSubscription || !showPaymentDetails) && "hidden"
                    }`}
                  >
                    <div className="flex justify-between items-center my-4">
                      <span className="text-sm mb-2">
                        Current plan - {`${currentPlan}`}
                      </span>
                      <div className="flex">
                        <Link to="/dashboard/upgrade-profile">
                          <button
                            style={
                              selected === 10 ? { backgroundColor: theme } : {}
                            }
                            type="button"
                            className={`p-2 text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none mr-2 ${
                              theme === "bg-theme0" || theme === "bg-theme1"
                                ? "bg-black"
                                : theme
                            }`}
                          >
                            Upgrade plan
                          </button>
                        </Link>

                        <button
                          style={
                            selected === 10 ? { backgroundColor: theme } : {}
                          }
                          type="button"
                          className={`p-2 text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                            theme === "bg-theme0" || theme === "bg-theme1"
                              ? "bg-black"
                              : theme
                          }`}
                        >
                          Cancel subscription
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex items-center justify-between mb-6 ${
                    !showPaymentDetails && "hidden"
                  }`}
                >
                  <span className="text-base">Billing</span>

                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowBilling(!showBilling)}
                  >
                    {showBilling ? (
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
                    (!showBilling || !showPaymentDetails) && "hidden"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Manage billing methods</span>
                    <button
                      style={selected === 10 ? { backgroundColor: theme } : {}}
                      type="button"
                      className={`p-2 text-xs font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                        theme === "bg-theme0" || theme === "bg-theme1"
                          ? "bg-black"
                          : theme
                      }`}
                      onClick={() => setShowAddBilling(!showAddBilling)}
                    >
                      Add a new Billing Method
                    </button>
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

export default Settings;
