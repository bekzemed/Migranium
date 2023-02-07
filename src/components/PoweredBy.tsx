import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const PoweredBy = () => {
  return (
    <div className="text-center flex items-center justify-center text-[10px] opacity-70 m-3 lg:m-0">
      <span className="mr-2">Powered by</span>
      <Link to="/">
        <span className="text-primary migranium-font flex items-center">
          <img src={logo} alt="Logo" className="w-[20px]" />
          migranium
        </span>
      </Link>
    </div>
  );
};

export default PoweredBy;
