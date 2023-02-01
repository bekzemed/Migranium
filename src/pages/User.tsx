import { useNavigate } from "react-router-dom";
import welcome from "../assets/welcome.svg";
import logo from "../assets/logo.svg";

export const User = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary px-4 lg:px-0 text-center h-screen lg:flex lg:justify-center dark:text-black">
      <div className="flex flex-col h-full justify-center lg:mr-10 2xl:mr-16">
        <span className="font-black text-2xl pb-5 block lg:pb-3 whitespace-nowrap">
          Welcome to Cashexs
        </span>
        <span className="block pb-5 text-xs whitespace-nowrap">
          <span className="block mb-3">
            <span className="text-primary text-sm">5 people waiting</span>
          </span>
          <span className="text-sm">
            Approximately <span className="text-primary">40 - 50 mins</span>{" "}
            wait time
          </span>
        </span>

        <button
          type="button"
          className="text-white bg-secondary hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full text-sm w-full px-5 py-2.5 text-center"
          onClick={() => navigate("home-page")}
        >
          Join waitlist
        </button>
        <div className="text-center flex items-center text-sm justify-center mt-6">
          <span className="mr-2">Powered by</span>
          <span className="text-primary migranium-font flex items-center">
            <img src={logo} alt="Logo" className="w-[20px]" />
            migranium
          </span>
        </div>
      </div>

      <img className="hidden lg:block w-[400px]" src={welcome} alt="Welcome" />
    </div>
  );
};
