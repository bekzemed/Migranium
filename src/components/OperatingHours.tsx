import React, { useState } from "react";
import add from "../assets/add.svg";
import { useAppSelector } from "../redux/hooks";
import TimePicker from "./TimePicker";

const OperatingHours = () => {
  const [closeMonday, setCloseMonday] = useState(false);
  const [closeTuesday, setCloseTuesday] = useState(false);
  const [closeWednesday, setCloseWednesday] = useState(false);
  const [closeThursday, setCloseThursday] = useState(false);
  const [closeFriday, setCloseFriday] = useState(false);
  const [closeSaturday, setCloseSaturday] = useState(false);
  const [closeSunday, setCloseSunday] = useState(false);
  const [operaingDays, setOperatingDays] = useState({
    monday: 1,
    tuesday: 1,
    wednesday: 1,
    thursday: 1,
    friday: 1,
    saturday: 1,
    sunday: 1,
  });
  const fill = useAppSelector((state) => state.theme.fillColor);
  const selected = useAppSelector((state) => state.theme.selected);

  return (
    <>
      <div className="flex flex-col text-xs flex-wrap mb-4">
        <div className="mb-4 lg:flex">
          <span className="block lg:w-[50px] mb-3 lg:mb-0">Mon</span>
          <div className="flex items-center">
            {closeMonday ? (
              <span>Closed</span>
            ) : (
              <div>
                {operaingDays.monday > 0 ? (
                  Array(operaingDays.monday)
                    .fill(1)
                    .map((_, index) => (
                      <div
                        className={`flex items-center ${
                          operaingDays.monday !== index + 1 && "mb-4"
                        }`}
                        key={index}
                      >
                        <TimePicker /> <span className="mx-2">-</span>
                        <TimePicker />
                      </div>
                    ))
                ) : (
                  <span className="text-sm opacity-50">Unavailable</span>
                )}
              </div>
            )}

            {!closeMonday && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } ml-3 cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      monday: operaingDays.monday + 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ml-3 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      monday: operaingDays.monday - 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}

            <Toggle setClose={setCloseMonday} close={closeMonday} />
          </div>
        </div>
        <div className="mb-4 lg:flex">
          <span className="block lg:w-[50px] mb-3 lg:mb-0">Tue</span>
          <div className="flex items-center">
            {closeTuesday ? (
              <span>Closed</span>
            ) : (
              <div>
                {operaingDays.tuesday > 0 ? (
                  Array(operaingDays.tuesday)
                    .fill(1)
                    .map((_, index) => (
                      <div
                        className={`flex items-center ${
                          operaingDays.tuesday !== index + 1 && "mb-4"
                        }`}
                        key={index}
                      >
                        <TimePicker /> <span className="mx-2">-</span>
                        <TimePicker />
                      </div>
                    ))
                ) : (
                  <span className="text-sm opacity-50">Unavailable</span>
                )}
              </div>
            )}

            {!closeTuesday && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } ml-3 cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      tuesday: operaingDays.tuesday + 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ml-3 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      tuesday: operaingDays.tuesday - 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}

            <Toggle setClose={setCloseTuesday} close={closeTuesday} />
          </div>
        </div>
        <div className="mb-4 lg:flex">
          <span className="block lg:w-[50px] mb-3 lg:mb-0">Wed</span>
          <div className="flex items-center">
            {closeWednesday ? (
              <span>Closed</span>
            ) : (
              <div>
                {operaingDays.wednesday > 0 ? (
                  Array(operaingDays.wednesday)
                    .fill(1)
                    .map((_, index) => (
                      <div
                        className={`flex items-center ${
                          operaingDays.wednesday !== index + 1 && "mb-4"
                        }`}
                        key={index}
                      >
                        <TimePicker /> <span className="mx-2">-</span>
                        <TimePicker />
                      </div>
                    ))
                ) : (
                  <span className="text-sm opacity-50">Unavailable</span>
                )}
              </div>
            )}

            {!closeWednesday && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } ml-3 cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      wednesday: operaingDays.wednesday + 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ml-3 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      wednesday: operaingDays.wednesday - 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}

            <Toggle setClose={setCloseWednesday} close={closeWednesday} />
          </div>
        </div>
        <div className="mb-4 lg:flex">
          <span className="block lg:w-[50px] mb-3 lg:mb-0">Thu</span>
          <div className="flex items-center">
            {closeThursday ? (
              <span>Closed</span>
            ) : (
              <div>
                {operaingDays.thursday > 0 ? (
                  Array(operaingDays.thursday)
                    .fill(1)
                    .map((_, index) => (
                      <div
                        className={`flex items-center ${
                          operaingDays.thursday !== index + 1 && "mb-4"
                        }`}
                        key={index}
                      >
                        <TimePicker /> <span className="mx-2">-</span>
                        <TimePicker />
                      </div>
                    ))
                ) : (
                  <span className="text-sm opacity-50">Unavailable</span>
                )}
              </div>
            )}

            {!closeThursday && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } ml-3 cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      thursday: operaingDays.thursday + 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ml-3 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      thursday: operaingDays.thursday - 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}

            <Toggle setClose={setCloseThursday} close={closeThursday} />
          </div>
        </div>
        <div className="mb-4 lg:flex">
          <span className="block lg:w-[50px] mb-3 lg:mb-0">Fri</span>
          <div className="flex items-center">
            {closeFriday ? (
              <span>Closed</span>
            ) : (
              <div>
                {operaingDays.friday > 0 ? (
                  Array(operaingDays.friday)
                    .fill(1)
                    .map((_, index) => (
                      <div
                        className={`flex items-center ${
                          operaingDays.friday !== index + 1 && "mb-4"
                        }`}
                        key={index}
                      >
                        <TimePicker /> <span className="mx-2">-</span>
                        <TimePicker />
                      </div>
                    ))
                ) : (
                  <span className="text-sm opacity-50">Unavailable</span>
                )}
              </div>
            )}

            {!closeFriday && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } ml-3 cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      friday: operaingDays.friday + 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ml-3 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      friday: operaingDays.friday - 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}

            <Toggle setClose={setCloseFriday} close={closeFriday} />
          </div>
        </div>
        <div className="mb-4 lg:flex">
          <span className="block lg:w-[50px] mb-3 lg:mb-0">Sat</span>
          <div className="flex items-center">
            {closeSaturday ? (
              <span>Closed</span>
            ) : (
              <div>
                {operaingDays.saturday > 0 ? (
                  Array(operaingDays.saturday)
                    .fill(1)
                    .map((_, index) => (
                      <div
                        className={`flex items-center ${
                          operaingDays.saturday !== index + 1 && "mb-4"
                        }`}
                        key={index}
                      >
                        <TimePicker /> <span className="mx-2">-</span>
                        <TimePicker />
                      </div>
                    ))
                ) : (
                  <span className="text-sm opacity-50">Unavailable</span>
                )}
              </div>
            )}

            {!closeSaturday && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } ml-3 cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      saturday: operaingDays.saturday + 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ml-3 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      saturday: operaingDays.saturday - 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}

            <Toggle setClose={setCloseSaturday} close={closeSaturday} />
          </div>
        </div>
        <div className="mb-4 lg:flex">
          <span className="block lg:w-[50px] mb-3 lg:mb-0">Sun</span>
          <div className="flex items-center">
            {closeSunday ? (
              <span>Closed</span>
            ) : (
              <div>
                {operaingDays.sunday > 0 ? (
                  Array(operaingDays.sunday)
                    .fill(1)
                    .map((_, index) => (
                      <div
                        className={`flex items-center ${
                          operaingDays.sunday !== index + 1 && "mb-4"
                        }`}
                        key={index}
                      >
                        <TimePicker /> <span className="mx-2">-</span>
                        <TimePicker />
                      </div>
                    ))
                ) : (
                  <span className="text-sm opacity-50">Unavailable</span>
                )}
              </div>
            )}
            {!closeSunday && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } ml-3 cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      sunday: operaingDays.sunday + 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={selected === 10 ? { fill: fill } : {}}
                  className={`w-6 h-6 ml-3 ${
                    fill === "fill-theme0" || fill === "fill-theme1"
                      ? "fill-black"
                      : fill
                  } cursor-pointer`}
                  onClick={() => {
                    setOperatingDays({
                      ...operaingDays,
                      sunday: operaingDays.sunday - 1,
                    });
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}

            <Toggle setClose={setCloseSunday} close={closeSunday} />
          </div>
        </div>
      </div>
    </>
  );
};

const Toggle = ({ setClose, close }: any) => {
  return (
    <div className="ml-3 lg:ml-[15px] 2xl:ml-10 flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          title=""
          placeholder=""
          className="sr-only peer"
          onClick={() => setClose(!close)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
      </label>
    </div>
  );
};

export default OperatingHours;
