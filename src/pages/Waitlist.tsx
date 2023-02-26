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
  const color = useAppSelector((state) => state.theme.color);

  return (
    <div className="bg-primary flex-1 flex flex-col h-full relative">
      <DashNav />

      <div className="px-2 pb-5 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black">
        <div className="flex-1 relative pb-4">
          <span className="opacity-80 block mb-1 text-xs">Cashex</span>
          <span className="text-2xl block mb-4">Waitlist</span>

          <div className="flex text-xs justify-between mb-3">
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
              <img src={filter} alt="Filter" />
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
              <div className="bg-white rounded-lg px-2 py-4 mb-3">
                <span className="block mb-4">Next visitor is</span>
                <div className="text-xs flex justify-between">
                  <span>Marakinyo</span>
                  <div className="flex items-center">
                    <span className="opacity-40 px-5 border-x-2">Clinic</span>
                    <span className="opacity-40 px-5">2.2 days</span>

                    {/* right */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={`${color}`}
                      fill="#fff"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    {/* info */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={`${color}`}
                      fill="#fff"
                      className="w-6 h-6"
                      onClick={() => {
                        setShowWaitUser(true);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <WaitlistButtons />

              <div className="bg-white rounded-lg px-2 py-4">
                <table className="w-full">
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
                        } border-gray-300 py-4`}
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
                          {/* right */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke={`${color}`}
                            fill="#fff"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          {/* info */}

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke={`${color}`}
                            fill="#fff"
                            className="w-6 h-6 mr-2"
                            onClick={() => {
                              setShowWaitUserInfo(true);
                              setWaitUserInfo(user);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                          </svg>

                          {/* option */}

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke={`${color}`}
                            fill="#fff"
                            className="w-6 h-6"
                            onClick={() => {
                              setOptions(!showOptions);
                              setOptionsIndex(user.id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
              <div
                style={selected === 10 ? { backgroundColor: theme } : {}}
                className={`flex justify-center w-12 h-12 absolute right-0 lg:right-4 2xl:right-8 bottom-0 lg:bottom-4 shadow-lg z-30 items-center rounded-full px-3 py-2 focus-visible:outline-none focus:outline-none cursor-pointer ${
                  theme === "bg-theme0" || theme === "bg-theme1"
                    ? "bg-black"
                    : theme
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

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex relative">
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
          style={selected === 10 ? { backgroundColor: theme } : {}}
          className={`flex justify-center w-12 h-12 absolute right-4 2xl:right-8 bottom-4 shadow-lg z-30 items-center rounded-full px-3 py-2 focus-visible:outline-none focus:outline-none cursor-pointer ${
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
                          strokeWidth="1.5"
                          stroke={`${color}`}
                          fill="#fff"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                          />
                        </svg>

                        {/* message */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke={`${color}`}
                          fill="#fff"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>

                        {/* phone */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke={`${color}`}
                          fill="#fff"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
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
                        strokeWidth="1.5"
                        stroke={`${color}`}
                        fill="#fff"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      {/* info */}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`${color}`}
                        fill="#fff"
                        className="w-6 h-6 mr-2"
                        onClick={() => {
                          setShowWaitUser(true);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>

                      {/* edit */}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={`${color}`}
                        fill="#fff"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
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
                        strokeWidth="1.5"
                        stroke={`${color}`}
                        fill="#fff"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
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
                          } border-gray-300 py-4 cursor-pointer`}
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
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke={`${color}`}
                                fill="#fff"
                                className="w-5 h-5 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                />
                              </svg>

                              {/* message */}

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke={`${color}`}
                                fill="#fff"
                                className="w-5 h-5 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                              </svg>

                              {/* phone */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke={`${color}`}
                                fill="#fff"
                                className="w-5 h-5 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
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
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke={`${color}`}
                              fill="#fff"
                              className="w-5 h-5 mr-2 cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                              />
                            </svg>

                            {/* right */}

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke={`${color}`}
                              fill="#fff"
                              className="w-5 h-5 mr-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>

                            {/* info */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke={`${color}`}
                              fill="#fff"
                              className="w-5 h-5 mr-2"
                              onClick={() =>
                                navigate(`${user.id}`, {
                                  state: waitUsers.find(
                                    (users) => users.id === user.id
                                  ),
                                })
                              }
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                              />
                            </svg>

                            {/* option */}

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke={`${color}`}
                              fill="#fff"
                              className="w-5 h-5"
                              onClick={() => {
                                setOptions(!showOptions);
                                setOptionsIndex(user.id);
                              }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
