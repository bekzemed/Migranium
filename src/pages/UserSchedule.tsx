import { useState } from "react";
import { useNavigate } from "react-router-dom";
import welcome from "../assets/welcome.svg";
import { useAppSelector } from "../redux/hooks";

export const UserSchedule = () => {
  const navigate = useNavigate();
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);

  return (
    <div>
      <div className="bg-primary px-4 lg:px-0 text-center h-screen lg:flex lg:justify-center dark:text-black">
        <div className="flex flex-col h-full justify-center lg:mr-10 2xl:mr-16">
          <span className="font-black text-2xl pb-5 block lg:pb-3 whitespace-nowrap">
            Welcome to Cashexs
          </span>
          <span className="block pb-5 text-xs whitespace-nowrap">
            <span className="block mb-3">
              click to schedule your appointment
            </span>
          </span>

          <button
            style={selected === 10 ? { backgroundColor: theme } : {}}
            type="button"
            className={`text-white focus-visible:outline-none focus:outline-none font-medium rounded-full text-sm w-full px-5 py-2.5 text-center ${
              theme === "bg-theme0" || theme === "bg-theme1"
                ? "bg-black"
                : theme
            }`}
            onClick={() => navigate("appointment")}
          >
            Schedule appointment
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
