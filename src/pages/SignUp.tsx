import { useState } from "react";
import NavBar from "./NavBar";
import signup from "../assets/signup.svg";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const onSignUp = () => {
    navigate("/about-business");
  };
  return (
    <div>
      <NavBar show={show} onDone={() => setShow(!show)} />
      <div className="bg-primary px-4 pb-20 pt-32 md:px-28 2xl:px-0 text-center h-screen lg:flex lg:justify-center">
        <div className="flex flex-col h-full justify-center lg:w-[500px] lg:mr-10">
          <span className="font-black text-2xl pb-5 block lg:pb-3 dark:text-black">
            Just a few steps!
          </span>
          <span className="pb-5 dark:text-black lg:pb-3 text-xs">
            By signing up, I agree to Migranium{" "}
            <Link to="/terms">
              <span className="text-primary">Terms</span> and{" "}
            </Link>
            <Link to="/privacy-policy">
              <span className="text-primary">Privacy Policy</span>.
            </Link>
          </span>
          <button
            type="button"
            className="text-black border-slate-300 justify-center  hover:bg-primary hover:border-bright  focus:outline-none text-xs font-medium rounded-full px-5 py-2 text-center inline-flex items-center mb-5 lg:mb-3"
          >
            <svg
              className="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
          <span className="flex items-center justify-center pb-5 lg:pb-3">
            <hr className="w-full" />
            <span className="mx-3.5 dark:text-black">OR</span>
            <hr className="w-full" />
          </span>
          <form action="" onSubmit={onSignUp}>
            <input
              type="email"
              id="email"
              className="bg-primary border border-gray-300 text-xs text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-2"
              placeholder="Email..."
              required
            />
            <input
              type="text"
              id="userName"
              className="bg-primary border border-gray-300 text-xs text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-2"
              placeholder="User name..."
              required
            />
            <input
              type="password"
              id="password"
              className="bg-primary border border-gray-300 text-xs text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-2"
              placeholder="Password..."
              required
            />
            <input
              type="password"
              id="confirm_password"
              className="bg-primary border border-gray-300 text-xs text-gray-900 rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-2"
              placeholder="Confirm password..."
              required
            />

            <button
              type="submit"
              className="text-white bg-secondary hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full text-sm w-full px-5 py-2.5 text-center mb-2"
            >
              Create account
            </button>
          </form>
          <span className="text-sm dark:text-black">
            Already have an account?{" "}
            <Link to="/sign-in">
              <span className="text-primary">Sign in</span>
            </Link>
          </span>
        </div>
        <img className="hidden lg:block w-[500px]" src={signup} alt="Sign up" />
      </div>
    </div>
  );
};
