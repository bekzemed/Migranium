import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import WaitlistButtons from "../components/WaitlistButtons";
import ScheduleContent from "../components/ScheduleContent";

const Schedule = () => {
  return (
    <div className="bg-primary flex flex-col overflow-y-scroll h-full dark:text-black">
      <DashNav />

      <div className="px-2 pb-5 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black">
        <div className="flex-1">
          <span className="opacity-80 block mb-1 text-xs">Cashex</span>
          <span className="text-2xl block mb-4">Schedule</span>
          <WaitlistButtons />
          <div className="bg-white rounded-lg px-2 py-4 mb-4">
            <ScheduleContent />
          </div>
        </div>

        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col">
          <div className="flex-1">
            <Header text="Schedule" />
            <WaitlistButtons />

            <div className="bg-white rounded-lg px-4 py-4 mb-4">
              <ScheduleContent />
            </div>
          </div>

          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
