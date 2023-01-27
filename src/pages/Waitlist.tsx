import { useState } from "react";
import { useNavigate } from "react-router-dom";
import chat from "../assets/chat.svg";
import downArrow from "../assets/down.svg";
import trash from "../assets/trash.svg";
import upAndDown from "../assets/upAndDown.svg";
import edit from "../assets/edit-small.svg";
import filter from "../assets/filter.svg";
import info from "../assets/info-outline.svg";
import message from "../assets/message.svg";
import phone from "../assets/phone.svg";
import right from "../assets/right.svg";
import time from "../assets/time.svg";
import user from "../assets/user.svg";
import {
  DashboardDesktop,
  DashboardMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import WaitlistButtons from "../components/WaitlistButtons";
import WaitListDetail from "../components/WaitListDetail";

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

        {waitlist.length ? (
          <div className={`${showWaitUser ? "filter blur-sm" : ""}`}>
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
                      onClick={() =>
                        navigate(`${user.id}`, {
                          state: waitUsers.find(
                            (users) => users.id === user.id
                          ),
                        })
                      }
                    >
                      <th className="opacity-40 py-4">{index + 1}</th>
                      <td className="py-4">{user.name}</td>
                      <td className="py-4 opacity-40">Clinic</td>
                      <td className="py-4 opacity-40">2.2 days</td>
                      <td className="py-4 flex justify-end">
                        <img src={right} alt="Right" className="mr-3" />
                        <img src={info} alt="Info" />
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
                        <span className="rounded-full px-4 py-1 border-gray-300 border">
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
                        onClick={() =>
                          navigate(`${user.id}`, {
                            state: waitUsers.find(
                              (users) => users.id === user.id
                            ),
                          })
                        }
                      >
                        <th className="opacity-40 py-4">{index + 1}</th>
                        <td className="py-4 w-[170px]">
                          <div className="flex">
                            <span className="mr-3">{user.name}</span>
                            <img src={chat} alt="Chat" className="mr-3" />
                            <img src={message} alt="Message" className="mr-3" />
                            <img src={phone} alt="Phone" />
                          </div>
                        </td>
                        <td className="py-4 opacity-40">Clinic</td>
                        <td className="py-4 opacity-40">2.2 days</td>
                        <td className="py-4 opacity-40">{user.station}</td>
                        <td className="py-4">
                          <span
                            className={`py-1 px-4 rounded-full ${user.background}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4 flex justify-end">
                          <img src={right} alt="" className="mr-3" />
                          <img src={info} alt="" className="mr-3" />
                          <img src={edit} alt="Edit" className="mr-3" />

                          <img
                            src={upAndDown}
                            alt="UpAndDown"
                            className="mr-3"
                          />
                          <img src={trash} alt="Trash" />
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
      </div>
    </div>
  );
};

export default WaitList;
