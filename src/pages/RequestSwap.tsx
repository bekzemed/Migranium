import { useState } from "react";
import decline from "../assets/decline.svg";
import right from "../assets/right.svg";
import {
  DashboardUserDesktop,
  DashboarUserMobile,
} from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import { UserHeader } from "../components/Header";
import { useAppSelector } from "../redux/hooks";

const RequestSwap = () => {
  const [show, onShow] = useState(false);
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const [anonymousMode, setAnonymousMode] = useState(false);
  const [onNotificationShow, setOnNotificationShow] = useState(false);
  const [selectedCashexUser, setSelectedCashexUser] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="bg-primary h-screen flex flex-col">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black">
        <span className="opacity-80 block mb-1 text-xs">Ronald Richards</span>
        <span className="text-2xl block mb-4">Request to swap turn</span>

        <div className="bg-white rounded-lg px-4 py-4 mb-6 lg:px-6">
          <div className="flex flex-col text-xs">
            <div className="mb-4">
              <span className="block mb-3 opacity-40">
                You have proposal to swap turn with:
              </span>
              <span className="text-base">Brooklyn Simmons</span>
            </div>
            <div className="mb-4">
              <span className="block mb-3 opacity-40">
                proposal number on queue:
              </span>
              <span className="text-base">3</span>
            </div>
            <div className="mb-4">
              <span className="block mb-3 opacity-40">
                proposal estimated wait time is:
              </span>
              <span className="text-base">0 hours 45 minutes</span>
            </div>
            <div className="flex">
              <div className="flex items-center mr-3">
                <img src={right} alt="" className="mr-2" />
                <span className="text-[#6ACA57]">Accept</span>
              </div>
              <div className="flex items-center mr-3">
                <img src={decline} alt="" className="mr-2" />
                <span className="text-[#FF0000]">Decline</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs w-screen block lg:hidden">
        <DashboarUserMobile />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardUserDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block dark:text-black">
          <UserHeader
            text="Request to swap turn"
            header="Ronald Richards"
            isAnonymous={true}
            setAnonymousMode={setAnonymousMode}
            anonymousMode={anonymousMode}
            onNotificationShow={onNotificationShow}
            showNotification={showNotification}
            setShowNotification={setShowNotification}
            data={selectedCashexUser}
          />

          <div className="bg-white rounded-lg px-4 py-4 mb-6 lg:px-6 lg:py-10">
            <span className="block mb-5 text-lg">Request to swap turn</span>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 text-xs">
              <div className="lg:mb-4 xl:mb-0">
                <span className="block mb-3 opacity-40">
                  You have proposal to swap turn with:
                </span>
                <span className="text-base">Brooklyn Simmons</span>
              </div>
              <div className="xl:text-center lg:mb-4 xl:mb-0">
                <span className="block mb-3 opacity-40">
                  proposal number on queue:
                </span>
                <span className="text-base">3</span>
              </div>
              <div className="xl:text-center">
                <span className="block mb-3 opacity-40">
                  proposal estimated wait time is:
                </span>
                <span className="text-base">0 hours 45 minutes</span>
              </div>
              <div className="flex xl:justify-center items-end">
                <div className="flex items-center mr-3 cursor-pointer">
                  <img src={right} alt="" className="mr-2" />
                  <span className="text-[#6ACA57]">Accept</span>
                </div>
                <div className="flex items-center mr-3 cursor-pointer">
                  <img src={decline} alt="" className="mr-2" />
                  <span className="text-[#FF0000]">Decline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSwap;
