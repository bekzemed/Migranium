import { Link } from "react-router-dom";
import chat from "../assets/chat-white.svg";
import customers from "../assets/customers.svg";
import fields from "../assets/fields.svg";
import home from "../assets/home.svg";
import location from "../assets/location.svg";
import logo from "../assets/logo-white.svg";
import logout from "../assets/logout.svg";
import members from "../assets/members.svg";
import messages from "../assets/messages-disable.svg";
import settings from "../assets/settings.svg";
import swap from "../assets/swap.svg";
import waitlist from "../assets/waitlist-disable.svg";
import { useAppSelector } from "../redux/hooks";

export const DashboardMobile = () => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);

  return (
    <ul
      style={selected === 10 ? { backgroundColor: theme } : {}}
      className={`flex items-center overflow-x-scroll ${
        theme === "bg-theme0" || theme === "bg-theme1" ? "bg-black" : theme
      } gap-9 md:justify-center whitespace-nowrap  px-2 py-4 text-white`}
    >
      <Link to="/dashboard/waitlist">
        <li>
          <img src={waitlist} alt="Waitlist" className="m-auto mb-1" />
          <span>Waitlist</span>
        </li>
      </Link>

      <Link to="/dashboard/messages">
        <li>
          <img src={messages} alt="Messages" className="m-auto mb-1" />

          <span>Messages</span>
        </li>
      </Link>

      <Link to="/dashboard">
        <li>
          <img src={location} alt="Location" className="m-auto mb-1" />

          <span>Locations</span>
        </li>
      </Link>

      <Link to="/dashboard/team-members">
        <li>
          <img src={members} alt="Team members" className="m-auto mb-1" />

          <span>Team members</span>
        </li>
      </Link>

      <Link to="/dashboard/custom-fields">
        <li>
          <img src={fields} alt="Team members" className="m-auto mb-1" />

          <span>Custom Fields</span>
        </li>
      </Link>

      <Link to="/dashboard/customers">
        <li>
          <img src={customers} alt="Customers" className="m-auto mb-1" />
          <span>Customers</span>
        </li>
      </Link>
      <Link to="/dashboard/theme">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#fff"
            className="w-5 h-5 mx-auto mb-1"
          >
            <path
              fillRule="evenodd"
              d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
              clipRule="evenodd"
            />
          </svg>
          <span>Theme</span>
        </li>
      </Link>

      <Link to="/dashboard/settings">
        <li>
          <img src={settings} alt="Settings" className="m-auto mb-1" />

          <span>Settings</span>
        </li>
      </Link>
      <li>
        <img src={logout} alt="Log out" className="m-auto mb-1" />

        <span>Log out</span>
      </li>
    </ul>
  );
};

export const DashboarUserMobile = () => {
  return (
    <ul className="flex items-center overflow-x-scroll bg-secondary gap-9 md:justify-center whitespace-nowrap  px-2 py-4 text-white">
      <Link to="/user/home-page">
        <li>
          <img src={home} alt="Home" className="m-auto mb-1" />

          <span>Home Page</span>
        </li>
      </Link>

      <Link to="/user/chat-with-admin">
        <li>
          <img src={chat} alt="chat" className="m-auto mb-1" />
          <span>Chat with admin</span>
        </li>
      </Link>

      <Link to="/user/request-swap">
        <li>
          <img src={swap} alt="Swap" className="m-auto mb-1" />

          <span>Request to swap</span>
        </li>
      </Link>

      <Link to="/user/profile-setting">
        <li>
          <img src={settings} alt="Settings" className="m-auto mb-1" />

          <span>Profile settings</span>
        </li>
      </Link>
      <li>
        <img src={logout} alt="Log out" className="m-auto mb-1" />

        <span>Log out</span>
      </li>
    </ul>
  );
};

