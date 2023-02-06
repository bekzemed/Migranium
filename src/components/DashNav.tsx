import { Link, useLocation } from "react-router-dom";
import bell from "../assets/bell.svg";

import { useScrollDirection } from "../hook/useScrollDirection";
import { useAppSelector } from "../redux/hooks";

const DashNav = ({
  notification,
  showNotification,
  setShowNotification,
}: any) => {
  const scrollDirection = useScrollDirection();

  const onNotification = () => setShowNotification(!showNotification);
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const location = useLocation();

  return (
    <div className="lg:hidden">
      <>
        <nav
          className={`fixed ${
            scrollDirection === "down" ? "-top-24" : "top-0"
          }  bg-primary relative lg:bg-white px-2 py-2.5 lg:py-4 transition-all duration-500 w-full z-10 md:px-5`}
        >
          {/*  */}
          {showNotification && (
            <>
              <div className="absolute top-16 arrow"></div>
              <div className="absolute left-2 right-2 z-50 text-black top-20 rounded-lg bg-white text-sm p-4 backdrop-blur-3xl">
                <div className="flex justify-between items-center pb-4">
                  <span className="text-xl">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
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

                <div className="flex justify-between text-xs opacity-40 mb-28">
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
              </div>
            </>
          )}

          {/*  */}
          <div className="container flex flex-wrap items-center justify-end mx-auto">
            <div className="flex items-center md:justify-between lg:hidden">
              <Link to="/dashboard/upgrade-profile">
                <div
                  style={selected === 10 ? { backgroundColor: theme } : {}}
                  className={`text-white border-slate-300 justify-center focus:outline-none  font-medium rounded-full text-xs px-5 py-1.5 text-center inline-flex items-center mr-3 ${
                    theme === "bg-theme0" || theme === "bg-theme1"
                      ? "bg-black"
                      : theme
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#fff"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
              {notification ? (
                <button
                  type="button"
                  className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white  rounded-lg focus-visible:outline-none focus:outline-none"
                  onClick={onNotification}
                >
                  <img src={bell} alt="Notification" />

                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center border-none justify-center w-6 h-6 text-xs font-bold  border-2 text-red-500 rounded-full -top-1 -right-1">
                    1
                  </div>
                </button>
              ) : (
                <img src={bell} alt="Notification" />
              )}
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default DashNav;
