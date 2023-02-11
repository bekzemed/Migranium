import { useState } from "react";
import {
  DashboardUserDesktop,
  DashboarUserMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header, { UserHeader } from "../components/Header";
import UserProfileSettingComponent from "../components/UserProfileSettingComponent";
import { useAppSelector } from "../redux/hooks";

const UserProfileSetting = () => {
  const [show, onShow] = useState(false);
  const [anonymousMode, setAnonymousMode] = useState(false);
  const [onNotificationShow, setOnNotificationShow] = useState(false);
  const [selectedCashexUser, setSelectedCashexUser] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);

  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="pt-10 flex-1 flex flex-col overflow-y-scroll lg:hidden dark:text-black">
        <div className="px-2 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="opacity-80 block mb-1 text-xs">
                Ronald Richards
              </span>
              <span className="text-2xl block mb-4">Profile settings</span>
            </div>

            <button
              style={selected === 10 ? { backgroundColor: theme } : {}}
              type="button"
              className={`p-2 whitespace-nowrap text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              }`}
            >
              Save changes
            </button>
          </div>

          <UserProfileSettingComponent />
        </div>
        <div className="text-xs w-screen block lg:hidden">
          <DashboarUserMobile />
        </div>
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardUserDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block dark:text-black">
          {/* <UserHeader
            text="Chat with admin"
            header="Ronald Richards"
            isAnonymous={true}
            setAnonymousMode={setAnonymousMode}
            anonymousMode={anonymousMode}
            onNotificationShow={onNotificationShow}
            showNotification={showNotification}
            setShowNotification={setShowNotification}
            data={selectedCashexUser}
          /> */}
          <Header
            text="Chat with admin"
            header="Ronald Richards"
            onNotificationShow={onNotificationShow}
            showNotification={showNotification}
            setShowNotification={setShowNotification}
          />

          <div className="text-end mb-4">
            <button
              style={selected === 10 ? { backgroundColor: theme } : {}}
              type="button"
              className={`p-2 whitespace-nowrap text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              }`}
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