export const DashboardDesktop = () => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);

  return (
    <div className="text-xs hidden lg:block w-[250px]">
      <div
        style={selected === 10 ? { backgroundColor: theme } : {}}
        className={`flex flex-col h-screen p-8 ${
          theme === "bg-theme0" || theme === "bg-theme1" ? "bg-black" : theme
        }`}
      >
        <Link to="/">
          <div className="flex items-center cursor-pointer px-2 lg:mb-[30px] 2xl:mb-[70px] rounded-lg">
            <img src={logo} className="mr-2 w-[31px]" alt="Migranium Logo" />

            <span className="text-lg font-semibold text-white migranium-font">
              migranium
            </span>
          </div>
        </Link>
        <ul className="gap-2 text-white flex-1">
          <Link to="/dashboard/waitlist">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <img className="mr-2 w-[20px]" src={waitlist} alt="Waitlist" />

              <span>Waitlist</span>
            </li>
          </Link>

          <Link to="/dashboard/messages">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <img className="mr-2 w-[20px]" src={messages} alt="Messages" />

              <span>Messages</span>
            </li>
          </Link>

          <Link to="/dashboard">
            <li className="flex p-2 items-center hover:bg-list cursor-pointer rounded-lg lg:mb-3 2xl:mb-5">
              <img className="mr-2 w-[20px]" src={location} alt="Location" />

              <span>Locations</span>
            </li>
          </Link>

          <Link to="/dashboard/team-members">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <img className="mr-2 w-[20px]" src={members} alt="Team members" />

              <span>Team members</span>
            </li>
          </Link>

          <Link to="/dashboard/custom-fields">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <img className="mr-2 w-[20px]" src={fields} alt="Team members" />

              <span>Custom Fields</span>
            </li>
          </Link>

          <Link to="/dashboard/customers">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <img className="mr-2 w-[20px]" src={customers} alt="Customers" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/dashboard/theme">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#fff"
                className="w-5 h-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                  clipRule="evenodd"
                />
              </svg>

              <span>Theme</span>
            </li>
          </Link>
        </ul>

        <ul className="gap-2 text-white">
          <Link to="/dashboard/settings">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <img className="mr-2 w-[20px]" src={settings} alt="Settings" />

              <span>Settings</span>
            </li>
          </Link>
          <li className="flex p-2 items-center hover:bg-list rounded-lg cursor-pointer">
            <img className="mr-2 w-[20px]" src={logout} alt="logout" />

            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export const DashboardUserDesktop = () => {
  return (
    <div className="text-xs hidden lg:block w-[250px]">
      <div className="flex flex-col h-screen p-8 bg-secondary">
        <Link to="/">
          <div className="flex items-center cursor-pointer px-2 lg:mb-[30px] 2xl:mb-[70px]">
            <img src={logo} className="mr-2 w-[31px]" alt="Migranium Logo" />

            <span className="text-lg font-semibold text-white migranium-font">
              migranium
            </span>
          </div>
        </Link>

        <ul className="gap-2 text-white flex-1">
          <Link to="/user/home-page">
            <li className="flex p-2 items-center hover:bg-list cursor-pointer rounded-lg lg:mb-3 2xl:mb-5">
              <img className="mr-2 w-[20px]" src={home} alt="home" />

              <span>Home Page</span>
            </li>
          </Link>

          <Link to="/user/chat-with-admin">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <img className="mr-2 w-[20px]" src={chat} alt="chat" />

              <span>Chat with admin</span>
            </li>
          </Link>

          <Link to="/user/request-swap">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <img className="mr-2 w-[20px]" src={swap} alt="swap" />

              <span>Request to swap</span>
            </li>
          </Link>

          <Link to="/user/profile-setting">
            <li className="flex p-2 items-center hover:bg-list rounded-lg lg:mb-3 2xl:mb-5 cursor-pointer">
              <img className="mr-2 w-[20px]" src={settings} alt="Settings" />

              <span>profile settings</span>
            </li>
          </Link>
        </ul>

        <ul className="gap-2 text-white">
          <li className="flex p-2 items-center hover:bg-list rounded-lg cursor-pointer">
            <img className="mr-2 w-[20px]" src={logout} alt="logout" />

            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
