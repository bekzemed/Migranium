import { useState } from "react";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import Themes from "../components/Themes";

const Theme = () => {
  const [show, onShow] = useState(false);

  return (
    <div className="bg-primary flex-1 flex flex-col dark:text-black overflow-y-scroll">
      <DashNav show={show} onDone={() => onShow(!show)} />

      <div className="px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black">
        <span className="opacity-80 block mb-1 text-xs">Cashex</span>
        <span className="text-2xl block mb-4">Themes</span>

        <div className="rounded-lg px-2 py-4 flex flex-col mb-6 bg-white">
          <Themes />
        </div>
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden lg:block">
          <Header text="Themes" />

          <div className="bg-white rounded-lg px-2 py-4">
            <Themes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
