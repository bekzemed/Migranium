import { useState } from "react";
import filter from "../assets/filter.svg";
import { useAppSelector } from "../redux/hooks";
import apple from "../assets/apple.svg";

const ScheduleContent = ({ datas }) => {
  const selected = useAppSelector((state) => state.theme.selected);
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const textColor = useAppSelector((state) => state.theme.textColor);
  const color = useAppSelector((state) => state.theme.color);
  const [showDetails, setShowDetails] = useState(-1);
  const [showPastDetails, setShowPastDetails] = useState(-1);
  const [showDropDown, setShowDropDown] = useState(false);
  const [numberOfSlot, setNumberOfSlot] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("upcoming");

  return (
    <>
      {datas.map(
        (data, index) =>
          data.all && (
            <p key={index} className="text-lg mb-4">
              All Schedules
            </p>
          )
      )}
      {datas.map((event, index) => (
        <div className="bg-white rounded-lg px-4 py-4 mb-4" key={index}>
          <div className="pb-6">
            <span className="block text-lg mb-8">Location {index + 1}</span>
            <div className="pb-2 flex items-center justify-between border-b border-b-gray-300 text-sm">
              <div className="text-sm">
                <span
                  style={
                    selected === 10 && selectedEvent === "upcoming"
                      ? { color: textColor }
                      : {}
                  }
                  className={`mr-5 cursor-pointer ${
                    selectedEvent === "upcoming"
                      ? textColor === "text-theme0" ||
                        textColor === "text-theme1"
                        ? "text-black"
                        : textColor
                      : "text-black"
                  }`}
                  onClick={() => setSelectedEvent("upcoming")}
                >
                  Upcoming
                </span>
                <span
                  style={
                    selected === 10 && selectedEvent === "pending"
                      ? { color: textColor }
                      : {}
                  }
                  className={`mr-5 cursor-pointer ${
                    selectedEvent === "pending"
                      ? textColor === "text-theme0" ||
                        textColor === "text-theme1"
                        ? "text-black"
                        : textColor
                      : "text-black"
                  }`}
                  onClick={() => setSelectedEvent("pending")}
                >
                  Pending
                </span>
                <span
                  style={
                    selected === 10 && selectedEvent === "past"
                      ? { color: textColor }
                      : {}
                  }
                  className={`cursor-pointer mr-5 ${
                    selectedEvent === "past"
                      ? textColor === "text-theme0" ||
                        textColor === "text-theme1"
                        ? "text-black"
                        : textColor
                      : "text-black"
                  }`}
                  onClick={() => setSelectedEvent("past")}
                >
                  Past
                </span>
                <button
                  style={selected === 10 ? { backgroundColor: theme } : {}}
                  type="button"
                  onClick={() => setSelectedEvent("setting")}
                  className={`p-2 text-xs lg:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                    theme === "bg-theme0" || theme === "bg-theme1"
                      ? "bg-black"
                      : theme
                  }`}
                >
                  Settings
                </button>
              </div>
              <div className="flex items-center p-2 rounded-full border border-gray-300 xl:p-0 xl:border-none">
                <img src={filter} alt="Filter" className="xl:mr-2" />
                <span className="hidden xl:block">Filter</span>
              </div>
            </div>
          </div>
          <div className="pb-4">
            {selectedEvent === "upcoming" &&
              event.upcoming.map((event: any, index: number) => (
                <div key={index}>
                  <div className="grid grid-cols-3 lg:grid-cols-3 text-xs py-4 items-center">
                    <p className="text-sm">
                      {event.from}-{event.to}
                    </p>
                    <p className="text-black text-sm font-extrabold text-start whitespace-nowrap">
                      {event.name}
                    </p>

                    <div className="flex justify-end">
                      <div className="items-center justify-center hidden lg:flex lg:mr-5">
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
                        {/* up and down arrow */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={selected === 10 ? { fill: fill } : {}}
                          className={`w-5 h-5 mr-2 ${
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
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>

                      <span
                        className="flex items-center cursor-pointer justify-end"
                        onClick={() =>
                          showDetails === index
                            ? setShowDetails(-1)
                            : setShowDetails(index)
                        }
                      >
                        {index === showDetails ? (
                          <>
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
                            <span className="text-xs mr-1">Details</span>
                          </>
                        ) : (
                          <>
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
                            <span className="text-xs mr-1">Details</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {index === showDetails && (
                    <div className="text-xs py-2">
                      <div className="lg:hidden">
                        <span className="text-sm block mb-2">
                          {event.email}
                        </span>
                        <span className="text-sm block">{event.phone}</span>
                        <div className="flex items-center py-4 lg:hidden">
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

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-2 ${
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

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke={`${color}`}
                            fill="#fff"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-start justify-between lg:grid grid-cols-3 xl:items-start lg:mb-4">
                        <div className="hidden lg:block">
                          <span className="text-sm block mb-2">
                            {event.email}
                          </span>
                          <span className="text-sm block">{event.phone}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-black text-sm font-extrabold mb-2">
                            Reason for visit / comment:
                          </p>
                          <p className="opacity-80">{event.reason}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-black text-sm font-extrabold mb-2">
                            Other Information:
                          </p>
                          <p className="opacity-80">{event.information}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

            {selectedEvent === "pending" && (
              <div className="text-center text-sm">
                <span>No Pending scheduled events.</span>
              </div>
            )}
            {selectedEvent === "past" &&
              (event.past.length ? (
                event.past.map((event, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-3 lg:grid-cols-3 text-xs py-4 items-center">
                      <p className="text-sm">
                        {event.from}-{event.to}
                      </p>
                      <p className="text-black text-sm font-extrabold text-start whitespace-nowrap">
                        {event.name}
                      </p>

                      <div className="flex justify-end">
                        <div className="items-center justify-center hidden lg:flex lg:mr-5">
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
                          {/* up and down arrow */}

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={selected === 10 ? { fill: fill } : {}}
                            className={`w-5 h-5 mr-2 ${
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
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>

                        <span
                          className="flex items-center cursor-pointer justify-end"
                          onClick={() =>
                            showPastDetails === index
                              ? setShowPastDetails(-1)
                              : setShowPastDetails(index)
                          }
                        >
                          {index === showPastDetails ? (
                            <>
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
                              <span className="text-xs mr-1">Details</span>
                            </>
                          ) : (
                            <>
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
                              <span className="text-xs mr-1">Details</span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    {index === showPastDetails && (
                      <div className="text-xs py-2">
                        <div className="lg:hidden">
                          <span className="text-sm block mb-2">
                            {event.email}
                          </span>
                          <span className="text-sm block">{event.phone}</span>
                          <div className="flex items-center py-4 lg:hidden">
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

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-5 h-5 mr-2 ${
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

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke={`${color}`}
                              fill="#fff"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex items-start justify-between lg:grid grid-cols-3 xl:items-start lg:mb-4">
                          <div className="hidden lg:block">
                            <span className="text-sm block mb-2">
                              {event.email}
                            </span>
                            <span className="text-sm block">{event.phone}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-black text-sm font-extrabold mb-2">
                              Reason for visit / comment:
                            </p>
                            <p className="opacity-80">{event.reason}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-black text-sm font-extrabold mb-2">
                              Information:
                            </p>
                            <p className="opacity-80">{event.information}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center text-sm">
                  <span>No Past scheduled events.</span>
                </div>
              ))}
            {selectedEvent === "setting" && (
              <div>
                <div className="mb-5">
                  <p className="mb-3">Availability</p>

                  <div className="flex items-start">
                    <div className="flex items-center">
                      <label
                        htmlFor="numberOfSlots"
                        className="mr-2 font-medium text-sm text-gray-900 dark:text-black"
                      >
                        Number of slots
                      </label>
                      <input
                        type="number"
                        id="numberOfSlots"
                        className="bg-gray-50 border border-gray-300 rounded-sm text-gray-900 block w-[100px] p-1 focus-visible:outline-none focus:outline-none mr-2"
                        placeholder="0"
                        required
                      />
                    </div>
                    <div>
                      <div
                        className="relative w-full cursor-pointer"
                        onClick={() => setShowDropDown(!showDropDown)}
                      >
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#005893"
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
                          id="numberOfSlot"
                          value={numberOfSlot}
                          className="bg-primary border border-gray-300 text-gray-900 text-xs pr-10 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none cursor-pointer"
                          placeholder="Availability slots"
                          required
                        />
                      </div>
                      {showDropDown && (
                        <ul className="w-full float-right border border-gray-300 text-xs cursor-pointer mt-2 rounded-lg">
                          <li
                            className="p-1 border-b hover:bg-gray-300 dark:text-black"
                            onClick={() => setNumberOfSlot("Per Hour")}
                          >
                            Per Hour
                          </li>
                          <li
                            className="p-1 hover:bg-gray-300 dark:text-black"
                            onClick={() => setNumberOfSlot("Per Day")}
                          >
                            Per Day
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-3">Calandar Connection</p>

                  <div className="shadow-lg border p-3 lg:p-5 rounded mb-5">
                    <div className="lg:flex items-center justify-between pb-5 mb-5 border-b">
                      <p className="text-sm mb-3 lg:mb-0">
                        My Calandar Account
                      </p>
                      <button
                        style={
                          selected === 10 ? { backgroundColor: theme } : {}
                        }
                        type="button"
                        className={`text-white ${
                          theme === "bg-theme0" || theme === "bg-theme1"
                            ? "bg-black"
                            : theme
                        } border-slate-300 justify-center focus:outline-none  font-medium rounded-full text-xs px-5 py-1.5 text-center inline-flex items-center`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        Add Calandar Account
                      </button>
                    </div>

                    <div className="border rounded p-3 lg:p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          <img
                            src={apple}
                            alt="Apple"
                            className="w-[15px] mr-3"
                          />
                          <div>
                            <p className="text-sm">ICloud</p>
                            <p className="opacity-50 text-xs">
                              tope.ukaegbu@gmail.com
                            </p>
                          </div>
                        </div>
                        {/* delete */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke={`${color}`}
                          fill="#fff"
                          className="w-5 h-5 cursor-pointer"
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

                  <div className="shadow-lg border p-3 lg:p-5">
                    <p className="text-sm pb-5 border-b mb-3">Configuration</p>

                    <div className="lg:flex items-center justify-between pb-5 mb-5 border-b">
                      <div className="flex items-center mb-5 lg:mb-0 lg:mr-5 xl:mr-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke={`${color}`}
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                          />
                        </svg>

                        <div>
                          <p className="text-sm">Check for conflicts</p>
                          <p className="opacity-50 text-xs">
                            Set the calandar(s) to check for conflicts to
                            prevent double bookings.
                          </p>
                        </div>
                      </div>
                      <div className="p-3 border rounded">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center lg:mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-5 h-5 mr-2 ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div>
                              <p className="text-xs whitespace-nowrap">
                                Check tope.ukaegbu@gmail.com
                              </p>
                              <p className="opacity-50 text-xs">Work</p>
                            </div>
                          </div>
                          <span
                            style={selected === 10 ? { color: textColor } : {}}
                            className={`text-xs cursor-pointer ${
                              textColor === "text-theme0" ||
                              textColor === "text-theme1"
                                ? "text-black"
                                : textColor
                            }`}
                          >
                            Edit
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex items-center justify-between pb-5">
                      <div className="flex items-center mb-5 lg:mb-0 lg:mr-5 xl:mr-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          stroke={`${color}`}
                          className="w-6 h-6 mr-2"
                        >
                          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                          <path
                            fillRule="evenodd"
                            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <div>
                          <p className="text-sm">Add to calendar</p>
                          <p className="opacity-50 text-xs">
                            Set the calandar you would like to add new events to
                            as they're scheduled.
                          </p>
                        </div>
                      </div>
                      <div className="p-3 border rounded">
                        <div className="flex justify-between">
                          <div className="flex items-center lg:mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              style={selected === 10 ? { fill: fill } : {}}
                              className={`w-5 h-5 mr-2 ${
                                fill === "fill-theme0" || fill === "fill-theme1"
                                  ? "fill-black"
                                  : fill
                              }`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div>
                              <p className="text-xs whitespace-nowrap">
                                Add to tope.ukaegbu@gmail.com
                              </p>
                              <p className="opacity-50 text-xs">Work</p>
                            </div>
                          </div>
                          <span
                            style={selected === 10 ? { color: textColor } : {}}
                            className={`text-xs cursor-pointer ${
                              textColor === "text-theme0" ||
                              textColor === "text-theme1"
                                ? "text-black"
                                : textColor
                            }`}
                          >
                            Edit
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ScheduleContent;
