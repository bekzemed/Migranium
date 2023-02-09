import { useLocation, useNavigate } from "react-router-dom";
import trash from "../assets/trash.svg";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import { useAppSelector } from "../redux/hooks";

const TeamMember = () => {
  const { state } = useLocation();
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const textColor = useAppSelector((state) => state.theme.textColor);

  const navigate = useNavigate();

  return (
    <div className="bg-primary h-screen flex flex-col overflow-y-scroll">
      <DashNav />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black mb-6">
        <div className="flex-1">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="opacity-80 block mb-1 text-xs">Cashex</span>
              <span className="text-xl block">
                Team Members - {state.firstName}
              </span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() =>
                navigate("/dashboard/team-members", { replace: true })
              }
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="bg-white rounded-lg px-2 py-4 mb-10 text-xs dark:text-black">
            <div className="pb-8 border-b">
              <span className="block mb-3 dark:text-black">Personal info</span>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  defaultValue={`${state.firstName} ${state.lastName}`}
                  disabled
                  required
                />

                <label
                  htmlFor="email"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  defaultValue={state.email}
                  disabled
                  required
                />

                <label
                  htmlFor="phone"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                  defaultValue={state.phone}
                  disabled
                  required
                />
              </div>
            </div>

            <div className="text-xs py-8 border-b border-b-gray-300 dark:text-black">
              <span className="block mb-3 text-sm">Current position</span>
              <div className="mb-4">
                <div className="flex justify-between mb-1 items-center">
                  <span className="opacity-40">Job title</span>
                  <div className="flex items-center">
                    <img src={trash} alt="Trash" />
                  </div>
                </div>
                <span>{state.job}</span>
              </div>
              <div className="flex flex-col mb-4">
                <div className="mb-4">
                  <span className="block opacity-40 mb-2">Location</span>
                  <span className="block">{state.location}</span>
                </div>
                <div className="mb-4">
                  <span className="block opacity-40 mb-2">Station</span>
                  <span className="block">{state.station}</span>
                </div>

                <div className="mb-4">
                  <span className="block opacity-40 mb-2">Id</span>
                  <span className="block">{state.id}</span>
                </div>

                <div className="mb-4">
                  <span className="block opacity-40 mb-2">Role</span>
                  <span className="block">{state.role}</span>
                </div>
              </div>
              <div className="flex items-center">
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
                    textColor === "text-theme0" || textColor === "text-theme1"
                      ? "text-black"
                      : textColor
                  }`}
                >
                  Add position
                </span>
              </div>
            </div>

            <div className="my-6">
              <span className="block text-sm mb-6">Work history</span>

              <table className="w-full mb-4">
                <thead>
                  <tr className="dark:text-black text-xs">
                    <th className="pb-5 opacity-40 flex">Action</th>
                    <th className="pb-5 opacity-40">Service</th>
                    <th className="pb-5 opacity-40">Station</th>
                    <th className="pb-5 opacity-40">Date</th>
                  </tr>
                </thead>
                <tbody className="text:black dark:text-black text-xs">
                  <tr className="text-center py-4">
                    <td className="pb-4 flex">Closed client</td>
                    <td className="pb-4">Clinic</td>
                    <td className="pb-4">Station 1</td>
                    <td className="pb-4">November 1, 2022</td>
                  </tr>
                  <tr className="text-center py-4">
                    <td className="flex">Closed client</td>
                    <td>Clinic</td>
                    <td>Station 1</td>
                    <td>November 1, 2022</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <span className="block text-sm mb-6">Other info</span>
              <div className="mb-4">
                <label
                  htmlFor="customField"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Create custom field
                </label>
                <input
                  type="text"
                  id="customField"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter title of field..."
                  required
                />

                <input
                  type="text"
                  id="customField"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                  placeholder="Enter placeholder for field"
                  required
                />
              </div>
              <div className="flex items-center ">
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
                    textColor === "text-theme0" || textColor === "text-theme1"
                      ? "text-black"
                      : textColor
                  }`}
                >
                  Add field
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
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
        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col">
          <div className="flex-1">
            <Header text={`Team Members - ${state.firstName}`} />
            <div className="bg-white rounded-lg px-4 py-4 mb-10 text-xs">
              <div className="pb-8 border-b">
                <div className="flex justify-between items-center mb-4 dark:text-black">
                  <span className="block text-sm font-extrabold">
                    Personal info
                  </span>

                  <div className="hidden lg:flex items-center">
                    <button
                      type="button"
                      style={selected === 10 ? { backgroundColor: theme } : {}}
                      className={`text-xs text-white rounded-full focus-visible:outline-none focus:outline-none mr-3 ${
                        theme === "bg-theme0" || theme === "bg-theme1"
                          ? "bg-black"
                          : theme
                      }`}
                    >
                      Save changes
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => navigate(-1)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-5 w-[200px]">
                    <label
                      htmlFor="name"
                      className="block text-xs mb-1 font-medium text-gray-900 dark:text-black"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full py-2 px-3 focus-visible:outline-none focus:outline-none"
                      defaultValue={`${state.firstName} ${state.lastName}`}
                      disabled
                      required
                    />
                  </div>

                  <div className="mr-5 w-[200px]">
                    <label
                      htmlFor="email"
                      className="block text-xs mb-1 font-medium text-gray-900 dark:text-black"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full py-2 px-3 focus-visible:outline-none focus:outline-none"
                      defaultValue={state.email}
                      disabled
                      required
                    />
                  </div>

                  <div className="w-[200px]">
                    <label
                      htmlFor="phone"
                      className="block text-xs mb-1 font-medium text-gray-900 dark:text-black"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full py-2 px-3 focus-visible:outline-none focus:outline-none"
                      defaultValue={state.phone}
                      disabled
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="py-6 border-b border-b-gray-300 dark:text-black">
                <span className="block text-sm mb-6">Current Position</span>

                <table className="w-full mb-4">
                  <thead>
                    <tr className="dark:text-black text-xs border-b border-gray-300">
                      <th className="pb-5 opacity-40 flex">Job title</th>
                      <th className="pb-5 opacity-40">Location</th>
                      <th className="pb-5 opacity-40">Station</th>
                      <th className="pb-5 opacity-40">Id</th>
                      <th className="pb-5 opacity-40">Role</th>
                      <th className="pb-5">
                        <div className="flex items-center justify-end">
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
                            Add position
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text:black dark:text-black text-xs">
                    <tr className="text-center py-4">
                      <td className="py-4 flex">{state.job}</td>
                      <td className="py-4">{state.location}</td>
                      <td className="py-4">{state.station}</td>
                      <td className="py-4">{state.id}</td>
                      <td className="py-4">{state.role}</td>
                      <td className="py-4">
                        <div className="flex items-center justify-end">
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="py-10 border-b border-b-gray-300 dark:text-black">
                <span className="block text-sm mb-6">Work history</span>

                <table className="w-full mb-4">
                  <thead>
                    <tr className="dark:text-black text-xs border-b border-b-gray-300">
                      <th className="pb-5"></th>
                      <th className="pb-5 opacity-40 flex">Action</th>
                      <th className="pb-5 opacity-40">Service</th>
                      <th className="pb-5 opacity-40">Station</th>
                      <th className="pb-5 opacity-40">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text:black dark:text-black text-xs">
                    <tr className="text-center py-4 border-b border-b-gray-300">
                      <td className="py-4">1</td>
                      <td className="py-4 flex">Closed client</td>
                      <td className="py-4">Clinic</td>
                      <td className="py-4">Station 1</td>
                      <td className="py-4">November 1, 2022</td>
                    </tr>
                    <tr className="text-center py-4">
                      <td className="py-4">2</td>
                      <td className="flex py-4">Closed client</td>
                      <td className="py-4">Clinic</td>
                      <td className="py-4">Station 1</td>
                      <td className="py-4">November 1, 2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="py-10 dark:text-black">
                <span className="block text-sm mb-6">Other info</span>
                <div className="mb-4">
                  <label
                    htmlFor="customField"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                  >
                    Create custom field
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="customField"
                      className="bg-gray-50 border w-[200px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                      placeholder="Enter title of field..."
                      required
                    />

                    <input
                      type="text"
                      id="customField"
                      className="bg-gray-50 border w-[200px] border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
                      placeholder="Enter placeholder for field"
                      required
                    />

                    <div className="flex items-center">
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
                    </div>
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

export default TeamMember;
