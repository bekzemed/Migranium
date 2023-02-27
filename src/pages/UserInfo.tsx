import { useNavigate } from "react-router-dom";
import steps from "../assets/steps.svg";
import info from "../assets/userInfo.svg";
import { useAppSelector } from "../redux/hooks";

export const UserInfo = () => {
  const navigate = useNavigate();
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);

  const onSubmit = () => navigate("/dashboard/waitlist");
  return (
    <div>
      <div className="bg-primary text-center lg:flex lg:justify-center">
        <div className="flex flex-col h-auto justify-center lg:w-[500px] lg:mr-10">
          <span className="font-black text-3xl pb-5 block lg:leading-snug dark:text-black">
            Almost there
          </span>

          <form action="" onSubmit={onSubmit}>
            <div className="lg:flex">
              <input
                type="text"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none dark:text-black dark:bg-primary mb-5 lg:mr-2"
                placeholder="First name..."
                required
              />

              <input
                type="text"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-5"
                placeholder="Last name..."
                required
              />
            </div>
            <div className="lg:flex">
              <input
                type="text"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none dark:text-black dark:bg-primary mb-5 lg:mr-2"
                placeholder="Phone number..."
                required
              />
              <input
                type="text"
                className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-5"
                placeholder="Health card number..."
                required
              />
            </div>

            <input
              type="email"
              className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-5 lg:mr-2"
              placeholder="Email..."
              required
            />

            <button
              type="submit"
              style={selected === 10 ? { backgroundColor: theme } : {}}
              className={`text-white bg-secondary hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full text-sm w-full lg:w-1/2 px-5 py-2.5 text-center ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              }`}
            >
              Confirm appointment
            </button>
          </form>
        </div>
        <img className="hidden lg:block auto" src={info} alt="User Info" />
      </div>
    </div>
  );
};
