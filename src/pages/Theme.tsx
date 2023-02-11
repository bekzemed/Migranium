import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import Themes from "../components/Themes";

const Theme = () => {
  return (
    <div className="bg-primary flex-1 flex flex-col dark:text-black overflow-y-scroll h-full">
      <DashNav />

      <div className="px-2 pb-5 flex-1 flex flex-col overflow-y-scroll lg:hidden dark:text-black">
        <div className="flex-1">
          <span className="opacity-80 block mb-1 text-xs">Cashex</span>
          <span className="text-2xl block mb-4">Themes</span>

          <div className="rounded-lg px-2 py-4 flex flex-col mb-6 bg-white scrollable shadow-sm">
            <Themes />
          </div>
        </div>
        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col">
          <div className="flex-1">
            <Header text="Themes" />

            <div className="bg-white rounded-lg px-2 py-4">
              <Themes />
            </div>
          </div>
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default Theme;
