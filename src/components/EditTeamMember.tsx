import { useAppSelector } from "../redux/hooks";

const EditTeamMember = ({
  value,
  setOnEditTeamMember,
  onEditTeamMember,
}: any) => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  return (
    <div className="bg-white rounded-lg p-4 absolute left-1/2 top-1/2 center-absolute dark:text-black w-[350px] z-30 shadow-lg flex flex-col">
      <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
        <span>Edit Team Member</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setOnEditTeamMember(!onEditTeamMember)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="pt-4 dark:text-black">
        <div className="bg-white rounded-lg py-2 text-xs">
          <div className="pb-8 border-b">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-2"
                defaultValue={value}
                disabled
                required
              />

              <label
                htmlFor="station"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                Station
              </label>
              <input
                type="text"
                id="station"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-2"
                defaultValue={"Staion 1"}
                required
              />
              <label
                htmlFor="position"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                Position
              </label>
              <input
                type="text"
                id="position"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-2"
                defaultValue={"Obstetrician"}
                required
              />

              <label
                htmlFor="role"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                defaultValue={"Admin"}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            style={selected === 10 ? { backgroundColor: theme } : {}}
            type="button"
            className={`p-2 text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
              theme === "bg-theme0" || theme === "bg-theme1"
                ? "bg-black"
                : theme
            }`}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTeamMember;
