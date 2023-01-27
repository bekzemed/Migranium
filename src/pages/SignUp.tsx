import { useState } from "react";
import NavBar from "./NavBar";
import signup from "../assets/signup.svg";
import google from "../assets/google.svg";
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
        <div className="flex flex-col h-full justify-center lg:mr-10">
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
            className="text-black border-slate-300 justify-center  hover:bg-primary hover:border-bright  focus:outline-none text-sm font-medium rounded-full px-5 py-2 text-center inline-flex items-center mb-5 lg:mb-3"
          >
            <img src={google} alt="Google" className="mr-2" />
            Sign up with Google
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
