import { useAppSelector } from "../redux/hooks";

const AddCustomFields = ({ addCustomFields, setAddCustomFields }: any) => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const textColor = useAppSelector((state) => state.theme.textColor);
  return (
    <div className="bg-white rounded-lg absolute overflow-y-scroll left-1/2 top-1/2 center-absolute dark:text-black w-[350px] xl:w-[500px] p-4 z-30 shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
        <span>Add new custom fields</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setAddCustomFields(!addCustomFields)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="py-4">
        <span className="block text-base mb-6">Add new field</span>
        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
          >
            Create custom field
          </label>
          <input
            type="text"
            id="postalCode"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mb-2"
            placeholder="Enter title of field..."
            required
          />
          <input
            type="text"
            id="postalCode"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-full  block p-2 focus-visible:outline-none focus:outline-none mb-2"
            placeholder="Enter placeholder for field..."
            required
          />
          <div className="flex items-center ">
            {/* add */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              style={selected === 10 ? { fill: fill } : {}}
              className={`w-5 h-5 mr-2 ${
                fill === "fill-theme0" || fill === "fill-theme1"
                  ? "fill-black"
                  : fill
              }`}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                clipRule="evenodd"
              />
            </svg>
            <span
              style={selected === 10 ? { color: textColor } : {}}
              className={`${
                textColor === "text-theme0" || textColor === "text-theme1"
                  ? "text-black"
                  : textColor
              }`}
            >
              Add field
            </span>
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

export default AddCustomFields;
