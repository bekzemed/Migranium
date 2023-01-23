import React from "react";

const Pagination = () => {
  return (
    <div className="mb-10">
      <ul className="flex justify-center cursor-pointer">
        <li className="text-white rounded-full flex justify-center h-[35px] w-[35px] items-center bg-secondary mr-3">
          1
        </li>
        <li className="text-primary rounded-full flex border border-secondary  justify-center h-[35px] w-[35px] items-center bg-primary mr-3">
          2
        </li>
        <li className="text-primary rounded-full flex border border-secondary  justify-center h-[35px] w-[35px] items-center bg-primary mr-3">
          3
        </li>
        <li className="text-primary rounded-full flex border border-secondary  justify-center h-[35px] w-[35px] items-center bg-primary mr-3">
          ...
        </li>
        <li className="text-primary rounded-full flex border border-secondary  justify-center h-[35px] w-[35px] items-center bg-primary">
          7
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
