import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import PoweredBy from "../components/PoweredBy";
import { useAppSelector } from "../redux/hooks";

const Messages = () => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  return (
    <div className="bg-primary flex-1 flex flex-col overflow-y-scroll h-full">
      <DashNav />

      <div className="px-2 pb-5 flex-1 overflow-y-scroll flex flex-col lg:hidden dark:text-black">
        <div className="flex-1">
          <span className="opacity-80 block mb-1 text-xs">Cashex</span>
          <span className="text-2xl block mb-4">Messages</span>

          <div className="flex text-xs justify-between mb-5">
            <button
              style={selected === 10 ? { backgroundColor: theme } : {}}
              type="button"
              className={`text-white border-slate-300 justify-center  ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              } focus:outline-none  font-medium rounded-full text-sm px-5 py-2 text-center inline-flex`}
            >
              All messages
            </button>

            <button
              type="button"
              className="text-black border-slate-300 justify-center  bg-white focus:outline-none  font-medium rounded-full text-sm px-5 py-2 text-center inline-flex"
            >
              Incoming
            </button>

            <button
              type="button"
              className="text-black border-slate-300 justify-center  bg-white focus:outline-none  font-medium rounded-full text-sm px-5 py-2 text-center inline-flex"
            >
              Outgoing
            </button>
          </div>

          <div className="bg-white rounded-lg px-2 py-4">
            <table className="w-full mb-4">
              <thead>
                <tr className="opacity-40 flex justify-between dark:text-black">
                  <th className="flex items-center">
                    <input
                      id="default-checkbox1"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2"
                    />
                    <label
                      htmlFor="default-checkbox1"
                      className="ml-4 text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                  </th>
                  <th>Time</th>
                  <th>Seen last time</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>

            <hr className="py-4" />
            <span className="block text-center text-xs pb-4 dark:text-black">
              No messages yet
            </span>
          </div>
        </div>

        <PoweredBy />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        <div className="lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll flex flex-col">
          <div className="flex-1">
            <Header text="Messages" />

            <div className="mb-10 flex items-center justify-between">
              <div className="flex text-xs justify-between">
                <button
                  style={selected === 10 ? { backgroundColor: theme } : {}}
                  type="button"
                  className={`text-white border-slate-300 justify-center  ${
                    theme === "bg-theme0" || theme === "bg-theme1"
                      ? "bg-black"
                      : theme
                  } focus:outline-none font-medium rounded-full text-xs px-5 py-2 text-center inline-flex mr-3`}
                >
                  All messages
                </button>

                <button
                  type="button"
                  className="text-black border-slate-300 justify-center  bg-white focus:outline-none  font-medium rounded-full text-xs px-5 py-2 text-center inline-flex mr-3"
                >
                  Incoming
                </button>

                <button
                  type="button"
                  className="text-black border-slate-300 justify-center  bg-white focus:outline-none  font-medium rounded-full text-xs px-5 py-2 text-center inline-flex"
                >
                  Outgoing
                </button>
              </div>

              <button
                type="button"
                className="text-black border-slate-300 justify-center  bg-white focus:outline-none  font-medium rounded-full text-xs px-5 py-2 text-center inline-flex"
              >
                Mark all as read
              </button>
            </div>

            <div className="bg-white rounded-lg px-2 py-4">
              <table className="w-full mb-4">
                <thead>
                  <tr className="opacity-40 flex justify-between dark:text-black">
                    <th className="flex items-center text-xs">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2"
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ml-4 text-xs font-medium text-gray-900"
                      >
                        Name
                      </label>
                    </th>
                    <th className="text-xs">Time</th>
                    <th className="text-xs">Seen last time</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>

              <hr className="py-4" />
              <span className="block text-center text-xs pb-4 dark:text-black">
                No messages yet
              </span>
            </div>
          </div>
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default Messages;
