import { useState } from "react";
import logo from "../assets/logo.svg";
import {
  DashboardUserDesktop,
  DashboarUserMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AddRating from "../components/AddRating";

const cashexQueue = [
  {
    id: 1,
    name: "Cody Fisher",
    time: "0 hours 15 minutes",
  },
  {
    id: 2,
    name: "Robert Fox",
    time: "0 hours 30 minutes",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    time: "0 hours 45 minutes",
  },
  {
    id: 4,
    name: "Ronald Richards",
    time: "1 hours 00 minutes",
  },
  {
    id: 5,
    name: "Marvin McKinney",
    time: "1 hours 15 minutes",
  },
];

let currentUser = 4;

const HomePage = () => {
  const [show, onShow] = useState(false);

  const [listOfCashex, setListOfCashex] = useState(false);
  const [anonymousMode, setAnonymousMode] = useState(false);
  const [onNotificationShow, setOnNotificationShow] = useState(false);
  const [selectedCashexUser, setSelectedCashexUser] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [closeQueue, setCloseQueue] = useState(false);
  const [rateClosingQueue, setRateClosingQueue] = useState(false);

  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav
        show={show}
        onDone={() => onShow(!show)}
        setShowNotification={setShowNotification}
      />
      {(closeQueue || rateClosingQueue) && (
        <AddRating
          closeQueue={closeQueue}
          setCloseQueue={setCloseQueue}
          rateClosingQueue={rateClosingQueue}
          setRateClosingQueue={setRateClosingQueue}
        />
      )}

      <div
        className={`px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black ${
          (closeQueue || rateClosingQueue) && "filter blur-sm"
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <span className="opacity-80 block mb-1 text-xs">
              {cashexQueue[currentUser].name}
            </span>
            <span className="text-2xl block mb-4">Home Page</span>
          </div>
        </div>

        <div className="bg-white rounded-lg px-2 py-4 mb-10 dark:text-black">
          <div className="text-xs">
            <div>
              <span className="mb-4 block text-sm">Cashex queue</span>

              <div className="flex justify-between mb-6">
                <div>
                  <span className="text-xs opacity-40 mb-4 block">
                    Number on queue
                  </span>
                  {/* <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                    {(percentage: number) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                      />
                    )}
                  </ChangingProgressProvider> */}
                  <CircularProgressbar
                    value={4}
                    maxValue={5}
                    className="w-[70px] m-auto mb-3"
                    text="4"
                    strokeWidth={6}
                    styles={buildStyles({
                      pathColor: `#0070BA`,
                      textColor: "#0070BA",
                      trailColor: "#EEEEEE",
                      backgroundColor: "#0070BA",
                      textSize: "35px",
                    })}
                  />
                  <span className="text-primary text-center block">
                    customers
                  </span>
                </div>

                <div>
                  <span className="text-xs opacity-40 mb-4 block text-center">
                    Estimated wait time
                  </span>
                  <div className="flex items-center justify-between">
                    <div>
                      <CircularProgressbar
                        value={4}
                        maxValue={5}
                        className="w-[70px] mr-3 mb-3"
                        text="1"
                        strokeWidth={6}
                        styles={buildStyles({
                          pathColor: `#0070BA`,
                          textColor: "#0070BA",
                          trailColor: "#EEEEEE",
                          backgroundColor: "#0070BA",
                          textSize: "35px",
                        })}
                      />
                      <span className="text-primary text-center block mr-3">
                        hours
                      </span>
                    </div>

                    <div>
                      <CircularProgressbar
                        value={1}
                        maxValue={1}
                        className="w-[70px] mb-3"
                        text="00"
                        strokeWidth={6}
                        styles={buildStyles({
                          pathColor: `#0070BA`,
                          textColor: "#0070BA",
                          trailColor: "#EEEEEE",
                          backgroundColor: "#0070BA",
                          textSize: "35px",
                        })}
                      />
                      <span className="text-primary text-center block">
                        minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col pb-6 border-b border-b-gray-300">
                <div className="mb-3">
                  <span className="block mb-1 opacity-40">Organisation</span>
                  <span>Cashex</span>
                </div>
                <div className="mb-3">
                  <span className="block mb-1 opacity-40">
                    Location address
                  </span>
                  <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                </div>
                <div className="mb-3">
                  <span className="block mb-1 opacity-40">Service</span>
                  <span>Clinic</span>
                </div>
                <div>
                  <span className="block mb-1 opacity-40">
                    Cancel appointment
                  </span>
                  <span
                    className="text-[#FF0000]"
                    onClick={() => setCloseQueue(true)}
                  >
                    Leave waitlist
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className={`flex justify-between ${listOfCashex && "mb-4"}`}>
                <span className="text-sm">List of Cashex queue</span>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setListOfCashex(!listOfCashex)}
                >
                  {listOfCashex ? (
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
                      <span className="text-xs mr-1">Show all</span>
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
                </span>
              </div>
              <></>
              {listOfCashex && (
                <div className="bg-white rounded-lg px-2 py-4">
                  <table className="w-full mb-6">
                    <thead>
                      <tr className="opacity-40 dark:text-black text-xs border-b border-gray-300">
                        <th></th>
                        <th className="pb-5 text-start">User name</th>
                        <th className="pb-5 text-end">Estimated wait time</th>
                      </tr>
                    </thead>
                    <tbody className="text:black dark:text-black text-xs">
                      {cashexQueue.map((queue, index) => (
                        <tr
                          className={`text-center border-b  border-gray-300 py-4 ${
                            index + 1 !== currentUser && "opacity-60"
                          }`}
                          key={index}
                        >
                          <th className="py-4">{index + 1}</th>
                          <td className="py-4 text-start">
                            {queue.name}{" "}
                            {`${index + 1 === currentUser && "(You)"}`}
                          </td>
                          <td className="py-4 text-end">{queue.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="text-center flex items-center justify-center text-[10px] opacity-70 mt-6">
                <span className="mr-2">Powered by</span>
                <span className="text-primary migranium-font flex items-center">
                  <img src={logo} alt="Logo" className="w-[20px]" />
                  migranium
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg px-2 py-4 mb-10 dark:text-black">
          <div className="text-xs">
            <div>
              <span className="mb-4 block text-sm">FedEx queue</span>

              <div className="flex justify-between mb-6">
                <div>
                  <span className="text-xs opacity-40 mb-4 block">
                    Number on queue
                  </span>
                  <CircularProgressbar
                    value={4}
                    maxValue={5}
                    className="w-[70px] m-auto mb-3"
                    text="4"
                    strokeWidth={6}
                    styles={buildStyles({
                      pathColor: `#0070BA`,
                      textColor: "#0070BA",
                      trailColor: "#EEEEEE",
                      backgroundColor: "#0070BA",
                      textSize: "35px",
                    })}
                  />
                  <span className="text-primary text-center block">
                    customers
                  </span>
                </div>

                <div>
                  <span className="text-xs opacity-40 mb-4 block text-center">
                    Estimated wait time
                  </span>
                  <div className="flex items-center justify-between">
                    <div>
                      <CircularProgressbar
                        value={4}
                        maxValue={5}
                        className="w-[70px] mr-3 mb-3"
                        text="1"
                        strokeWidth={6}
                        styles={buildStyles({
                          pathColor: `#0070BA`,
                          textColor: "#0070BA",
                          trailColor: "#EEEEEE",
                          backgroundColor: "#0070BA",
                          textSize: "35px",
                        })}
                      />
                      <span className="text-primary text-center block mr-3">
                        hours
                      </span>
                    </div>

                    <div>
                      <CircularProgressbar
                        value={1}
                        maxValue={1}
                        className="w-[70px] mb-3"
                        text="00"
                        strokeWidth={6}
                        styles={buildStyles({
                          pathColor: `#0070BA`,
                          textColor: "#0070BA",
                          trailColor: "#EEEEEE",
                          backgroundColor: "#0070BA",
                          textSize: "35px",
                        })}
                      />
                      <span className="text-primary text-center block">
                        minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col pb-6 border-b border-b-gray-300">
                <div className="mb-3">
                  <span className="block mb-1 opacity-40">Organisation</span>
                  <span>Cashex</span>
                </div>
                <div className="mb-3">
                  <span className="block mb-1 opacity-40">
                    Location address
                  </span>
                  <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                </div>
                <div className="mb-3">
                  <span className="block mb-1 opacity-40">Service</span>
                  <span>Clinic</span>
                </div>
                <div>
                  <span className="block mb-1 opacity-40">
                    Cancel appointment
                  </span>
                  <span
                    className="text-[#FF0000]"
                    onClick={() => setCloseQueue(true)}
                  >
                    Leave waitlist
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className={`flex justify-between ${listOfCashex && "mb-4"}`}>
                <span className="text-sm">List of FedEx queue</span>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setListOfCashex(!listOfCashex)}
                >
                  {listOfCashex ? (
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
                      <span className="text-xs mr-1">Show all</span>
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
                </span>
              </div>
              <></>
              {listOfCashex && (
                <div className="bg-white rounded-lg px-2 py-4">
                  <table className="w-full mb-6">
                    <thead>
                      <tr className="opacity-40 dark:text-black text-xs border-b border-gray-300">
                        <th></th>
                        <th className="pb-5 text-start">User name</th>
                        <th className="pb-5 text-end">Estimated wait time</th>
                      </tr>
                    </thead>
                    <tbody className="text:black dark:text-black text-xs">
                      {cashexQueue.map((queue, index) => (
                        <tr
                          className={`text-center border-b  border-gray-300 py-4 ${
                            index + 1 !== currentUser && "opacity-60"
                          }`}
                          key={index}
                        >
                          <th className="py-4">{index + 1}</th>
                          <td className="py-4 text-start">
                            {queue.name}{" "}
                            {`${index + 1 === currentUser && "(You)"}`}
                          </td>
                          <td className="py-4 text-end">{queue.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="text-center flex items-center justify-center text-[10px] opacity-70 mt-6">
                <span className="mr-2">Powered by</span>
                <span className="text-primary migranium-font flex items-center">
                  <img src={logo} alt="Logo" className="w-[20px]" />
                  migranium
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs w-screen block lg:hidden">
        <DashboarUserMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardUserDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block">
          <Header
            text="Home page"
            header={cashexQueue[currentUser].name}
            isAnonymous={true}
            setAnonymousMode={setAnonymousMode}
            anonymousMode={anonymousMode}
            onNotificationShow={onNotificationShow}
            showNotification={showNotification}
            setShowNotification={setShowNotification}
            data={selectedCashexUser}
          />

          {(closeQueue || rateClosingQueue) && (
            <AddRating
              closeQueue={closeQueue}
              setCloseQueue={setCloseQueue}
              rateClosingQueue={rateClosingQueue}
              setRateClosingQueue={setRateClosingQueue}
            />
          )}

          <div
            className={`bg-white rounded-lg px-4 py-4 mb-10 dark:text-black ${
              (closeQueue || rateClosingQueue) && "filter blur-sm"
            }`}
          >
            <div className="text-xs">
              <div className="pb-6 border-b border-b-gray-300">
                <span className="mb-4 block text-lg">Cashex queue</span>

                <div className="flex">
                  <div className="mr-5 2xl:mr-10">
                    <div className="flex">
                      <div className="mr-4">
                        <span className="text-xs opacity-40 block mb-4 whitespace-nowrap">
                          Number on queue
                        </span>
                        <CircularProgressbar
                          value={4}
                          maxValue={5}
                          className="w-[70px] m-auto mb-3"
                          text="4"
                          strokeWidth={6}
                          styles={buildStyles({
                            pathColor: `#0070BA`,
                            textColor: "#0070BA",
                            trailColor: "#EEEEEE",
                            backgroundColor: "#0070BA",
                            textSize: "35px",
                          })}
                        />
                        <span className="text-primary text-center block">
                          customers
                        </span>
                      </div>

                      <div>
                        <span className="text-xs opacity-40 mb-4 block text-center">
                          Estimated wait time
                        </span>
                        <div className="flex items-center justify-between">
                          <div>
                            <CircularProgressbar
                              value={4}
                              maxValue={5}
                              className="w-[70px] mr-3 mb-3"
                              text="1"
                              strokeWidth={6}
                              styles={buildStyles({
                                pathColor: `#0070BA`,
                                textColor: "#0070BA",
                                trailColor: "#EEEEEE",
                                backgroundColor: "#0070BA",
                                textSize: "35px",
                              })}
                            />
                            <span className="text-primary text-center block mr-3">
                              hours
                            </span>
                          </div>

                          <div>
                            <CircularProgressbar
                              value={1}
                              maxValue={1}
                              className="w-[70px] mb-3"
                              text="00"
                              strokeWidth={6}
                              styles={buildStyles({
                                pathColor: `#0070BA`,
                                textColor: "#0070BA",
                                trailColor: "#EEEEEE",
                                backgroundColor: "#0070BA",
                                textSize: "35px",
                              })}
                            />
                            <span className="text-primary text-center block">
                              minutes
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-5 2xl:mr-28">
                      <div className="mb-4">
                        <span className="block mb-1 opacity-40">
                          Organisation
                        </span>
                        <span className="text-sm">Cashex</span>
                      </div>
                      <div>
                        <span className="block mb-1 opacity-40">
                          Location address
                        </span>
                        <span className="text-sm ">
                          2972 Westheimer Rd. Santa Ana, Illinois 85486
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <span className="block mb-1 opacity-40">Service</span>
                        <span className="text-sm">Clinic</span>
                      </div>
                      <div>
                        <span className="block mb-1 opacity-40">
                          Cancel appointment
                        </span>
                        <span
                          className="text-[#FF0000] text-sm cursor-pointer"
                          onClick={() => setCloseQueue(true)}
                        >
                          Leave waitlist
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div
                  className={`flex justify-between ${listOfCashex && "mb-4"}`}
                >
                  <span className="text-lg">List of Cashex queue</span>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => setListOfCashex(!listOfCashex)}
                  >
                    {listOfCashex ? (
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
                        <span className="text-xs mr-1">Show all</span>
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
                  </span>
                </div>
                <></>
                {listOfCashex && (
                  <div className="bg-white rounded-lg px-2 py-4">
                    <table className="w-full mb-6">
                      <thead>
                        <tr className="opacity-40 dark:text-black text-xs border-b border-gray-300">
                          <th></th>
                          <th className="pb-5 text-start">User name</th>
                          <th className="pb-5">Estimated wait time</th>
                          <th className="pb-5">Status</th>
                          <th className="pb-5 text-end">
                            Proposal to swap queue
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text:black dark:text-black text-xs">
                        {cashexQueue.map((queue, index) => (
                          <tr
                            className={`text-center border-b  border-gray-300 py-4 ${
                              index + 1 !== currentUser && "opacity-60"
                            }`}
                            key={index}
                          >
                            <th className="py-4">{index + 1}</th>
                            <td className="py-4 text-start">
                              {queue.name}{" "}
                              {`${index + 1 === currentUser && "(You)"}`}
                            </td>
                            <td className="py-4">{queue.time}</td>
                            <td className="py-4">
                              {anonymousMode && index === 0 && (
                                <span className="rounded-full px-4 py-1 bg-[#FDD924]">
                                  Serving
                                </span>
                              )}
                            </td>
                            <td className="py-4 text-end">
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedCashexUser(cashexQueue[index]);
                                  setOnNotificationShow(true);
                                }}
                                disabled={index + 1 === currentUser}
                                className={`rounded-full px-4 py-1 ${
                                  index + 1 === currentUser
                                    ? "border-gray-300 text-gray-300 "
                                    : "border-secondary text-primary hover:border-secondary "
                                }  border cursor-pointer `}
                              >
                                Send proposal
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="text-center flex items-center justify-center text-[10px] opacity-70 mt-6">
                  <span className="mr-2">Powered by</span>
                  <span className="text-primary migranium-font flex items-center">
                    <img src={logo} alt="Logo" className="w-[20px]" />
                    migranium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
