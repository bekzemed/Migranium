import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import add from "../assets/add.svg";
import { options } from "../util/operatingHours";
import TimePicker from "./TimePicker";
import QR from "../assets/QR-code.svg";
import copy from "../assets/copy.svg";

const GenerateQRCode = ({ showQRCode, setShowQRCode }: any) => {
  const [fromDate, setFromDate] = useState(false);
  const [toDate, setToDate] = useState(false);

  const handleFromChange = (selectedDate: Date) => console.log(selectedDate);
  const handleFromClose = (state: boolean) => setFromDate(state);

  const handleToChange = (selectedDate: Date) => console.log(selectedDate);
  const handleToClose = (state: boolean) => setToDate(state);

  return (
    <div className="bg-white rounded-lg absolute left-1/2 top-1/2 date-picker dark:text-black w-[380px] xl:w-[500px] p-4 z-30 shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
        <span>Generate QR code</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowQRCode(!showQRCode)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="py-4 text-xs text-center">
        <span className="block mb-3">
          Use this QR code to share Cashex services
        </span>
        <img src={QR} alt="QR" className="m-auto mb-3" />
        <span className="block mb-3 opacity-40">
          Or use link to share Cashex service
        </span>
        <div className="relative mb-5 lg:w-[330px] m-auto">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <img src={copy} alt="Copy" />
          </div>
          <input
            type="text"
            id="copy"
            className="bg-gray-100 border border-gray-300 text-[10px] placeholder:text-bright text-xs rounded-full cursor-pointer block w-full p-2 focus-visible:outline-none focus:outline-none"
            placeholder="migranium.com/welcome/cashex/que-to-get-services"
            required
            disabled
          />
        </div>
      </div>

      <div className="py-4 flex flex-col justify-center items-center">
        <div className="flex justify-cente mb-3">
          <button
            type="button"
            className="p-2 px-4 text-xs xl:w-[150px] font-medium text-center bg-secondary text-white  rounded-full focus-visible:outline-none focus:outline-none"
          >
            Print QR code
          </button>
        </div>
        <span className="opacity-40 text-sm">Generate new QR code</span>
      </div>
    </div>
  );
};

export default GenerateQRCode;
