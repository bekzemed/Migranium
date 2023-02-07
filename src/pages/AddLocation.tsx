import { useNavigate } from "react-router-dom";
import AddLocationComponent from "../components/AddLocationComponent";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";

const AddLocation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary h-screen flex flex-col overflow-y-scroll">
      <DashNav />

      <div className="pt-10 px-2 flex-1 overflow-y-scroll lg:hidden flex flex-col dark:text-black">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <span className="opacity-80 block mb-1 text-xs">Cashex</span>
              <span className="text-2xl block mb-4">Add location</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => navigate("/dashboard", { replace: true })}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <AddLocationComponent />
        </div>
        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col">
          <div className="flex-1">
            <Header text="Add location" />

            <AddLocationComponent />
          </div>
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default AddLocation;
