import React from "react";
import ProfileLogo from "./ProfileLogo";

const UserProfileSettingComponent = () => {
  return (
    <div className="bg-white rounded-lg px-2 py-4 mb-6 lg:px-6">
      <span className="block mb-6 text-sm lg:text-base">Profile info</span>

      <div className="pb-10 border-b border-b-gray-300">
        <div className="lg:flex">
          <div className="lg:mr-3">
            <label
              htmlFor="name"
              className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border lg:w-[200px] border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
              defaultValue={"Ronald"}
              required
            />
          </div>
          <div>
            <label
              htmlFor="surname"
              className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
            >
              Surname
            </label>
            <input
              type="text"
              id="surname"
              className="bg-gray-50 border border-gray-300 lg:w-[200px] text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
              defaultValue={"Richards"}
              required
            />
          </div>
        </div>
        <ProfileLogo />
      </div>

      <div className="py-4">
        <span className="block mb-4 text-sm">Delete account</span>

        <div className="flex text-xs items-center">
          <div className="mr-3">
            <button
              type="button"
              className=" p-2 text-xs font-medium text-center w-[110px] bg-secondary text-white  rounded-full focus-visible:outline-none focus:outline-none"
            >
              Save changes
            </button>
          </div>
          <span>
            All data will be deleted and you will have to create an account
            again
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettingComponent;
