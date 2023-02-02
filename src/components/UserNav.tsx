import { Link, useLocation } from "react-router-dom";
import bell from "../assets/bell-outline.svg";

const UserNav = ({
  onNotificationShow,
  showNotification,
  setShowNotification,
  data,
}: any) => {
  const onNotification = () => setShowNotification(!showNotification);

  return (
    <div className="mb-6 flex justify-between items-center dark:text-black">
      <div>
        <span className="text-xl block">Clinic</span>
      </div>

      <div className="text-xs flex items-center">
        {onNotificationShow ? (
          <button
            type="button"
            className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white  rounded-lg focus-visible:outline-none focus:outline-none"
            onClick={onNotification}
          >
            <img src={bell} alt="Notification" className="w-[35px]" />

            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center border-none justify-center w-6 h-6 text-xs font-bold  border-2 text-red-500 rounded-full -top-1 -right-1">
              1
            </div>
          </button>
        ) : (
          <>
            <img
              src={bell}
              alt="Notification"
              className="mr-2 w-[35px] cursor-pointer"
            />
          </>
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
