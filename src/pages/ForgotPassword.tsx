import { useState } from "react";
import forgot from "../assets/signin.svg";
import NavBar from "./NavBar";

export const ForgotPassword = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <NavBar show={show} onDone={() => setShow(!show)} />
      <div className="bg-primary px-4 pb-20 pt-32 md:px-28 2xl:px-0 text-center h-screen lg:flex lg:justify-center">
        <div className="flex flex-col h-full justify-center lg:w-[500px]">
          <span className="font-black text-3xl pb-5 block lg:leading-snug dark:text-black">
            Reset your password
          </span>

          <form action="">
            <input
              type="email"
              id="email"
              className="bg-primary border border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none dark:text-black dark:bg-primary mb-5"
              placeholder="Enter your email"
              required
            />

            <button
              type="submit"
              className="text-white bg-secondary hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full text-sm w-full px-5 py-2.5 text-center mb-2"
            >
              Reset password
            </button>
          </form>
        </div>
        <img
          className="hidden lg:block w-[560px]"
          src={forgot}
          alt="Forgot Password"
        />
      </div>
    </div>
  );
};
