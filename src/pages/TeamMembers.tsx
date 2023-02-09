import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTeamMember from "../components/AddTeamMember";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import { useAppSelector } from "../redux/hooks";

const teamMembers = [
  {
    firstName: "Marakinyo",
    lastName: "Fisher",
    station: "Station 1",
    job: "Obstetrician",
    id: 0,
    role: "Admin",
    email: "marakinyo@gmail.com",
    phone: "4 978 77 88 99",
    location: "Canada",
  },
  {
    firstName: "Jacko",
    lastName: "McCoy",
    station: "Station 2",
    job: "Obstetrician",
    id: 1,
    role: "User",
    email: "jacko@gmail.com",
    phone: "4 978 77 88 99",
    location: "Ethiopia",
  },
  {
    firstName: "Usaeyno",
    lastName: "Flores",
    station: "Station 1",
    job: "Obstetrician",
    id: 2,
    role: "Admin",
    email: "usaeyno@gmail.com",
    phone: "4 978 77 88 99",
    location: "Ethiopia",
  },
];

const TeamMembers = () => {
  const [teamMemberIndex, setShowTeamMemberIndex] = useState(-1);
  const [showTeamMembers, setShowTeamMembers] = useState(false);
  const [addTeamMember, setAddTeamMember] = useState(false);
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const textColor = useAppSelector((state) => state.theme.textColor);

  const navigate = useNavigate();

  return (
    <div className="bg-primary h-screen flex flex-col overflow-y-scroll">
      <DashNav />

      {addTeamMember && (
        <AddTeamMember
          addTeamMember={addTeamMember}
          setAddTeamMember={setAddTeamMember}
        />
      )}
      <div
        className={`px-2 pt-10 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black ${
          addTeamMember && "filter blur-sm"
        }`}
      >
        <div className="flex-1">
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
                        {`${member.firstName} ${member.lastName}`}
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
                      <div className="mb-4">
                        <div className="flex justify-between mb-1 items-center">
                          <span className="opacity-40">Station</span>
                          <div className="flex items-center">
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
                          </div>
                        </div>
                        <span>{member.station}</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-4">
                          <span className="block opacity-40 mb-2">
                            Job title
                          </span>
                          <span className="block">{member.job}</span>
                        </div>
                        <div className="mb-4">
                          <span className="block opacity-40 mb-2">Email</span>
                          <span className="block">{member.email}</span>
                        </div>
                        <div className="mb-4">
                          <span className="block opacity-40 mb-2">
                            Phone Number
                          </span>
                          <span className="block">{member.phone}</span>
                        </div>
                        <div className="mb-4">
                          <span className="block opacity-40 mb-2">
                            Location
                          </span>
                          <span className="block">{member.location}</span>
                        </div>

                        <div className="mb-4">
                          <span className="block opacity-40 mb-2">Id</span>
                          <span className="block">{member.id}</span>
                        </div>

                        <div className="mb-4">
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
              className={`text-xs ${
                textColor === "text-theme0" || textColor === "text-theme1"
                  ? "text-black"
                  : textColor
              }`}
              onClick={() => setAddTeamMember(!addTeamMember)}
            >
              Add team member
            </span>
          </div>
        </div>

        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        {addTeamMember && (
          <AddTeamMember
            addTeamMember={addTeamMember}
            setAddTeamMember={setAddTeamMember}
          />
        )}

        <div
          className={`lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col ${
            addTeamMember && "filter blur-sm"
          }`}
        >
          <div className="flex-1">
            <Header text="Team Members" />
            {teamMembers.length ? (
              <div>
                <div className="bg-white rounded-lg px-2 py-4">
                  <table className="w-full mb-4">
                    <thead>
                      <tr className="dark:text-black text-xs border-b border-gray-300">
                        <th></th>
                        <th className="pb-5 flex opacity-40">Name</th>
                        <th className="pb-5 opacity-40">Email</th>
                        <th className="pb-5 opacity-40">Phone number</th>
                        <th className="pb-5 opacity-40">Location</th>
                        <th className="pb-5 opacity-40">Station</th>
                        <th className="pb-5 opacity-40">Job title</th>
                        <th className="pb-5 opacity-40">Role</th>
                        <th className="pb-5">
                          <span
                            style={
                              selected === 10 ? { backgroundColor: theme } : {}
                            }
                            className={`rounded-full px-4 py-1 border cursor-pointer text-white ${
                              theme === "bg-theme0" || theme === "bg-theme1"
                                ? "bg-black"
                                : theme
                            }`}
                            onClick={() => setAddTeamMember(!addTeamMember)}
                          >
                            Add team member
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
                                className="text-start cursor-pointer"
                                onClick={() =>
                                  navigate(`${member.id}`, {
                                    state: teamMembers.find(
                                      (members) => members.id === member.id
                                    ),
                                  })
                                }
                              >
                                {`${member.firstName} ${member.lastName}`}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 opacity-40">{member.email}</td>
                          <td className="py-4 opacity-40">{member.phone}</td>
                          <td className="py-4 opacity-40">{member.location}</td>
                          <td className="py-4 opacity-40">{member.station}</td>
                          <td className="py-4 opacity-40">{member.job}</td>
                          <td className="py-4 opacity-40">{member.role}</td>

                          <td className="py-4 flex justify-center items-center">
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
                              onClick={() =>
                                teamMembers.filter(
                                  (team) => team.id !== member.id
                                )
                              }
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                clipRule="evenodd"
                              />
                            </svg>
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
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
