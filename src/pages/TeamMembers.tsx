import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import chat from "../assets/chat.svg";
import {
  DashboardDesktop,
  DashboardMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import trash from "../assets/trash.svg";

const teamMembers = [
  {
    name: "Marakinyo",
    station: "Station 1",
    job: "Obstetrician",
    id: 0,
    role: "Admin",
    email: "marakinyo@gmail.com",
    phone: "4 978 77 88 99",
    location: "2464 Royal Ln. Mesa, New Jersey 45463",
  },
  {
    name: "Jacko",
    station: "Station 2",
    job: "Obstetrician",
    id: 1,
    role: "User",
    email: "jacko@gmail.com",
    phone: "4 978 77 88 99",
    location: "2464 Royal Ln. Mesa, New Jersey 45463",
  },
  {
    name: "Usaeyno",
    station: "Station 1",
    job: "Obstetrician",
    id: 2,
    role: "Admin",
    email: "usaeyno@gmail.com",
    phone: "4 978 77 88 99",
    location: "2464 Royal Ln. Mesa, New Jersey 45463",
  },
];

const TeamMembers = () => {
  const [show, onShow] = useState(false);
  const [teamMemberIndex, setShowTeamMemberIndex] = useState(-1);
  const [showTeamMembers, setShowTeamMembers] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black">
        <span className="opacity-80 block mb-1 text-xs">Cashex</span>
        <span className="text-2xl block mb-4">Team Members</span>

        {teamMembers.length ? (
          <div className="bg-white rounded-lg px-2 py-4 mb-4">
            <div className="border-b border-b-gray-300 text-xs py-4 opacity-40">
              <span className="ml-12">Name</span>
            </div>
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div
                  className={`text-center border-gray-300 py-4 flex justify-between text-xs items-center`}
                  onClick={() => {
                    setShowTeamMembers(!showTeamMembers);
                    setShowTeamMemberIndex(index);
                  }}
                >
                  <div className="">
                    <span>{index + 1}</span>

                    <span
                      className="ml-8"
                      onClick={() =>
                        navigate(`${member.id}`, {
                          state: teamMembers.find(
                            (members) => members.id === member.id
                          ),
                        })
                      }
                    >
                      {member.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-end">
                    {showTeamMembers && teamMemberIndex === member.id ? (
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
                        <span className="text-xs mr-1">Show more</span>
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
                  </div>
                </div>

                {showTeamMembers && teamMemberIndex === member.id && (
                  <div
                    className={`text-xs py-3 pl-10 ${
                      index + 1 !== teamMembers.length &&
                      "border-b border-b-gray-300"
                    }`}
                  >
                    <div className="mb-2">
                      <div className="flex justify-between mb-1 items-center">
                        <span className="opacity-40">Station</span>
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#005893"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#005893"
                            className="w-5 h-5 mr-2"
                          >
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                          </svg>
                          <img src={trash} alt="Trash" />
                        </div>
                      </div>
                      <span>{member.station}</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <span className="block opacity-40 mb-2">Job title</span>
                        <span className="block">{member.job}</span>
                      </div>
                      <div className="mb-2">
                        <span className="block opacity-40 mb-2">Location</span>
                        <span className="block">{member.location}</span>
                      </div>

                      <div className="mb-2">
                        <span className="block opacity-40 mb-2">Id</span>
                        <span className="block">{member.id}</span>
                      </div>

                      <div className="mb-2">
                        <span className="block opacity-40 mb-2">Role</span>
                        <span className="block">{member.role}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg px-2 py-4 mb-6">
            <span className="block text-center text-xs pb-4">
              There is no team member
            </span>
            <hr className="pb-4" />
          </div>
        )}

        <div className="flex justify-center items-center mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0070BA"
            className="w-6 h-6 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-primary text-xs">Add new command</span>
        </div>
      </div>

      <div className="text-xs w-screen block lg:hidden">
        <DashboardMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block">
          <Header text="Team Members" />

          {teamMembers.length ? (
            <div>
              <div className="bg-white rounded-lg px-2 py-4">
                <table className="w-full mb-4">
                  <thead>
                    <tr className="dark:text-black text-xs border-b border-gray-300">
                      <th></th>
                      <th className="pb-5 flex opacity-40">Name</th>
                      <th className="pb-5 opacity-40">Station</th>
                      <th className="pb-5 opacity-40">Job title</th>
                      <th className="pb-5 opacity-40">Id</th>
                      <th className="pb-5 opacity-40">Role</th>
                      <th className="pb-5">
                        <span className="rounded-full px-4 py-1 border-gray-300 border cursor-pointer">
                          Add new command
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text:black dark:text-black text-xs">
                    {teamMembers.map((member, index) => (
                      <tr
                        className={`text-center ${
                          index + 1 !== teamMembers.length && "border-b"
                        } border-gray-300 py-4`}
                        key={index}
                      >
                        <th className="opacity-40 py-4 mr-3">{index + 1}</th>
                        <td className="py-4">
                          <div className="flex">
                            <span
                              className="w-[80px] text-start cursor-pointer"
                              onClick={() =>
                                navigate(`${member.id}`, {
                                  state: teamMembers.find(
                                    (members) => members.id === member.id
                                  ),
                                })
                              }
                            >
                              {member.name}
                            </span>
                            <img src={chat} alt="Chat" />
                          </div>
                        </td>
                        <td className="py-4 opacity-40">{member.station}</td>
                        <td className="py-4 opacity-40">{member.job}</td>
                        <td className="py-4 opacity-40">{member.id}</td>
                        <td className="py-4 opacity-40">{member.role}</td>

                        <td className="py-4 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#005893"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#005893"
                            className="w-5 h-5 mr-2"
                          >
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                          </svg>
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

export default TeamMembers;
