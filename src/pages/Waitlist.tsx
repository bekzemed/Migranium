import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bell from "../assets/bell.svg";
import chat from "../assets/chat.svg";
import downArrow from "../assets/down.svg";
import edit from "../assets/edit-small.svg";
import filter from "../assets/filter.svg";
import info from "../assets/info-outline.svg";
import message from "../assets/message.svg";
import phone from "../assets/phone.svg";
import right from "../assets/right.svg";
import time from "../assets/time.svg";
import trash from "../assets/trash.svg";
import upAndDown from "../assets/upAndDown.svg";
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
                    <img
                      src={right}
                      alt="Right"
                      className="pr-3 cursor-pointer"
                    />
                    <img
                      src={info}
                      alt="Info"
                      className="cursor-pointer"
                      onClick={() => {
                        setShowWaitUser(true);
                      }}
                    />
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
                          <img src={right} alt="Right" className="mr-2" />
                          <img
                            src={info}
                            alt="Info"
                            className="mr-2"
                            onClick={() => {
                              setShowWaitUserInfo(true);
                              setWaitUserInfo(user);
                            }}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#0070BA"
                            className="w-6 h-6 "
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
        className={`flex justify-center w-12 h-12 absolute right-2 lg:right-4 2xl:right-8 bottom-20 shadow-lg z-30 items-center rounded-full px-3 py-2 focus-visible:outline-none focus:outline-none cursor-pointer ${
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
                        <img src={chat} alt="Chat" className="mr-3" />
                        <img src={message} alt="Message" className="mr-3" />
                        <img src={phone} alt="Phone" />
                      </div>
                    </div>
                    <span className="opacity-40">Clinic</span>
                    <span className="opacity-40">2.2 days</span>
                    <div className="cursor-pointer flex items-center justify-end">
                      <img src={right} alt="Right" className="mr-3" />
                      <img
                        src={info}
                        alt="Info"
                        className="mr-3"
                        onClick={() => {
                          setShowWaitUser(true);
                        }}
                      />

                      <img src={edit} alt="Edit" className="mr-3" />
                      <img src={upAndDown} alt="UpAndDown" className="mr-3" />

                      <img src={trash} alt="Trash" />
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
                            <div className="flex">
                              <span className="mr-3 flex w-[60px]">
                                {user.name}
                              </span>
                              <img src={chat} alt="Chat" className="mr-2" />
                              <img
                                src={message}
                                alt="Message"
                                className="mr-2"
                              />
                              <img src={phone} alt="Phone" />
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
                          <td className="py-4 flex justify-end ">
                            <img src={bell} alt="Bell" className="mr-3" />
                            <img src={right} alt="" className="mr-3" />
                            <img
                              src={info}
                              alt=""
                              className="mr-3"
                              onClick={() =>
                                navigate(`${user.id}`, {
                                  state: waitUsers.find(
                                    (users) => users.id === user.id
                                  ),
                                })
                              }
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#0070BA"
                              className="w-6 h-6 "
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
