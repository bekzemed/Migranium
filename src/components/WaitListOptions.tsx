import { useAppSelector } from "../redux/hooks";

const WaitListOptions = () => {
  const color = useAppSelector((state) => state.theme.color);
  const fill = useAppSelector((state) => state.theme.fillColor);
  const selected = useAppSelector((state) => state.theme.selected);
  const textColor = useAppSelector((state) => state.theme.textColor);

  return (
    <div className="absolute bg-white rounded-lg w-[140px] right-2 shadow-lg p-4 border border-gray-300 z-[100]">
      <div className="flex flex-col">
        <div className="lg:hidden">
          <div className="flex text-xs items-center mb-3">
            {/* message */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={`${color}`}
              fill="#fff"
              className="w-5 h-5 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
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
              Message
            </span>
          </div>
          <div className="flex text-xs items-center mb-3">
            {/* phone */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={`${color}`}
              fill="#fff"
              className="w-5 h-5 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
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
              Phone
            </span>
          </div>
        </div>

        <div className="flex text-xs items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            style={selected === 10 ? { fill: fill } : {}}
            className={`w-5 h-5 mr-3 ${
              fill === "fill-theme0" || fill === "fill-theme1"
                ? "fill-black"
                : fill
            }`}
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>

          <span
            style={selected === 10 ? { color: textColor } : {}}
            className={`${
              textColor === "text-theme0" || textColor === "text-theme1"
                ? "text-black"
                : textColor
            }`}
          >
            No-show
          </span>
        </div>
        <div className="flex text-xs items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={`${color}`}
            fill="#fff"
            className="w-5 h-5 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
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
            Chat
          </span>
        </div>
        <div className="flex text-xs items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            style={selected === 10 ? { fill: fill } : {}}
            className={`w-5 h-5 mr-3 ${
              fill === "fill-theme0" || fill === "fill-theme1"
                ? "fill-black"
                : fill
            }`}
          >
            <path
              fillRule="evenodd"
              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
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
            Move
          </span>
        </div>
        <div className="flex text-xs items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            style={selected === 10 ? { fill: fill } : {}}
            className={`w-5 h-5 mr-3 ${
              fill === "fill-theme0" || fill === "fill-theme1"
                ? "fill-black"
                : fill
            }`}
          >
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg>
          <span
            style={selected === 10 ? { color: textColor } : {}}
            className={`${
              textColor === "text-theme0" || textColor === "text-theme1"
                ? "text-black"
                : textColor
            }`}
          >
            Edit
          </span>
        </div>
        <div className="flex text-xs items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={`${color}`}
            fill="#fff"
            className="w-5 h-5 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
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
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default WaitListOptions;
