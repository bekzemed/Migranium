import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = ({ show, onDone }: any) => {
  return (
    <>
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
            <ul className="flex flex-col items-center">
              <li onClick={() => onDone()}>
                <a
                  href="#HowItWorks"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary dark:text-white"
                  aria-current="page"
                >
                  How it works
                </a>
              </li>
              <li onClick={() => onDone()}>
                <a
                  href="#Features"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary  dark:text-white"
                >
                  Features
                </a>
              </li>
              <li onClick={() => onDone()}>
                <a
                  href="#Clients"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary dark:text-white"
                >
                  Clients
                </a>
              </li>
              <li onClick={() => onDone()}>
                <a
                  href="#ContactUs"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary dark:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li onClick={() => onDone()}>
                <a
                  href="#Statistics"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-primary dark:text-white"
                >
                  Statistics
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-col items-center justify-center ">
            <li className="w-full">
              <button className="bg-secondary text-white font-bold py-2 px-8 mb-5 lg:mb-0 rounded-full w-full focus-visible:outline-none focus:outline-none">
                Sign up
              </button>
            </li>
            <li>
              <a className="text-gray-700  py-2 px-4 dark:text-white" href="#">
                Log in
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <nav className="bg-primary lg:bg-white px-4 py-2.5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <Link to="/">
                <span className="flex items-center text-bright">
                  <img
                    src={logo}
                    className="h-6 mr-1 sm:h-9"
                    alt="Migranium Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-primary migranium-font">
                    migranium
                  </span>
                </span>
              </Link>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              <div
                className="hidden w-full lg:flex md:items-center md:w-auto"
                id="navbar-default"
              >
                <ul className="flex flex-col p-4 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                  <li>
                    <a
                      href="#HowItWorks"
                      className="block py-2 pl-3 pr-4 text-gray-700 hover:text-primary rounded md:bg-transparent md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Features"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-primary md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Clients"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-primary md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Clients
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ContactUs"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-primary md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Statistics"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-primary md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Statistics
                    </a>
                  </li>
                </ul>
              </div>

              <div className="hidden w-full lg:flex md:items-center md:w-auto">
                <ul className="flex flex-col p-4 mt-4 items-center bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                  <li>
                    <a className="text-gray-700  py-2 px-4" href="#">
                      Log in
                    </a>
                  </li>
                  <li>
                    <button className="bg-secondary text-white font-bold py-2 px-8 rounded-full focus-visible:outline-none focus:outline-none">
                      Sign up
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default NavBar;
