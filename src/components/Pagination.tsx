import React from "react";
import { useAppSelector } from "../redux/hooks";

const Pagination = () => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const textColor = useAppSelector((state) => state.theme.textColor);
  console.log(theme);

  return (
    <div className="mb-10">
      <ul className="flex justify-center cursor-pointer">
        <li
          style={selected === 10 ? { backgroundColor: theme } : {}}
          className={`text-white rounded-full flex justify-center h-[35px] w-[35px] items-center mr-3 ${
            theme === "bg-theme0" || theme === "bg-theme1" ? "bg-black" : theme
          }`}
        >
          1
        </li>
        <li
          style={selected === 10 ? { color: textColor } : {}}
          className={`${
            textColor === "text-theme0" || textColor === "text-theme1"
              ? "text-black"
              : textColor
          } rounded-full flex border border-gray-300  justify-center h-[35px] w-[35px] items-center bg-primary mr-3`}
        >
          2
        </li>
        <li
          style={selected === 10 ? { color: textColor } : {}}
          className={`${
            textColor === "text-theme0" || textColor === "text-theme1"
              ? "text-black"
              : textColor
          } rounded-full flex border border-gray-300  justify-center h-[35px] w-[35px] items-center bg-primary mr-3`}
        >
          3
        </li>
        <li
          style={selected === 10 ? { color: textColor } : {}}
          className={`${
            textColor === "text-theme0" || textColor === "text-theme1"
              ? "text-black"
              : textColor
          } rounded-full flex border border-gray-300  justify-center h-[35px] w-[35px] items-center bg-primary mr-3`}
        >
          ...
        </li>
        <li
          style={selected === 10 ? { color: textColor } : {}}
          className={`${
            textColor === "text-theme0" || textColor === "text-theme1"
              ? "text-black"
              : textColor
          } rounded-full flex border border-gray-300  justify-center h-[35px] w-[35px] items-center bg-primary`}
        >
          7
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
