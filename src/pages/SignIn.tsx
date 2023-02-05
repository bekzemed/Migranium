import { useState } from "react";
import NavBar from "./NavBar";
import signin from "../assets/signin.svg";
import google from "../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => navigate("/dashboard/waitlist");
  return (
    <div>
      <NavBar show={show} onDone={() => setShow(!show)} />
      <div className="bg-primary px-4 pb-20 pt-32 md:px-28 2xl:px-0 text-center h-screen lg:flex lg:justify-center">
        <div className="flex flex-col h-full justify-center lg:mr-10">
          <span className="font-black text-2xl pb-5 block lg:pb-3 dark:text-black">
            Sign in to Migranium
          </span>

          <button
            type="button"
            className="text-black border-slate-300 justify-center  hover:bg-primary hover:border-bright  focus:outline-none  font-medium rounded-full text-sm px-5 py-2 text-center inline-flex items-center mb-5 lg:mb-3"
          >
            <img src={google} alt="Google" className="mr-2" />
            Sign in with Google
          </button>
          <span className="flex items-center justify-center pb-5 lg:pb-3">
            <hr className="w-full" />
            <span className="mx-3.5 dark:text-black">OR</span>
            <hr className="w-full" />
          </span>
          <form action="" onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none dark:text-black dark:bg-primary mb-2"
              placeholder="Your email"
              required
            />

            <input
              type="password"
              id="password"
              className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-5"
              placeholder="Password"
              required
            />
            <Link to="/forgot-password">
              <span className="mb-5 block hover:text-primary cursor-pointer text-black text-xs">
                Forgot Password?
              </span>
            </Link>

            <button
              type="submit"
              className="text-white bg-secondary hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full text-sm w-full px-5 py-2.5 text-center mb-2"
            >
              Log in
            </button>
          </form>
          <span className="text-sm dark:text-black">
            Don’t have an account yet?{" "}
            <Link to="/sign-up">
              <span className="text-primary">Sign up for free</span>
            </Link>
          </span>
        </div>
        <img
          className="hidden lg:block lg:w-[400px] 2xl:w-[500px]"
          src={signin}
          alt="Sign in"
        />
      </div>
    </div>
  );
};
