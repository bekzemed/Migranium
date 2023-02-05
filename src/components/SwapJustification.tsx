const SwapJustification = ({ setSwap, swap }: any) => {
  return (
    <div>
      <div className="bg-white rounded-lg absolute   2xl:h-auto overflow-y-scroll left-1/2 top-1/2 center-absolute dark:text-black w-[350px] xl:w-[500px] p-4 z-30 shadow-lg">
        <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
          <span>Closing swap</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setSwap(!swap)}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center text-xs">
          <div className="mb-6">
            <div className="py-4 text-xs">
              <span className="block mb-4">Please leave your reason</span>
              <textarea
                rows={4}
                className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-xl border focus-visible:outline-none focus:outline-none"
                placeholder="Write your reason..."
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="bg-secondary text-xs text-white rounded-full focus-visible:outline-none focus:outline-none w-[200px]"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapJustification;
