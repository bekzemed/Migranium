import { useState } from "react";
import NavBar from "./NavBar";
import signup from "../assets/signup.svg";
import google from "../assets/google.svg";
import welcome from "../assets/welcome.svg";
import { Link, useNavigate } from "react-router-dom";

export const User = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <NavBar show={show} onDone={() => setShow(!show)} hide={true} />
      <div className="bg-primary px-4 pt-[62px] lg:pt-[70px] text-center h-screen lg:flex lg:justify-center dark:text-black">
        <div className="flex flex-col h-full justify-center lg:mr-10 2xl:mr-16">
          <span className="font-black text-2xl pb-5 block lg:pb-3 whitespace-nowrap">
            Welcome to Migranium
          </span>
          <span className="block pb-5 text-xs whitespace-nowrap">
            <span className="block mb-3">
              to queue in{" "}
              <span className="text-primary text-sm">Cashex - Station 1</span>{" "}
              click to continue
            </span>
            <span>
              {" "}
              <span className="text-primary text-sm">40 - 60 min</span>{" "}
              estimated wait{" "}
              <span className="text-primary text-sm"> 1 - 2</span> people
              waiting
            </span>
          </span>

          <button
            type="button"
            className="text-white bg-secondary hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full text-sm w-full px-5 py-2.5 text-center"
          >
            Join waitlist
          </button>
        </div>
        <img
          className="hidden lg:block w-[400px]"
          src={welcome}
          alt="Welcome"
        />
      </div>
    </div>
  );
};
