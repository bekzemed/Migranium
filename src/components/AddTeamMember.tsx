import { useAppSelector } from "../redux/hooks";

const AddTeamMember = ({ addTeamMember, setAddTeamMember }: any) => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  return (
    <div className="bg-white rounded-lg absolute left-1/2 top-1/2 center-absolute dark:text-black w-[350px] xl:w-[400px] p-4 z-30 shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
        <span>Add new team member</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setAddTeamMember(!addTeamMember)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="py-4">
        <div className="mb-2">
          <label
            htmlFor="name"
            className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
          >
            Phone number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="station"
            className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
          >
            Station
          </label>
          <input
            type="text"
            id="station"
            className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
            placeholder="Enter station"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="jobTitle"
            className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
          >
            Job title
          </label>
          <input
            type="text"
            id="jobTitle"
            className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
            placeholder="Enter job title"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="role"
            className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
          >
            Role
          </label>
          <input
            type="text"
            id="role"
            className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mr-3"
            placeholder="Enter role"
            required
          />
        </div>
      </div>

      <div className="py-4">
        <div className="flex justify-center">
          <button
            type="button"
            style={selected === 10 ? { backgroundColor: theme } : {}}
            className={`p-2 text-xs xl:w-[150px] font-medium text-center text-white  rounded-full focus-visible:outline-none focus:outline-none ${
              theme === "bg-theme0" || theme === "bg-theme1"
                ? "bg-black"
                : theme
            }`}
          >
            Add team member
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMember;
