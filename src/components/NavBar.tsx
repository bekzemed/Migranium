import { useState } from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <div className="flex flex-col px-2 py-2.5 h-screen">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden flex ml-auto"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setShow(false)}
          >
            <span className="sr-only">Close main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mb-auto h-full flex flex-col items-center justify-center ">
            <ul className="flex flex-col items-center">
              <li>
                <a
                  href="#"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-black"
                  aria-current="page"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-black"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-black "
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-black "
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-5 text-2xl text-gray-700 rounded hover:text-black "
                >
                  Statistics
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-col items-center justify-center ">
            <li className="w-full">
              <button className="bg-secondary text-white font-bold py-2 px-8 rounded-full w-full focus-visible:outline-none focus:outline-none">
                Sign up
              </button>
            </li>
            <li>
              <button className="bg-white text-gray-700  py-2 px-4 border-none focus-visible:outline-none focus:outline-none">
                Log in
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <nav className="bg-primary md:bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a
                href="/"
                className="flex items-center"
                style={{ color: "#005893" }}
              >
                <img
                  src={logo}
                  className="h-6 mr-1 sm:h-9"
                  alt="Migranium Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white migranium-font">
                  migranium
                </span>
              </a>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={() => setShow(true)}
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
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="hidden w-full lg:flex md:items-center md:w-auto"
                id="navbar-default"
              >
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Clients
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Statistics
                    </a>
                  </li>
                </ul>
              </div>

              <div className="hidden w-full lg:flex md:items-center md:w-auto">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                  <li>
                    <button className="bg-white text-gray-700  py-2 px-4 border-none">
                      Log in
                    </button>
                  </li>
                  <li>
                    <button className="bg-secondary text-white font-bold py-2 px-8 rounded-full">
                      Sign up
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
