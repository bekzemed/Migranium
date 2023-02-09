import { useState } from "react";
import { useNavigate } from "react-router-dom";
import downArrow from "../assets/down.svg";
import filter from "../assets/filter.svg";
import time from "../assets/time.svg";
import user from "../assets/user.svg";
import AddCustomer from "../components/AddCustomer";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import WaitlistButtons from "../components/WaitlistButtons";
import WaitListDetail from "../components/WaitListDetail";
import WaitListInfo from "../components/WaitListInfo";
import WaitListOptions from "../components/WaitListOptions";
import { useAppSelector } from "../redux/hooks";

const waitlist = [1];
const waitUsers = [
  {
    id: 1,
    name: "Marakinyo",
    station: "Station 1",
    status: "Serving",
    background: "bg-[#FDD924]",
  },
  {
    id: 2,
    name: "Jacko",
    station: "Station 2",
    status: "Done",
    background: "bg-[#6ACA57]",
  },
  {
    id: 3,
    name: "Usaeyno",
    station: "Station 1",
    status: "Cancelled",
    background: "bg-[#FF0000]",
  },
];

const WaitList = () => {
  const navigate = useNavigate();
  const [showWaitUser, setShowWaitUser] = useState(false);
  const [showWaitUserInfo, setShowWaitUserInfo] = useState(false);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [showOptions, setOptions] = useState(false);
  const [showOptionsIndex, setOptionsIndex] = useState(-1);
  const [waitUserInfo, setWaitUserInfo] = useState({});
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);

  return (
    <div className="bg-primary flex-1 flex flex-col overflow-y-scroll">
      <DashNav />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black relative">
        <div className="flex-1">
          <span className="opacity-80 block mb-1 text-xs">Cashex</span>
          <span className="text-2xl block mb-4">Waitlist</span>

          <div className="flex text-xs justify-between mb-5">
            <div className="px-5 py-1 rounded-full border border-gray-300 bg-white flex items-center">
              <img src={user} alt="User" className="mr-1" />
              <span>0</span>
            </div>

            <div className="px-5 py-1 rounded-full border border-gray-300 bg-white flex items-center">
              <img src={time} alt="Time" className="mr-1" />
              <span>0 hours</span>
            </div>

            <div className="px-5 py-1 rounded-full border border-gray-300 bg-white flex items-center">
              <span className="mr-1">open</span>
              <img src={downArrow} alt="Down arrow" />
            </div>
            <div className="p-2 rounded-full border border-gray-300 bg-white flex items-center">
              <img src={filter} alt="Down arrow" />
            </div>
          </div>

          {showWaitUser && (
            <WaitListDetail
              showWaitUser={showWaitUser}
              setShowWaitUser={setShowWaitUser}
            />
          )}

          {showAddCustomer && (
            <AddCustomer
              showAddCustomer={showAddCustomer}
              setShowAddCustomer={setShowAddCustomer}
            />
          )}

          {showWaitUserInfo && (
            <WaitListInfo
              showWaitUserInfo={showWaitUserInfo}
              setShowWaitUserInfo={setShowWaitUserInfo}
              data={waitUserInfo}
            />
          )}

          {waitlist.length ? (
            <div
              className={`${
                (showWaitUser || showWaitUserInfo || showAddCustomer) &&
                "filter blur-sm"
              }`}
            >
              <div className="bg-white rounded-lg px-2 py-4 mb-6">
                <span className="block mb-4">Next visitor is</span>
                <div className="text-xs flex justify-between">
                  <span>Marakinyo</span>
                  <div className="flex items-center">
                    <span className="opacity-40 px-5 border-x-2">Clinic</span>
                    <span className="opacity-40 px-5">2.2 days</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={selected === 10 ? { fill: fill } : {}}
                      className={`w-[30px] ${
                        fill === "fill-theme0" || fill === "fill-theme1"
                          ? "fill-black"
                          : fill
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={selected === 10 ? { fill: fill } : {}}
                      className={`w-[30px] ${
                        fill === "fill-theme0" || fill === "fill-theme1"
                          ? "fill-black"
                          : fill
                      }`}
                      onClick={() => {
                        setShowWaitUser(true);
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <WaitlistButtons />

              <div className="bg-white rounded-lg px-2 py-4 mb-4">
                <table className="w-full mb-4">
                  <thead>
                    <tr className="opacity-40 dark:text-black text-xs border-b border-gray-300">
                      <th></th>
                      <th className="pb-5">Name</th>
                      <th className="pb-5">Status</th>
                      <th className="pb-5">Wait</th>
                      <th className="pb-5"></th>
                    </tr>
                  </thead>
                  <tbody className="text:black dark:text-black text-xs">
                    {waitUsers.map((user, index) => (
                      <tr
                        className={`text-center ${
                          index + 1 !== waitUsers.length && "border-b"
                        } border-gray-300 py-4 relative`}
                        key={index}
                      >
                        <th className="opacity-40 py-4">{index + 1}</th>
                        <td className="py-4">{user.name}</td>
                        <td className="py-4 ">
                          <span
                            className={`py-1 px-4 rounded-full ${user.background}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4 opacity-40">2.2 days</td>
                        <td className="py-4 flex justify-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-6 h-6 mr-2 ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-6 h-6 mr-2 ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                            onClick={() => {
                              setShowWaitUserInfo(true);
                              setWaitUserInfo(user);
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-6 h-6 ${
                              fill === "fill-theme0" || fill === "fill-theme1"
                                ? "fill-black"
                                : fill
                            }`}
                            onClick={() => {
                              setOptions(!showOptions);
                              setOptionsIndex(user.id);
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </td>
                        {showOptions && showOptionsIndex === user.id && (
                          <WaitListOptions />
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg px-2 py-4 mb-6">
              <span className="block text-center text-xs pb-4">
                Your waitlist is empty
              </span>
              <hr className="pb-4" />
            </div>
          )}
        </div>

        <PoweredBy />
      </div>
      <div
        style={selected === 10 ? { backgroundColor: theme } : {}}
        className={`flex justify-center w-12 h-12 absolute right-2 lg:right-4 2xl:right-8 bottom-20 lg:bottom-4 shadow-lg z-30 items-center rounded-full px-3 py-2 focus-visible:outline-none focus:outline-none cursor-pointer ${
          theme === "bg-theme0" || theme === "bg-theme1" ? "bg-black" : theme
        }`}
        onClick={() => setShowAddCustomer(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#fff"
          className="w-5 h-5"
        >
          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />
        {showWaitUser && (
          <WaitListDetail
            showWaitUser={showWaitUser}
            setShowWaitUser={setShowWaitUser}
          />
        )}
        {showAddCustomer && (
          <AddCustomer
            showAddCustomer={showAddCustomer}
            setShowAddCustomer={setShowAddCustomer}
          />
        )}

        <div
          className={`lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col ${
            (showWaitUser || showAddCustomer) && "filter blur-sm"
          }`}
        >
          <div className="flex-1">
            <Header text="Waitlist" />

            <div className="mb-10 flex items-center justify-between dark:text-black">
              <div className="flex text-xs justify-between">
                <div className="px-8 py-1 rounded-full border border-gray-300 bg-white flex items-center mr-5 cursor-pointer">
                  <img src={user} alt="User" className="mr-2" />
                  <span>0</span>
                </div>

                <div className="px-8 py-1 rounded-full border border-gray-300 bg-white flex items-center mr-5 cursor-pointer">
                  <img src={time} alt="Time" className="mr-2" />
                  <span>0 hours</span>
                </div>

                <div className="px-8 py-1 rounded-full border border-gray-300 bg-white flex items-center cursor-pointer">
                  <span className="mr-2">open</span>
                  <img src={downArrow} alt="Down arrow" />
                </div>
              </div>

              <div className="px-8 py-1 text-xs rounded-full border border-gray-300 bg-white flex items-center cursor-pointer">
                <img src={filter} alt="Down arrow" className="mr-2" />
                <span>Filters</span>
              </div>
            </div>

            {waitlist.length ? (
              <div>
                <div className="bg-white rounded-lg px-2 py-4 mb-6 dark:text-black">
                  <span className="block mb-4">Next visitor is</span>
                  <div className="text-xs flex justify-between">
                    <div className="flex items-center">
                      <span className="mr-3">Marakinyo</span>
                      <div className="flex items-center">
                        {/* chat */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-6 h-6 mr-2 ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                            clipRule="evenodd"
                          />
                        </svg>

                        {/* message */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-6 h-6 mr-2 ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>

                        {/* phone */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-6 h-6 ${
                            fill === "fill-theme0" || fill === "fill-theme1"
                              ? "fill-black"
                              : fill
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="opacity-40">Clinic</span>
                    <span className="opacity-40">2.2 days</span>
                    <div className="cursor-pointer flex items-center justify-end">
                      {/* right */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={selected === 10 ? { fill: fill } : {}}
                        className={`w-6 h-6 mr-2 ${
                          fill === "fill-theme0" || fill === "fill-theme1"
                            ? "fill-black"
                            : fill
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {/* info */}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={selected === 10 ? { fill: fill } : {}}
                        className={`w-6 h-6 mr-2 ${
                          fill === "fill-theme0" || fill === "fill-theme1"
                            ? "fill-black"
                            : fill
                        }`}
                        onClick={() => {
                          setShowWaitUser(true);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {/* edit */}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={selected === 10 ? { fill: fill } : {}}
                        className={`w-6 h-6 mr-2 ${
                          fill === "fill-theme0" || fill === "fill-theme1"
                            ? "fill-black"
                            : fill
                        }`}
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>

                      {/* up and down arrow */}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={selected === 10 ? { fill: fill } : {}}
                        className={`w-6 h-6 mr-2 ${
                          fill === "fill-theme0" || fill === "fill-theme1"
                            ? "fill-black"
                            : fill
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {/* delete */}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={selected === 10 ? { fill: fill } : {}}
                        className={`w-6 h-6 ${
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
                </div>

                <WaitlistButtons />

                <div className="bg-white rounded-lg px-2 py-4">
                  <table className="w-full mb-4">
                    <thead>
                      <tr className="dark:text-black text-xs border-b border-gray-300">
                        <th></th>
                        <th className="pb-5 flex opacity-40">Name</th>
                        <th className="pb-5 opacity-40">Service</th>
                        <th className="pb-5 opacity-40">Wait</th>
                        <th className="pb-5 opacity-40">Station</th>
                        <th className="pb-5 opacity-40">Status</th>
                        <th className="pb-5 flex justify-end opacity-1">
                          <span
                            style={
                              selected === 10 ? { backgroundColor: theme } : {}
                            }
                            className={`rounded-full px-4 py-1 text-white ${
                              theme === "bg-theme0" || theme === "bg-theme1"
                                ? "bg-black"
                                : theme
                            }`}
                          >
                            Clear queue
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text:black dark:text-black text-xs">
                      {waitUsers.map((user, index) => (
                        <tr
                          className={`text-center ${
                            index + 1 !== waitUsers.length && "border-b"
                          } border-gray-300 py-4 cursor-pointer relative`}
                          key={index}
                        >
                          <th className="opacity-40 py-4">{index + 1}</th>
                          <td className="py-4 w-[170px]">
                            <div className="flex items-center">
                              <span className="mr-3 flex w-[60px]">
                                {user.name}
                              </span>
                              {/* chat */}

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                style={selected === 10 ? { fill: fill } : {}}
                                className={`w-5 h-5 mr-2 ${
                                  fill === "fill-theme0" ||
                                  fill === "fill-theme1"
                                    ? "fill-black"
                                    : fill
                                }`}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                                  clipRule="evenodd"
                                />
                              </svg>

                              {/* message */}

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                style={selected === 10 ? { fill: fill } : {}}
                                className={`w-5 h-5 mr-2 ${
                                  fill === "fill-theme0" ||
                                  fill === "fill-theme1"
                                    ? "fill-black"
                                    : fill
                                }`}
                              >
                                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                              </svg>

                              {/* phone */}

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                style={selected === 10 ? { fill: fill } : {}}
                                className={`w-5 h-5 ${
                                  fill === "fill-theme0" ||
                                  fill === "fill-theme1"
                                    ? "fill-black"
                                    : fill
                                }`}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </td>
                          <td className="py-4 opacity-40">Clinic</td>
                          <td className="py-4 opacity-40">2.2 days</td>
                          <td className="py-4 opacity-40">{user.station}</td>
                          <td className="py-4 ">
                            <span
                              className={`py-1 px-4 rounded-full ${user.background}`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="py-4 flex justify-end">
                            {/* bell */}
                            <svg
                              style={selected === 10 ? { fill: fill } : {}}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className={`w-6 h-6 mr-2 cursor-pointer ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {/* right */}

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-6 h-6 mr-2 ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clipRule="evenodd"
                              />
                            </svg>

                            {/* info */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-6 h-6 mr-2 ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                              onClick={() =>
                                navigate(`${user.id}`, {
                                  state: waitUsers.find(
                                    (users) => users.id === user.id
                                  ),
                                })
                              }
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                              />
                            </svg>

                            {/* option */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-6 h-6 ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                              onClick={() => {
                                setOptions(!showOptions);
                                setOptionsIndex(user.id);
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </td>
                          {showOptions && showOptionsIndex === user.id && (
                            <WaitListOptions />
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg px-2 py-4 mb-6">
                <span className="block text-center text-xs pb-4">
                  Your waitlist is empty
                </span>
                <hr className="pb-4" />
              </div>
            )}
          </div>
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default WaitList;
