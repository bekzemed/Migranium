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

export const DashboardMobile = () => {
  return (
    <ul className="flex items-center overflow-x-scroll bg-secondary gap-9 md:justify-center whitespace-nowrap  px-2 py-4 text-white">
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
