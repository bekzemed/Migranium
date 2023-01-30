import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import bell from "../assets/bell.svg";
import upAndDown from "../assets/upAndDown.svg";
import user from "../assets/user.svg";
import {
  DashboardDesktop,
  DashboardMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import WaitlistButtons from "../components/WaitlistButtons";
import WaitListDetail from "../components/WaitListDetail";
import WaitListInfo from "../components/WaitListInfo";

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
  const [show, onShow] = useState(false);
  const [showWaitUser, setShowWaitUser] = useState(false);
  const [showWaitUserInfo, setShowWaitUserInfo] = useState(false);
  const [showOptions, setOptions] = useState(false);
  const [showOptionsIndex, setOptionsIndex] = useState(-1);
  const [waitUserInfo, setWaitUserInfo] = useState({});

  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black">
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
              showWaitUser || showWaitUserInfo ? "filter blur-sm" : ""
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
                    <th className="pb-5">Service</th>
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
                      <td className="py-4 opacity-40">Clinic</td>
                      <td className="py-4 opacity-40">2.2 days</td>
                      <td className="py-4 flex justify-end">
                        <img src={right} alt="Right" className="mr-3" />
                        <img
                          src={info}
                          alt="Info"
                          onClick={() => {
                            setShowWaitUserInfo(true);
                            setWaitUserInfo(user);
                          }}
                        />
                      </td>
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

      <div className="text-xs w-screen block lg:hidden">
        <DashboardMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block">
          <Header text="Waitlist" />

          {showWaitUser && (
            <WaitListDetail
              showWaitUser={showWaitUser}
              setShowWaitUser={setShowWaitUser}
            />
          )}

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
                        <span className="rounded-full px-4 py-1 bg-secondary text-white">
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
                            <img src={message} alt="Message" className="mr-2" />
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
                          <div className="absolute bg-white rounded-lg w-[140px] z-30 right-0 shadow-lg p-4 border border-gray-300">
                            <div className="flex flex-col">
                              <div className="flex text-xs items-center mb-3">
                                {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#0070BA"
                                  className="w-5 h-5 mr-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                                    clipRule="evenodd"
                                  />
                                </svg> */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#0070BA"
                                  className="w-5 h-5 mr-3"
                                >
                                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                                No-show
                              </div>
                              <div className="flex text-xs items-center mb-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#0070BA"
                                  className="w-5 h-5 mr-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#0070BA"
                                  className="w-5 h-5 mr-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd"
                                  />
                                </svg> */}
                                Chat
                              </div>
                              <div className="flex text-xs items-center mb-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#0070BA"
                                  className="w-5 h-5 mr-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Move
                              </div>
                              <div className="flex text-xs items-center mb-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#0070BA"
                                  className="w-5 h-5 mr-3"
                                >
                                  <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                                </svg>
                                {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#0070BA"
                                  className="w-5 h-5 mr-3"
                                >
                                  <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                                </svg> */}
                                Edit
                              </div>
                              <div className="flex text-xs items-center">
                                <img src={trash} alt="" className="mr-3.5" />
                                {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#EF2C49"
                                  className="w-5 h-5 mr-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                                    clipRule="evenodd"
                                  />
                                </svg> */}
                                <span className="text-[#EF2C49]">Remove</span>
                              </div>
                            </div>
                          </div>
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
      </div>
    </div>
  );
};

export default WaitList;
