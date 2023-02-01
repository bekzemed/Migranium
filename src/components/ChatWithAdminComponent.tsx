import React from "react";

const ChatWithAdminComponent = ({ messages }: any) => {
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
              type="submit"
              className="bg-secondary text-white rounded-full focus-visible:outline-none focus:outline-none text-xs px-4 py-2"
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
