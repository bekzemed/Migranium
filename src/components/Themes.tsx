import { useState } from "react";
import { changeTheme, selectedTheme } from "../redux/features/themeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Themes = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [customColor, setCustomColor] = useState("");
  const selected = useAppSelector((state) => state.theme.selected);
  const theme = useAppSelector((state) => state.theme.backgroundTheme);

  const check = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={`${
        selected === 0 || selected === 1 || selected === 10 ? "#000" : "#fff"
      }`}
      className="w-5 h-5 absolute left-1/2 top-1/2 center-absolute"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <div>
      <span className="block pb-4 border-b border-b-gray-300 text-xl">
        Styling and theming
      </span>
      <div className="lg:flex lg:my-6">
        <div className="lg:mr-4 lg:max-w-xs">
          <span className="block my-6 font-extrabold text-lg lg:my-0 lg:mb-2">
            Theme
          </span>
          <span className="block mb-4 opacity-70">
            Change your theme colors. These will be used on your public pages.
          </span>
        </div>

        <div>
          <div>
            <span className="block text-sm mb-1 lg:mb-2">Theme</span>
            <div className="flex flex-wrap">
              <div
                className="w-[36px] h-[36px] mr-1 mb-1 cursor-pointer border border-gray-300 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme0"));
                  dispatch(selectedTheme(0));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 0 && check}
              </div>
              <div
                className="w-[36px] h-[36px] mr-1 cursor-pointer bg-theme1 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme1"));
                  dispatch(selectedTheme(1));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 1 && check}
              </div>
              <div
                className="w-[36px] h-[36px] mr-1 cursor-pointer bg-theme2 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme2"));
                  dispatch(selectedTheme(2));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 2 && check}
              </div>

              <div
                className="w-[36px] h-[36px] mr-1 cursor-pointer bg-theme3 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme3"));
                  dispatch(selectedTheme(3));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 3 && check}
              </div>
              <div
                className="w-[36px] h-[36px] mr-1 cursor-pointer bg-theme4 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme4"));
                  dispatch(selectedTheme(4));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 4 && check}
              </div>
              <div
                className="w-[36px] h-[36px] mr-1 cursor-pointer bg-theme5 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme5"));
                  dispatch(selectedTheme(5));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 5 && check}
              </div>
              <div
                className="w-[36px] h-[36px] mr-1 cursor-pointer bg-theme6 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme6"));
                  dispatch(selectedTheme(6));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 6 && check}
              </div>
              <div
                className="w-[36px] h-[36px] mr-1 cursor-pointer bg-theme7 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme7"));
                  dispatch(selectedTheme(7));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 7 && check}
              </div>
              <div
                className="w-[36px] h-[36px] mr-1 cursor-pointer bg-theme8 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme8"));
                  dispatch(selectedTheme(8));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 8 && check}
              </div>
              <div
                className="w-[36px] h-[36px] mr-1 cursor-pointer bg-theme9 rounded-lg relative"
                onClick={() => {
                  dispatch(changeTheme("bg-theme9"));
                  dispatch(selectedTheme(9));
                  {
                    open && setOpen(false);
                  }
                }}
              >
                {selected === 9 && check}
              </div>
            </div>
          </div>

          <div className="my-4">
            <span className="block text-sm mb-1 lg:mb-2">Custom</span>
            <div
              className="w-[36px] h-[36px] mr-1 mb-1 cursor-pointer border border-gray-300 rounded-lg relative"
              style={
                selected === 10
                  ? { backgroundColor: theme }
                  : { backgroundColor: customColor }
              }
              onClick={() => {
                dispatch(selectedTheme(10));
                setOpen(!open);
              }}
            >
              {selected === 10 && check}
            </div>

            {(open || selected === 10) && (
              <div className="my-6">
                <label
                  htmlFor="bgColor"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Background color
                </label>
                <div className="flex relative mb-4">
                  <input
                    type="color"
                    id="bgColor"
                    className="center-absolute absolute z-40 left-10 top-1/2 h-full"
                    onChange={(e) => setCustomColor(e.target.value)}
                    value={customColor || theme}
                    required
                  />
                  <input
                    type="text"
                    id="bgColor"
                    className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-sm rounded-full  block pl-20 pr-2 py-2 focus-visible:outline-none focus:outline-none"
                    placeholder="Select custom color"
                    value={customColor}
                    readOnly
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className=" p-2 text-xs xl:w-[150px] font-medium text-center bg-secondary text-white  rounded-full focus-visible:outline-none focus:outline-none"
                    onClick={() => {
                      dispatch(changeTheme(`${customColor}`));
                    }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
