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
import LocationInput from "../components/LocationInput";
import LocationLogo from "../components/LocationLogo";
import OperatingHours from "../components/OperatingHours";
import Stations from "../components/Stations";
import TimePicker from "../components/TimePicker";

const options = {
  title: "Operating Days",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-white dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "text-red-500",
    input:
      "bg-white rounded-full cursor-pointer dark:text-black dark:bg-white dark:border-gray-300 text-xs py-2",
    inputIcon: "",
    selected: "bg-secondary",
  },
  icons: {
    prev: () => (
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
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    ),

    next: () => (
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
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    ),
  },
  datepickerClassNames: "left-1/2 top-1/2 date-picker",
  defaultDate: new Date(),
  language: "en",
};

const Settings = () => {
  const [show, onShow] = useState(false);
  const [showLocation1, setShowLocation1] = useState(false);
  const [showLocation2, setShowLocation2] = useState(false);
  const [fromDate, setFromDate] = useState(false);
  const [toDate, setToDate] = useState(false);
  const [dateMultipleHours, setDateMultipleHours] = useState(false);

  const handleFromChange = (selectedDate: Date) => console.log(selectedDate);
  const handleFromClose = (state: boolean) => setFromDate(state);

  const handleToChange = (selectedDate: Date) => console.log(selectedDate);
  const handleToClose = (state: boolean) => setToDate(state);

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

        <div className="bg-white rounded-lg py-4 mb-4">
          <span className="block text-sm pb-5 px-2">Business info</span>
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
            <input
              type="text"
              id="businessType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
              placeholder="Health"
              required
            />

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

          <div className="mb-4 px-2">
            <LocationLogo />
          </div>

          <BusinessInfoInput />

          <hr className="mb-4 px-2" />
          <LocationInput
            location="Location 1"
            showLocation={showLocation1}
            setShowLocation={() => setShowLocation1(!showLocation1)}
          />

          <hr className="mb-4 px-2" />

          <LocationInput
            location="Location 2"
            showLocation={showLocation2}
            setShowLocation={() => setShowLocation2(!showLocation2)}
          />

          <div className="mb-6 px-2">
            <span className="text-sm mb-6 block">Location stations</span>
            <div className="text-xs opacity-80 flex justify-between mb-4">
              <span>Station 1</span>
              <div className="flex">
                <img src={edit} alt="Edit" className="mr-1 cursor-pointer" />
                <img src={add} alt="Add" className="mr-1 cursor-pointer" />
                <img src={deleteIcon} alt="Delete" className="cursor-pointer" />
              </div>
            </div>
            <hr className="mb-4" />
            <div className="text-xs opacity-80 flex justify-between mb-4">
              <span>Station 2</span>
              <div className="flex">
                <img src={edit} alt="Edit" className="mr-1 cursor-pointer" />
                <img src={add} alt="Add" className="mr-1 cursor-pointer" />
                <img src={deleteIcon} alt="Delete" className="cursor-pointer" />
              </div>
            </div>
            <hr className="mb-4" />
            <div className="text-xs opacity-80 flex justify-between">
              <span>Station 3</span>
              <div className="flex">
                <img src={edit} alt="Edit" className="mr-1 cursor-pointer" />
                <img src={add} alt="Add" className="mr-1 cursor-pointer" />
                <img src={deleteIcon} alt="Delete" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-sm mb-6 block px-2">
              Location team members
            </span>

            <div className="mb-10 px-2">
              <div className="flex justify-between opacity-80 mb-2 text-xs">
                <span className="block">member name</span>
                <div className="flex">
                  <img src={edit} alt="Edit" className="mr-1 cursor-pointer" />
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <span className="text-sm block mb-4">Ronald Richards</span>

              <div className="flex opacity-80 text-xs justify-between mb-2">
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
              <div className="flex justify-between opacity-80 mb-2 text-xs px-2">
                <span className="block">member name</span>
                <div className="flex">
                  <img src={edit} alt="Edit" className="mr-1 cursor-pointer" />
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <span className="text-sm block mb-4 px-2">Savannah Niguyen</span>

              <div className="flex opacity-80 text-xs justify-between mb-2 px-2">
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
              <div className="flex justify-between opacity-80 mb-2 text-xs">
                <span className="block">member name</span>
                <div className="flex">
                  <img src={edit} alt="Edit" className="mr-1 cursor-pointer" />
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <span className="text-sm block mb-4">Cody Fisher</span>

              <div className="flex opacity-80 text-xs justify-between mb-2">
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
              <div className="flex justify-between opacity-80 mb-2 text-xs px-2">
                <span className="block">member name</span>
                <div className="flex">
                  <img src={edit} alt="Edit" className="mr-1 cursor-pointer" />
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <span className="text-sm block mb-4 px-2">Albert Flores</span>

              <div className="flex opacity-80 text-xs justify-between mb-2 px-2">
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

          <div className="px-2 mb-6">
            <span className="text-sm mb-4 block">Operating hours and days</span>
            <span className="text-xs block mb-4">Set the operating days</span>
            <div className="flex mb-4">
              <span className="flex items-center text-xs mr-2">
                <span className="mr-2">from</span>
                <Datepicker
                  options={options}
                  onChange={handleFromChange}
                  show={fromDate}
                  setShow={handleFromClose}
                />
              </span>
              <span className="flex items-center text-xs">
                <span className="mr-2">to</span>
                <Datepicker
                  options={options}
                  onChange={handleToChange}
                  show={toDate}
                  setShow={handleToClose}
                />
              </span>
            </div>
            <span className="text-xs block mb-4">Set the operating hours</span>

            <div className="flex items-center justify-between text-xs mb-6">
              <TimePicker text="from" />
              <TimePicker text="to" />
            </div>

            <OperatingHours />

            <span className="text-xs mb-6 block">
              <span className="mr-2 block mb-4">
                Set the day with multiple hours
              </span>
              <div className="w-1/2">
                <Datepicker
                  options={options}
                  onChange={handleMultipleDateHours}
                  show={dateMultipleHours}
                  setShow={handleMultipleDateHoursClose}
                />
              </div>
            </span>

            <div className="flex items-center justify-between text-xs mb-6">
              <TimePicker text="from" />
              <TimePicker text="to" />
            </div>
          </div>

          <hr className="mx-2 mb-6" />

          <div className="mb-6 px-2">
            <div className="mb-4">
              <span className="block mb-4 text-sm">Add new location</span>
              <div className="mb-4 px-2">
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
          <hr className="mx-2 mb-6" />

          <div className="mb-6 px-2 text-xs">
            <span className="block text-sm mb-4">
              Set approximate wait time
            </span>
            <TimePicker text="Set approximate wait time in minutes" />
          </div>

          <hr className="mx-2 mb-6" />

          <div className="mb-6 px-2 text-xs">
            <span className="block text-sm mb-6">Custom fields</span>
            <div className="flex ">
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

          <hr className="mx-2 mb-6" />

          <div className="mb-6 px-2 text-xs">
            <span className="block text-sm mb-4">Payment details</span>
            <div className="">
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

          <div className="bg-white rounded-lg px-4 py-4 mb-6 dark:text-black">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-xl">Business info</span>
              <button
                type="button"
                className="bg-secondary text-white rounded-full focus-visible:outline-none focus:outline-none text-xs"
              >
                Save changes
              </button>
            </div>

            {/*  */}
            <div className="mb-6 px-2 flex">
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
                <input
                  type="text"
                  id="businessType"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                  placeholder="Health"
                  required
                />
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

            <div className="mb-6 px-2">
              <LocationLogo />
            </div>
            <BusinessInfoInput />
            <hr className="mx-2 mb-6" />

            <LocationInput
              location="Location 1"
              showLocation={showLocation1}
              setShowLocation={() => setShowLocation1(!showLocation1)}
            />

            <hr className="mb-6 mx-2" />

            <LocationInput
              location="Location 2"
              showLocation={showLocation2}
              setShowLocation={() => setShowLocation2(!showLocation2)}
            />

            {/*  */}
            <div className="px-2 mb-10">
              <span className="text-sm mb-6 block">Location stations</span>
              <span className="opacity-40 block text-sm mb-4">
                Station name
              </span>

              <Stations text="Station 1" />
              <hr className="mb-4" />
              <Stations text="Station 2" />
              <hr className="mb-4" />
              <Stations text="Station 3" />
            </div>
            {/*  */}
            <div className="px-2 mb-10">
              <span className="text-sm mb-6 block">Location team members</span>
              <span className="opacity-40 block text-xs mb-4">member name</span>

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
            {/*  */}
            <div className="px-2 mb-6">
              <span className="text-sm mb-6 block">
                Operating hours and days
              </span>
              <div className="mb-6 text-xs flex items-center">
                <div className="mr-6">
                  <span className="block mb-4">Set the operating days</span>
                  <div className="flex">
                    <span className="flex items-center mr-2">
                      <span className="mr-2">from</span>
                      <Datepicker
                        options={options}
                        onChange={handleFromChange}
                        show={fromDate}
                        setShow={handleFromClose}
                      />
                    </span>
                    <span className="flex items-center">
                      <span className="mr-2">to</span>
                      <Datepicker
                        options={options}
                        onChange={handleToChange}
                        show={toDate}
                        setShow={handleToClose}
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block mb-4">Set the operating hours</span>
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
                  <span className="block mb-4">Set the operating hours</span>
                  <span className="flex items-center mr-2">
                    <Datepicker
                      options={options}
                      onChange={handleFromChange}
                      show={fromDate}
                      setShow={handleFromClose}
                    />
                  </span>
                </div>
              </div>
              <hr className="mb-6" />
            </div>
            {/*  */}
            <div className="mb-6">
              <span className="block mb-4 text-sm white">Add new location</span>
              <div className="px-2 flex items-center">
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
            <hr className="mb-6" />

            {/*  */}

            <div className="mb-6 px-2 text-xs">
              <span className="block text-sm mb-4">
                Set approximate wait time
              </span>
              <TimePicker text="Set approximate wait time in minutes" />
            </div>
            <hr className="mb-6" />
            {/*  */}
            <div className="mb-6 px-2 text-xs">
              <span className="block text-sm mb-6">Custom fields</span>
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
            <hr className="mb-6" />
            {/*  */}
            <div className="mb-6 px-2 text-xs">
              <span className="block text-sm mb-4">Payment details</span>
              <div>
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
