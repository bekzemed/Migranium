import { useState } from "react";
import {
  DashboardUserDesktop,
  DashboarUserMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import { UserHeader } from "../components/Header";
import UserProfileSettingComponent from "../components/UserProfileSettingComponent";

const UserProfileSetting = () => {
  const [show, onShow] = useState(false);
  const [anonymousMode, setAnonymousMode] = useState(false);
  const [onNotificationShow, setOnNotificationShow] = useState(false);
  const [selectedCashexUser, setSelectedCashexUser] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black">
        <div className="flex items-center justify-between">
          <div>
            <span className="opacity-80 block mb-1 text-xs">
              Ronald Richards
            </span>
            <span className="text-2xl block mb-4">Profile settings</span>
          </div>
          <button
            type="button"
            className=" p-2 text-xs font-medium text-center bg-secondary text-white  rounded-full focus-visible:outline-none focus:outline-none"
          >
            Save changes
          </button>
        </div>

        <UserProfileSettingComponent />
      </div>

      <div className="text-xs w-screen block lg:hidden">
        <DashboarUserMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardUserDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block dark:text-black">
          <UserHeader
            text="Chat with admin"
            header="Ronald Richards"
            isAnonymous={true}
            setAnonymousMode={setAnonymousMode}
            anonymousMode={anonymousMode}
            onNotificationShow={onNotificationShow}
            showNotification={showNotification}
            setShowNotification={setShowNotification}
            data={selectedCashexUser}
          />

          <div className="text-end mb-4">
            <button
              type="button"
              className=" p-2 text-xs font-medium text-center bg-secondary text-white  rounded-full focus-visible:outline-none focus:outline-none"
            >
              Save changes
            </button>
          </div>
          <UserProfileSettingComponent />
        </div>
      </div>
    </div>
  );
};

export default UserProfileSetting;
