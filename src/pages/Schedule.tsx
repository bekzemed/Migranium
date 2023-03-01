import { useState } from "react";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import ScheduleContent from "../components/ScheduleContent";
import WaitlistButtons from "../components/WaitlistButtons";

const allEvents = [
  {
    all: true,
    upcoming: [
      {
        id: 0,
        name: "Marakinyo Saab",
        from: "09:00",
        to: "09:20",
        email: "cody@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        id: 1,
        name: "Arlene McCoy",
        from: "09:20",
        to: "09:40",
        email: "arlene@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        id: 2,
        name: "Elon McQueen",
        from: "09:40",
        to: "10:00",
        email: "elon@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
    ],
    past: [
      {
        id: 3,
        name: "Bereket Zemed",
        from: "09:00",
        to: "09:20",
        email: "bereketzemed@gmail.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        id: 4,
        name: "Arlene McCoy",
        from: "09:20",
        to: "09:40",
        email: "arlene@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        id: 5,
        name: "Elon McQueen",
        from: "09:40",
        to: "10:00",
        email: "elon@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
    ],
  },
];
const location1 = [
  {
    all: false,
    upcoming: [
      {
        id: 0,
        name: "Marakinyo Saab",
        from: "09:00",
        to: "09:20",
        email: "cody@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        id: 1,
        name: "Arlene McCoy",
        from: "09:20",
        to: "09:40",
        email: "arlene@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        id: 2,
        name: "Elon McQueen",
        from: "09:40",
        to: "10:00",
        email: "elon@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
    ],
    past: [
      {
        id: 3,
        name: "Bereket Zemed",
        from: "09:00",
        to: "09:20",
        email: "bereketzemed@gmail.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        id: 4,
        name: "Arlene McCoy",
        from: "09:20",
        to: "09:40",
        email: "arlene@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
      {
        id: 5,
        name: "Elon McQueen",
        from: "09:40",
        to: "10:00",
        email: "elon@mailforspam.com",
        phone: "+ 1 (217) 555-0113",
        healthCareNumber: "TTY: 1-888-201-6445",
        information: "",
      },
    ],
  },
];

const Schedule = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="bg-primary flex flex-col overflow-y-scroll h-full dark:text-black">
      <DashNav />

      <div className="px-2 pb-5 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black">
        <div className="flex-1">
          <span className="opacity-80 block mb-1 text-xs">Cashex</span>
          <span className="text-2xl block mb-4">Schedule</span>
          <WaitlistButtons
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          {activeButton === 0 && <ScheduleContent datas={allEvents} />}
          {activeButton === 1 && <ScheduleContent datas={location1} />}
        </div>

        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col">
          <div className="flex-1">
            <Header text="Schedule" />
            <WaitlistButtons
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />

            {activeButton === 0 && <ScheduleContent datas={allEvents} />}
            {activeButton === 1 && <ScheduleContent datas={location1} />}
          </div>

          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
