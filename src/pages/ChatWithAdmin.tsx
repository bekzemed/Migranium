import { useState } from "react";
import ChatWithAdminComponent from "../components/ChatWithAdminComponent";
import {
  DashboardUserDesktop,
  DashboarUserMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import { useAppSelector } from "../redux/hooks";

const date = new Date();

const messages = [
  {
    user: true,
    hours: date.toLocaleTimeString(),
    message: "Hi, can I make another procedure",
  },
  {
    user: false,
    hours: date.toLocaleTimeString(),
    message: "Yes, why not, when do you wanna make it?",
  },
];

const ChatWithAdmin = () => {
  const [show, onShow] = useState(false);
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const [anonymousMode, setAnonymousMode] = useState(false);
  const [onNotificationShow, setOnNotificationShow] = useState(false);
  const [selectedCashexUser, setSelectedCashexUser] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className={`${theme} h-screen flex flex-col`}>
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black">
        <span className="opacity-80 block mb-1 text-xs">Ronald Richards</span>
        <span className="text-2xl block mb-4">Chat with admin</span>
        <ChatWithAdminComponent messages={messages} />
      </div>

      <div className="text-xs w-screen block lg:hidden dark:text-black">
        <DashboarUserMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardUserDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block dark:text-black">
          <Header
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
          <ChatWithAdminComponent messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default ChatWithAdmin;
