import { useState } from "react";
import NavBar from "./NavBar";
import steps from "../assets/steps.svg";
import { Link, useNavigate } from "react-router-dom";

export const AboutYou = () => {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => navigate("/dashboard");
  return (
    <div>
      <NavBar show={show} onDone={() => setShow(!show)} />
      <div className="bg-primary px-4 pb-20 pt-32 md:px-28 2xl:px-0 text-center h-screen lg:flex lg:justify-center">
        <div className="flex flex-col h-full justify-center lg:w-[500px] lg:mr-10">
          <span className="font-black text-3xl pb-5 block lg:leading-snug dark:text-black">
            Tell us about you
          </span>

          <form action="" onSubmit={onSubmit}>
            <div className="lg:flex">
              <input
                type="text"
                id="firstName"
                className="bg-primary border lg:mr-2 border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none dark:text-black dark:bg-primary mb-5"
                placeholder="First name..."
                required
              />
              <input
                type="text"
                id="lastName"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none dark:text-black dark:bg-primary mb-5"
                placeholder="Last name..."
                required
              />
            </div>
            <div className="lg:flex">
              <input
                type="email"
                id="email"
                className="bg-primary lg:mr-2 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none dark:text-black dark:bg-primary mb-5"
                placeholder="Email..."
                required
              />

              <input
                type="number"
                id="phone"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-5"
                placeholder="Phone number..."
                required
              />
            </div>
            <div className={`flex ${showPassword && "mb-5"}`}>
              {showPassword && (
                <div className="flex">
                  <input
                    type="password"
                    id="password"
                    className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mr-2"
                    placeholder="Password"
                    required
                  />
                  <input
                    type="password"
                    id="confirm_password"
                    className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mr-2"
                    placeholder="Confirm password..."
                    required
                  />
                </div>
              )}
              <input
                type="number"
                id="health"
                className={`bg-primary border lg:w-1/2 border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none ${
                  !showPassword && "mb-5"
                }`}
                placeholder="Health card number..."
                required
              />
            </div>

            <div className="flex items-center mb-3 justify-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2"
                onClick={() => setShowPassword(!showPassword)}
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Create an account for permanent use
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-secondary hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full text-sm w-full lg:w-1/2 px-5 py-2.5 text-center mb-2"
            >
              Next
            </button>
          </form>
          <span className="text-sm dark:text-black">
            Already have an account?{" "}
            <Link to="/sign-in">
              <span className="text-primary">Sign in</span>
            </Link>
          </span>
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
