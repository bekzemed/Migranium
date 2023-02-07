import { Link, useLocation } from "react-router-dom";
import bell from "../assets/bell-outline.svg";
import { useAppSelector } from "../redux/hooks";

const UserNav = ({
  onNotificationShow,
  showNotification,
  setShowNotification,
  data,
}: any) => {
  const onNotification = () => setShowNotification(!showNotification);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const selected = useAppSelector((state) => state.theme.selected);

  return (
    <div className="mb-6 flex justify-between items-center dark:text-black">
      <div>
        <span className="text-xl block">Cashexs</span>
        <span className="block text-sm">
          2972 Westheimer Rd. Santa Ana, Illinois 85486
        </span>
      </div>

      <div className="text-xs flex items-center">
        {onNotificationShow ? (
          <button
            type="button"
            className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white  rounded-lg focus-visible:outline-none focus:outline-none"
            onClick={onNotification}
          >
            <svg
              style={selected === 10 ? { fill: fill } : {}}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 cursor-pointer ${
                fill === "fill-theme0" || fill === "fill-theme1"
                  ? "fill-black"
                  : fill
              }`}
            >
              <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
              <path
                fillRule="evenodd"
                d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                clipRule="evenodd"
              />
            </svg>

            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center border-none justify-center w-6 h-6 text-xs font-bold  border-2 text-red-500 rounded-full -top-1 -right-1">
              1
            </div>
          </button>
        ) : (
          <svg
            style={selected === 10 ? { fill: fill } : {}}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-6 h-6 mr-3 cursor-pointer ${
              fill === "fill-theme0" || fill === "fill-theme1"
                ? "fill-black"
                : fill
            }`}
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {/*  */}
        {showNotification && (
          <>
            <div className="absolute top-24 right-6 notification"></div>
            <div className="absolute right-4 mx-auto z-50 text-black top-28 rounded-lg bg-white text-sm p-4 shadow-lg">
              <div className="flex justify-between items-center pb-4">
                <span className="text-xl">Notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setShowNotification(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <hr className="pb-4" />
              <div>
                <div className="flex justify-between text-xs mb-4">
                  <span>Your estimated wait time is {data.time}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-xs  mb-4">
                  <div>
                    <span className="block">
                      {data.name} is proposal you to exchange que, check
                      notification on
                    </span>
                    <span>Home page - Request to Swap turn in queue</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                <hr />
                <span className="text-sm py-4 text-center opacity-40 block">
                  Mark all as read
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserNav;
