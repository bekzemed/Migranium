import React from "react";
import trash from "../assets/trash.svg";

const WaitListOptions = () => {
  return (
    <div className="absolute bg-white rounded-lg w-[140px] z-30 right-0 shadow-lg p-4 border border-gray-300">
      <div className="flex flex-col">
        <div className="flex text-xs items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#0070BA"
            className="w-5 h-5 mr-3"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
          No-show
        </div>
        <div className="flex text-xs items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#0070BA"
            className="w-5 h-5 mr-3"
          >
            <path
              fillRule="evenodd"
              d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          Chat
        </div>
        <div className="flex text-xs items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#0070BA"
            className="w-5 h-5 mr-3"
          >
            <path
              fillRule="evenodd"
              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
              clipRule="evenodd"
            />
          </svg>
          Move
        </div>
        <div className="flex text-xs items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#0070BA"
            className="w-5 h-5 mr-3"
          >
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg>
          Edit
        </div>
        <div className="flex text-xs items-center">
          <img src={trash} alt="" className="mr-3.5" />
          <span className="text-[#EF2C49]">Remove</span>
        </div>
      </div>
    </div>
  );
};

export default WaitListOptions;
