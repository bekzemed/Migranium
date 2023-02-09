import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useAppSelector } from "../redux/hooks";

export const UserDetails = () => {
  const navigate = useNavigate();
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const textColor = useAppSelector((state) => state.theme.textColor);
  const fill = useAppSelector((state) => state.theme.fillColor);

  const onSubmit = () => navigate("/user/home-page");
  return (
    <div>
      <div className="bg-primary px-4 lg:px-0 text-center h-screen lg:flex lg:justify-center dark:text-black">
        <div className="flex flex-col h-full justify-center lg:w-[400px] ">
          <span className="font-black text-sm pb-3 block lg:pb-3">Cashexs</span>
          <span className="font-black text-2xl pb-5 block lg:pb-3">
            Enter your details
          </span>

          <form action="" onSubmit={onSubmit}>
            <label
              htmlFor="name"
              className="block mb-1 text-xs font-medium text-start"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-lg  block w-full p-2 focus-visible:outline-none focus:outline-none dark:bg-primary mb-5"
              placeholder="Name"
              required
            />

            <label
              htmlFor="phone"
              className="block mb-1 text-xs font-medium text-start"
            >
              Phone
            </label>

            <input
              type="text"
              id="phone"
              className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-lg  block w-full p-2 focus-visible:outline-none focus:outline-none dark:bg-primary mb-5"
              placeholder="Phone"
              required
            />
            <label
              htmlFor="email"
              className="block mb-1 text-xs font-medium text-start"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              className="bg-primary border border-gray-300 text-gray-900 text-xs rounded-lg  block w-full p-2 focus-visible:outline-none focus:outline-none dark:bg-primary mb-5"
              placeholder="Email"
              required
            />

            <button
              style={selected === 10 ? { backgroundColor: theme } : {}}
              type="submit"
              className={`text-white focus-visible:outline-none focus:outline-none font-medium rounded-full text-xs w-full px-5 py-2.5 text-center mb-4 ${
                theme === "bg-theme0" || theme === "bg-theme1"
                  ? "bg-black"
                  : theme
              }`}
            >
              Confirm
            </button>
          </form>
          <span className="text-xs">
            By clicking 'Confirm' you agree to{" "}
            <Link to="/privacy-policy">
              <span
                style={selected === 10 ? { color: textColor } : {}}
                className={`underline ${
                  textColor === "text-theme0" || textColor === "text-theme1"
                    ? "text-black"
                    : textColor
                }`}
              >
                Migranium Privacy Policy
              </span>
            </Link>{" "}
            and{" "}
            <Link to="/terms">
              <span
                style={selected === 10 ? { color: textColor } : {}}
                className={`underline ${
                  textColor === "text-theme0" || textColor === "text-theme1"
                    ? "text-black"
                    : textColor
                }`}
              >
                Terms of use
              </span>
            </Link>
          </span>
          <div className="text-center flex items-center justify-center text-xs mt-6">
            <span className="mr-2">Powered by</span>
            <span
              style={selected === 10 ? { color: textColor } : {}}
              className={`migranium-font flex items-center ${
                textColor === "text-theme0" || textColor === "text-theme1"
                  ? "text-black"
                  : textColor
              }`}
            >
              <svg
                width="20"
                height="31"
                viewBox="0 0 32 31"
                xmlns="http://www.w3.org/2000/svg"
                className={`cursor-pointer ${
                  fill === "fill-theme0" || fill === "fill-theme1"
                    ? "fill-black"
                    : fill
                }`}
                style={selected === 10 ? { fill: fill } : {}}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.2382 20.1711L22.6706 17.7345C22.6935 17.8134 22.7166 17.8916 22.7393 17.9686L22.7393 17.9686C22.7686 18.0682 22.7974 18.1659 22.8247 18.2607C22.942 18.6676 23.0397 19.044 23.0895 19.409C23.1756 20.0406 23.1176 20.6193 22.7355 21.198L22.0024 21.9323C21.0904 22.846 19.7599 23.2031 18.5129 22.869L17.7978 22.6774L20.117 20.3581L20.0691 20.3102C20.1292 20.2699 20.1859 20.2235 20.2382 20.1711ZM18.395 20.2566L13.1421 18.8491C12.7561 18.7457 12.4548 18.444 12.3517 18.058L10.7393 12.0194C10.6364 11.6343 10.7465 11.2236 11.0281 10.9416L15.4437 6.5182C15.726 6.2354 16.1379 6.12486 16.5238 6.22828L22.5398 7.84026C22.9258 7.94368 23.2272 8.24532 23.3302 8.63138L24.9426 14.67C25.0455 15.055 24.9354 15.4657 24.6539 15.7478L23.6934 16.7099L23.727 16.7019C23.7952 16.9898 23.8789 17.274 23.9684 17.5778L23.9684 17.5779L23.9685 17.5781L23.9687 17.5788C23.9998 17.6843 24.0316 17.7923 24.0637 17.9036C24.1841 18.3214 24.304 18.7724 24.3671 19.2347C24.3805 19.333 24.3913 19.4319 24.3991 19.5315L26.4181 17.509C27.3278 16.5977 27.6833 15.2709 27.3511 14.0269L25.7387 7.98828C25.4057 6.741 24.432 5.76647 23.185 5.43234L17.169 3.82037C15.9221 3.48624 14.5916 3.84337 13.6795 4.75702L9.2638 9.1804C8.35412 10.0917 7.99861 11.4184 8.33079 12.6625L9.94319 18.7011C10.2762 19.9483 11.2499 20.9229 12.4969 21.257L16.3596 22.292L18.395 20.2566Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8509 10.9474L18.0418 12.3383C18.4277 12.4417 18.7291 12.7434 18.8322 13.1294L20.4446 19.168C20.5474 19.5531 20.4374 19.9638 20.1558 20.2458L15.7401 24.6692C15.4578 24.952 15.046 25.0625 14.66 24.9591L8.64406 23.3471C8.25809 23.2437 7.95671 22.9421 7.85362 22.556L6.24122 16.5174C6.1384 16.1324 6.24844 15.7217 6.53001 15.4396L7.49067 14.4773C7.4238 14.1995 7.34278 13.9244 7.25633 13.6309L7.25633 13.6309C7.22515 13.5251 7.19327 13.4168 7.16109 13.3052C7.04064 12.8874 6.92076 12.4364 6.8577 11.974C6.8417 11.8567 6.82935 11.7383 6.82147 11.6192L4.76576 13.6784C3.85607 14.5897 3.50056 15.9165 3.83274 17.1605L5.44515 23.1991C5.77819 24.4464 6.75187 25.4209 7.99886 25.7551L14.0148 27.367C15.2618 27.7012 16.5923 27.344 17.5044 26.4304L21.9201 22.007C22.8297 21.0957 23.1852 19.7689 22.8531 18.5249L21.2407 12.4863C20.9076 11.239 19.9339 10.2645 18.687 9.93039L14.8864 8.91202L12.8509 10.9474ZM13.4482 8.52667L12.671 8.31842C11.424 7.98429 10.0935 8.34141 9.18144 9.25506L8.62625 9.81122L8.6311 9.81505C8.1221 10.4598 8.03945 11.097 8.13529 11.7998C8.18506 12.1648 8.28277 12.5412 8.40005 12.9481C8.42739 13.0429 8.45617 13.1406 8.48552 13.2402L8.54014 13.426L10.9457 11.0162C10.9799 10.9819 11.0161 10.9502 11.0539 10.921L13.4482 8.52667Z"
                />
              </svg>
              migranium
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
