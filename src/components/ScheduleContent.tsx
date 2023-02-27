import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import filter from "../assets/filter.svg";

const upcomingEvents = [
  {
    "February 15, 2023": [
      {
        name: "Marakinyo Saab",
        from: "09:00",
        to: "09:20",
        email: "cody@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        name: "Arlene McCoy",
        from: "09:20",
        to: "09:40",
        email: "arlene@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        name: "Elon McQueen",
        from: "09:40",
        to: "10:00",
        email: "elon@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
    ],
  },
];

const pastEvents = [
  {
    "February 15, 2023": [
      {
        name: "Bereket Zemed",
        from: "09:00",
        to: "09:20",
        email: "bereketzemed@gmail.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        name: "Arlene McCoy",
        from: "09:20",
        to: "09:40",
        email: "arlene@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        name: "Elon McQueen",
        from: "09:40",
        to: "10:00",
        email: "elon@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
    ],
  },
];

const ScheduleContent = () => {
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const textColor = useAppSelector((state) => state.theme.textColor);
  const color = useAppSelector((state) => state.theme.color);
  const [events, setEvents] = useState(0);
  const [showDetails, setShowDetails] = useState(-1);
  const [showPastDetails, setShowPastDetails] = useState(-1);
  return (
    <>
      <div className="pb-6">
        <span className="block text-lg mb-8">Scheduled Events</span>
        <div className="pb-2 flex items-center justify-between border-b border-b-gray-300 text-sm">
          <div className="text-sm">
            <span
              style={
                selected === 10 && events === 0 ? { color: textColor } : {}
              }
              className={`mr-5 cursor-pointer ${
                events === 0
                  ? textColor === "text-theme0" || textColor === "text-theme1"
                    ? "text-black"
                    : textColor
                  : "text-black"
              }`}
              onClick={() => setEvents(0)}
            >
              Upcoming
            </span>
            <span
              style={
                selected === 10 && events === 1 ? { color: textColor } : {}
              }
              className={`mr-5 cursor-pointer ${
                events === 1
                  ? textColor === "text-theme0" || textColor === "text-theme1"
                    ? "text-black"
                    : textColor
                  : "text-black"
              }`}
              onClick={() => setEvents(1)}
            >
              Pending
            </span>
            <span
              style={
                selected === 10 && events === 2 ? { color: textColor } : {}
              }
              className={`cursor-pointer ${
                events === 2
                  ? textColor === "text-theme0" || textColor === "text-theme1"
                    ? "text-black"
                    : textColor
                  : "text-black"
              }`}
              onClick={() => setEvents(2)}
            >
              Past
            </span>
          </div>
          <div className="flex items-center p-2 rounded-full border border-gray-300 xl:p-0 xl:border-none">
            <img src={filter} alt="Filter" className="xl:mr-2" />
            <span className="hidden xl:block">Filter</span>
          </div>
        </div>
      </div>

      <div className="pb-4">
        {events === 0 &&
          (upcomingEvents.length ? (
            upcomingEvents.map((event, index) => (
              <div key={index}>
                <span className="text-sm">{Object.keys(event)}</span>
                {event["February 15, 2023"].map((scheduleEvent, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-3 xl:grid-cols-6 text-xs py-4 items-center">
                      <span className="opacity-80">
                        {scheduleEvent.from}-{scheduleEvent.to}
                      </span>
                      <p className="text-black text-sm font-extrabold text-start">
                        {scheduleEvent.name}
                      </p>

                      <span className="text-start hidden xl:block">
                        {scheduleEvent.email}
                      </span>
                      <span className="text-center hidden xl:block">
                        {scheduleEvent.phone}
                      </span>
                      <div className="items-center justify-center hidden xl:flex">
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

                    {index === showDetails && (
                      <div className="text-xs py-2">
                        <div className="block xl:hidden">
                          <span className="block mb-2">
                            {scheduleEvent.email}
                          </span>
                          <span className="block mb-2">
                            {scheduleEvent.phone}
                          </span>
                          <div className="flex items-center py-4">
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
                        <div className="flex items-start justify-between xl:grid grid-cols-6 xl:items-start">
                          <div className="hidden xl:block"></div>
                          <div>
                            <p className="text-black text-sm font-extrabold mb-2">
                              Healthcare number:
                            </p>
                            <p className="opacity-80">
                              {scheduleEvent.healthCareNumber}
                            </p>
                          </div>
                          <div>
                            <p className="text-black text-sm font-extrabold mb-2">
                              Information:
                            </p>
                            <p className="opacity-80">
                              {scheduleEvent.information}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="text-center text-sm">
              <span>No Upcoming scheduled events.</span>
            </div>
          ))}
        {events === 1 && (
          <div className="text-center text-sm">
            <span>No Pending scheduled events.</span>
          </div>
        )}
        {events === 2 &&
          (pastEvents.length ? (
            pastEvents.map((event, index) => (
              <div key={index}>
                <span className="text-sm">{Object.keys(event)}</span>
                {event["February 15, 2023"].map((scheduleEvent, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-3 xl:grid-cols-6 text-xs py-4 items-center">
                      <span className="opacity-80">
                        {scheduleEvent.from}-{scheduleEvent.to}
                      </span>
                      <p className="text-black text-sm font-extrabold text-start">
                        {scheduleEvent.name}
                      </p>

                      <span className="text-start hidden xl:block">
                        {scheduleEvent.email}
                      </span>
                      <span className="text-center hidden xl:block">
                        {scheduleEvent.phone}
                      </span>
                      <div className="items-center justify-center hidden xl:flex">
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

                    {index === showPastDetails && (
                      <div className="text-xs py-2">
                        <div className="block xl:hidden">
                          <span className="block mb-2">
                            {scheduleEvent.email}
                          </span>
                          <span className="block mb-2">
                            {scheduleEvent.phone}
                          </span>
                          <div className="flex items-center py-4">
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
                        <div className="flex items-start justify-between xl:grid grid-cols-6 xl:items-start">
                          <div className="hidden xl:block"></div>
                          <div>
                            <p className="text-black text-sm font-extrabold mb-2">
                              Healthcare number:
                            </p>
                            <p className="opacity-80">
                              {scheduleEvent.healthCareNumber}
                            </p>
                          </div>
                          <div>
                            <p className="text-black text-sm font-extrabold mb-2">
                              Information:
                            </p>
                            <p className="opacity-80">
                              {scheduleEvent.information}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="text-center text-sm">
              <span>No Past scheduled events.</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default ScheduleContent;
