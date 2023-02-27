import React from "react";

const ContactUs = () => {
  return (
    <div id="ContactUs" className="w-full  py-14 px-4 lg:px-20 dark:text-black">
      <span className="block text-3xl font-bold pb-8 text-center lg:text-4xl">
        Get in touch with us
      </span>
      <form className="pb-10 md:w-[400px] lg:w-[700px] m-auto">
        <div className="xl:flex xl:basis-full dark:text-black">
          <div className="pb-5 flex-1 lg:mr-3">
            <label
              htmlFor="name"
              className="block mb-2 ml-3 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-2.5 focus-visible:outline-none focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="pb-5 flex-1 lg:mr-3">
            <label
              htmlFor="email"
              className="block mb-2 ml-3 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-2.5 focus-visible:outline-none focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="pb-5 flex-1 lg:mr-3">
            <label
              htmlFor="phone"
              className="block mb-2 ml-3 text-sm font-medium text-gray-900"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-2.5 focus-visible:outline-none focus:outline-none"
              placeholder="Enter your phone"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 ml-3 text-sm font-medium text-gray-900"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border focus-visible:outline-none focus:outline-none"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      </form>

      <div className="text-center 2xl:pb-20">
        <button
          type="submit"
          className="bg-secondary text-white rounded-full focus-visible:outline-none focus:outline-none w-[250px]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
