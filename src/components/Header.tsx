import { Link, useLocation } from "react-router-dom";
import bell from "../assets/bell-outline.svg";
import { useAppSelector } from "../redux/hooks";

const Header = ({
  text,
  onNotificationShow,
  showNotification,
  setShowNotification,
  header,
}: any) => {
  const onNotification = () => setShowNotification(!showNotification);
  const location = useLocation();

  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);

  return (
    <div className="mb-10 flex justify-between items-center dark:text-black">
      <div>
        {location.pathname !== "/dashboard/upgrade-profile" && (
          <span className="opacity-70 block mb-1 text-xs">
            {header || "Cashex"}
          </span>
        )}
        <span className="text-2xl block">{text}</span>
      </div>

      <div className="text-xs flex items-center relative">
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
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 mr-3 cursor-pointer ${
                fill === "fill-theme0" || fill === "fill-theme1"
                  ? "fill-black"
                  : fill
              }`}
              style={selected === 10 ? { fill: fill } : {}}
            >
              <path
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clipRule="evenodd"
              />
            </svg>
          </>
        )}
        {/*  */}
        {showNotification && (
          <>
            <div className="absolute top-16 left-3 arrow"></div>
            <div className="absolute left-0 right-0 mx-auto z-50 text-black top-20 rounded-lg bg-white text-sm p-4 shadow-lg">
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

              <>
                <div className="flex justify-between text-xs mb-4">
                  <span>You have one new customer on Station 1, check it</span>
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

                <div className="flex justify-between text-xs opacity-40 mb-4">
                  <span>You have one new customer on Station 1, check it</span>
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
              </>
            </div>
          </>
        )}

        {/*  */}
        <>
          <Link to="/dashboard/upgrade-profile">
            <button
              style={selected === 10 ? { backgroundColor: theme } : {}}
              type="button"
              className={`text-white ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              } border-slate-300 justify-center focus:outline-none  font-medium rounded-full text-xs px-5 py-1.5 text-center inline-flex items-center mr-3`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
              Upgrade profile
            </button>
          </Link>
          <span className="mr-3 cursor-pointer">Alexander Loremip</span>
          <div
            style={selected === 10 ? { backgroundColor: theme } : {}}
            className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full dark:bg-gray-600 cursor-pointer ${
              theme === "bg-theme0" || theme === "bg-theme1"
                ? "bg-black"
                : theme
            }`}
          >
            <span className="font-medium text-white dark:text-gray-300">
              AL
            </span>
          </div>
        </>
      </div>
    </div>
  );
};

export default Header;

export const UserHeader = ({
  text,
  onNotificationShow,
  showNotification,
  setShowNotification,
  header,
}: any) => {
  const onNotification = () => setShowNotification(!showNotification);
  const location = useLocation();
  const fill = useAppSelector((state) => state.theme.fillColor);
  const selected = useAppSelector((state) => state.theme.selected);

  return (
    <div className="mb-10 flex justify-between items-center dark:text-black">
      <div>
        {location.pathname !== "/dashboard/upgrade-profile" && (
          <span className="opacity-70 block mb-1 text-xs">
            {header || "Cashex"}
          </span>
        )}
        <span className="text-2xl block">{text}</span>
      </div>

      <div className="text-xs flex items-center relative">
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
              className={`w-6 h-6 cursor-pointer mr-3  ${
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
            <div className="absolute top-16 left-3 arrow"></div>
            <div className="absolute left-0 right-0 mx-auto z-50 text-black top-20 rounded-lg bg-white text-sm p-4 shadow-lg">
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

              <>
                <div className="flex justify-between text-xs mb-4">
                  <span>You have one new customer on Station 1, check it</span>
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

                <div className="flex justify-between text-xs opacity-40 mb-4">
                  <span>You have one new customer on Station 1, check it</span>
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
              </>
            </div>
          </>
        )}

        {/*  */}
        <>
          <Link to="/dashboard/upgrade-profile">
            <button
              type="button"
              className="text-white  border-slate-300 justify-center  bg-secondary focus:outline-none  font-medium rounded-full text-xs px-5 py-1.5 text-center inline-flex items-center mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
              Upgrade profile
            </button>
          </Link>
          <span className="mr-3 cursor-pointer">Alexander Loremip</span>
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-secondary rounded-full dark:bg-gray-600 cursor-pointer">
            <span className="font-medium text-white dark:text-gray-300">
              AL
            </span>
          </div>
        </>
      </div>
    </div>
  );
};
