import React from "react";
import { useAppSelector } from "../redux/hooks";

const ChatWithAdminComponent = ({ messages }: any) => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  return (
    <div className="bg-white rounded-lg px-2 py-4 mb-6 lg:px-6">
      <span className="block mb-10 text-sm lg:text-base">
        Chat with personal
      </span>
      <div className="xl:w-1/2">
        <div className="border border-gray-300 rounded-lg p-3 bg-[#F8F8F8] h-[300px]  flex flex-col mb-5 ">
          {messages.map((message: any, index: number) => (
            <div
              key={index}
              className={`mb-4 w-1/2 text-xs flex flex-col ${
                message.user ? "ml-auto" : "mr-auto"
              }`}
            >
              <span
                className={`flex justify-end ${
                  !message.user && "flex-row-reverse"
                } text-[10px]`}
              >
                <span className={`${message.user ? "mr-2" : "ml-2"}`}>
                  {message.user ? "You" : "Administrator"}
                </span>
                {message.hours}
              </span>
              <span className={`text-sm ${message.user && "lg:text-end"}`}>
                {message.message}
              </span>
            </div>
          ))}
        </div>

        <div className="lg:flex">
          <div className="mb-4 lg:w-full lg:mr-3">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full px-3 py-2 focus-visible:outline-none focus:outline-none"
              placeholder="Enter your message..."
              required
            />
          </div>
          <div className="text-end">
            <button
              style={selected === 10 ? { backgroundColor: theme } : {}}
              type="button"
              className={`py-2 px-4 text-xs font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              }`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithAdminComponent;
