import { useState } from "react";
import { useNavigate } from "react-router-dom";
import steps from "../assets/steps.svg";
import NavBar from "./NavBar";

export const AboutBusiness = () => {
  const [show, setShow] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [categoryData, setCategoryData] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => navigate("/dashboard");
  return (
    <div>
      <NavBar show={show} onDone={() => setShow(!show)} />
      <div className="bg-primary px-4 pb-20 pt-32 md:px-28 2xl:px-0 text-center h-screen lg:flex lg:justify-center">
        <div className="flex flex-col h-full justify-center lg:w-[500px] lg:mr-10">
          <span className="font-black text-3xl pb-5 block lg:leading-snug dark:text-black">
            Tell us about your business
          </span>

          <form action="" onSubmit={onSubmit}>
            <input
              type="text"
              id="name"
              className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none dark:text-black dark:bg-primary mb-5"
              placeholder="Name..."
              required
            />

            <input
              type="text"
              className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-5"
              placeholder="Address..."
              required
            />
            <div className="lg:flex">
              <input
                type="text"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-5 lg:mr-2"
                placeholder="Country"
                required
              />
              <input
                type="text"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-5 lg:mr-2"
                placeholder="Province"
                required
              />
              <input
                type="text"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-5"
                placeholder="City"
                required
              />
            </div>

            <div className="relative mb-5">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#005893"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="add_logo"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                placeholder="Add a logo"
                required
              />
            </div>

            <div
              className={`flex items-center ${showDropDown ? "m-0" : "mb-5"}`}
            >
              <input
                type="number"
                id="phone"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mr-2"
                placeholder="Phone number..."
                required
              />

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
                  id="category"
                  value={categoryData}
                  className="bg-primary border border-gray-300 text-gray-900 text-xs pr-10 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none cursor-pointer"
                  placeholder="Business category"
                  required
                />
              </div>
            </div>
            {showDropDown && (
              <ul className="w-1/2 mb-5 float-right border border-gray-300 text-xs cursor-pointer mt-2 rounded-lg pl-2">
                <li
                  className="p-1 border-b hover:bg-gray-300 dark:text-black"
                  onClick={() => setCategoryData("Entertainment")}
                >
                  Entertainment
                </li>
                <li
                  className="p-1 hover:bg-gray-300 dark:text-black"
                  onClick={() => setCategoryData("Movies")}
                >
                  Movies
                </li>
              </ul>
            )}
            <button
              type="submit"
              className={`text-white bg-secondary hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full text-sm w-full lg:w-1/2 px-5 py-2.5 text-center ${
                showDropDown && "mt-2 mr-2 ml-2"
              }`}
            >
              Next
            </button>
          </form>
        </div>
        <img
          className="hidden lg:block w-[500px]"
          src={steps}
          alt="Registration steps"
        />
      </div>
    </div>
  );
};
