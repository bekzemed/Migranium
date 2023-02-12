import { useState } from "react";
import ChatWithAdminComponent from "../components/ChatWithAdminComponent";
import {
  DashboardUserDesktop,
  DashboarUserMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";

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
  const [anonymousMode, setAnonymousMode] = useState(false);
  const [onNotificationShow, setOnNotificationShow] = useState(false);
  const [selectedCashexUser, setSelectedCashexUser] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="bg-primary h-screen flex flex-col pb-[72px] overflow-y-scroll lg:pb-0">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="flex-1 overflow-y-scroll lg:hidden dark:text-black flex flex-col">
        <div className="px-2 flex-1">
          <span className="opacity-80 block mb-1 text-xs">Ronald Richards</span>
          <span className="text-2xl block mb-4">Chat with admin</span>
          <div className="overflow-y-scroll">
            <ChatWithAdminComponent messages={messages} />
          </div>
        </div>
      </div>
      <DashboarUserMobile />

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

          <ChatWithAdminComponent messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default ChatWithAdmin;
