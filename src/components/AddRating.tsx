import { useState } from "react";
import decline from "../assets/decline.svg";
import right from "../assets/right.svg";
import { useAppSelector } from "../redux/hooks";

const AddRating = ({
  closeQueue,
  setCloseQueue,
  setRateClosingQueue,
  rateClosingQueue,
}: any) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const selected = useAppSelector((state) => state.theme.selected);
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const color = useAppSelector((state) => state.theme.color);

  return (
    <div>
      {closeQueue && (
        <div className="bg-white rounded-lg absolute  2xl:h-auto overflow-y-scroll left-1/2 top-1/2 center-absolute dark:text-black w-[350px] xl:w-[500px] p-4 z-30 shadow-lg">
          <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
            <span>Closing your queue</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setCloseQueue(false)}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-center items-center text-xs py-6">
            <div className="mb-10">
              <span className="block mb-3">Have you visited the queue?</span>
              <div className="flex justify-center ">
                <div className="flex mr-3 items-center">
                  <img src={right} alt="" className="mr-2" />
                  <span>Yes</span>
                </div>
                <div className="flex items-center">
                  <img src={decline} alt="" className="mr-2" />
                  <span className="text-[#FF0000]">No</span>
                </div>
              </div>
            </div>

            <button
              style={selected === 10 ? { backgroundColor: theme } : {}}
              type="button"
              onClick={() => {
                setRateClosingQueue(true);
                setCloseQueue(false);
              }}
              className={`text-xs text-white rounded-full focus-visible:outline-none focus:outline-none w-[200px] ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              }`}
            >
              Close queue
            </button>
          </div>
        </div>
      )}
      {rateClosingQueue && (
        <div className="bg-white rounded-lg absolute  2xl:h-auto overflow-y-scroll left-1/2 top-1/2 center-absolute dark:text-black w-[350px] xl:w-[500px] p-4 z-30 shadow-lg">
          <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
            <span>Closing your queue</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setRateClosingQueue(false)}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-center text-xs">
            <div className="mb-10">
              <div className="py-6 border-b border-b-gray-300 mb-4">
                <span className="block mb-3">
                  Please rate the business from 1 to 5
                </span>

                <div className="flex cursor-pointer">
                  {[...Array(5)].map((_, index) => {
                    index += 1;
                    return (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={index <= (hover || rating) ? `${color}` : "#fff"}
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke={`${color}`}
                        className={`w-6 h-6 ${index !== 5 && "mr-2"}`}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    );
                  })}
                </div>
              </div>

              <div className="py-4 text-xs">
                <span className="block mb-2">
                  Please leave your comment for this business (optional)
                </span>
                <textarea
                  rows={4}
                  className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-xl border focus-visible:outline-none focus:outline-none"
                  placeholder="Write your comment..."
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                style={selected === 10 ? { backgroundColor: theme } : {}}
                type="button"
                onClick={() => setRateClosingQueue(false)}
                className={`text-xs text-white rounded-full focus-visible:outline-none focus:outline-none w-[200px] ${
                  theme === "bg-theme0" || theme === "bg-theme1"
                    ? "bg-black"
                    : theme
                }`}
              >
                Close queue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRating;
