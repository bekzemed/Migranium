import React from "react";
import { useLocation } from "react-router-dom";
import locationLogo from "../assets/location-upload.svg";
import { useAppSelector } from "../redux/hooks";

const ProfileLogo = () => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const location = useLocation();
  return (
    <>
      <span className="block mb-2 text-xs font-medium text-gray-900 dark:text-black">
        Logo
      </span>
      <div className="flex items-center">
        <img src={locationLogo} alt="Location logo" className="mr-4" />
        {location.pathname === "/user/profile-setting" ? (
          <button
            type="button"
            className="p-2 text-xs font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none bg-secondary"
          >
            Browse
          </button>
        ) : (
          <button
            type="button"
            style={selected === 10 ? { backgroundColor: theme } : {}}
            className={`p-2 text-xs font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
              theme === "bg-theme0" || theme === "bg-theme1"
                ? "bg-black"
                : theme
            }`}
          >
            Browse
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileLogo;
