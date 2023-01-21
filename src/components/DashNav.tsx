import { Link } from "react-router-dom";
import bell from "../assets/bell.svg";
import logo from "../assets/logo.svg";

import { useScrollDirection } from "../hook/useScrollDirection";

const DashNav = ({
  show,
  onDone,
  notification,
  showNotification,
  setShowNotification,
}: any) => {
  const scrollDirection = useScrollDirection();

  const onNotification = () => setShowNotification(!showNotification);

  return (
    <div className="lg:hidden">
      {show ? (
        <div className="flex flex-col px-4 py-2.5 h-screen">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden flex ml-auto"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => onDone()}
          >
            <span className="sr-only">Close main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mb-auto h-full flex flex-col items-center justify-center ">
            <ul className="flex flex-col items-center ">
              <li onClick={() => onDone()}>
                <a
                  href={`${location.pathname === "/" ? "#HowItWorks" : "/"}`}
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary dark:text-black"
                  aria-current="page"
                >
                  How it works
                </a>
              </li>
              <li onClick={() => onDone()}>
                <a
                  href={`${location.pathname === "/" ? "#Features" : "/"}`}
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary  dark:text-black"
                >
                  Features
                </a>
              </li>
              <li onClick={() => onDone()}>
                <a
                  href={`${location.pathname === "/" ? "#Pricing" : "/"}`}
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary  dark:text-black"
                >
                  Pricing
                </a>
              </li>
              <li onClick={() => onDone()}>
                <a
                  href={`${location.pathname === "/" ? "#Clients" : "/"}`}
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary dark:text-black"
                >
                  Clients
                </a>
              </li>
              <li onClick={() => onDone()}>
                <a
                  href={`${location.pathname === "/" ? "#ContactUs" : "/"}`}
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary dark:text-black"
                >
                  Contact Us
                </a>
              </li>
              <li onClick={() => onDone()}>
                <a
                  href={`${location.pathname === "/" ? "#Statistics" : "/"}`}
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary dark:text-black"
                >
                  Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <nav
            className={`fixed ${
              scrollDirection === "down" ? "-top-24" : "top-0"
            }  bg-primary relative lg:bg-white px-2 py-2.5 lg:py-4 transition-all duration-500 w-full z-10 md:px-5`}
          >
            {/*  */}
            {showNotification && (
              <>
                <div className="absolute top-16 arrow"></div>
                <div className="absolute left-2 right-2 z-50 text-black top-20 rounded-lg bg-white text-sm p-4 backdrop-blur-3xl">
                  <div className="flex justify-between items-center pb-4">
                    <span className="text-xl">Notifications</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => setShowNotification(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <hr className="pb-4" />
                  <div className="flex justify-between text-xs mb-4">
                    <span>
                      You have one new customer on Station 1, check it
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between text-xs opacity-40 mb-4">
                    <span>
                      You have one new customer on Station 1, check it
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between text-xs opacity-40 mb-28">
                    <span>
                      You have one new customer on Station 1, check it
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                  <hr />
                  <span className="text-sm py-4 text-center opacity-40 block">
                    Mark all as read
                  </span>
                </div>
              </>
            )}

            {/*  */}
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <Link to="/">
                <span className="flex items-center text-bright">
                  <img
                    src={logo}
                    className="mr-1 sm:h-9"
                    alt="Migranium Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-bright migranium-font">
                    migranium
                  </span>
                </span>
              </Link>

              <div className="flex items-center md:justify-between lg:hidden">
                {notification ? (
                  <button
                    type="button"
                    className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white  rounded-lg focus-visible:outline-none focus:outline-none"
                    onClick={onNotification}
                  >
                    <img src={bell} alt="Notification" />

                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center border-none justify-center w-6 h-6 text-xs font-bold  border-2 text-red-500 rounded-full -top-1 -right-1">
                      1
                    </div>
                  </button>
                ) : (
                  <img src={bell} alt="Notification" />
                )}

                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  onClick={() => onDone()}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-8 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default DashNav;
