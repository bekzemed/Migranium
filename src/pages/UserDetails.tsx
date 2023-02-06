import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export const UserDetails = () => {
  const navigate = useNavigate();

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
              type="submit"
              className="text-white bg-secondary hover:bg-bright focus-visible:outline-none focus:outline-none font-medium rounded-full text-xs w-full px-5 py-2.5 text-center mb-4"
            >
              Confirm
            </button>
          </form>
          <span className="text-xs">
            By clicking 'Confirm' you agree to{" "}
            <Link to="/privacy-policy">
              <span className="text-primary underline">
                Migranium Privacy Policy
              </span>
            </Link>{" "}
            and{" "}
            <Link to="/terms">
              <span className="text-primary underline">Terms of use</span>
            </Link>
          </span>
          <div className="text-center flex items-center justify-center text-xs mt-6">
            <span className="mr-2">Powered by</span>
            <Link to="/">
              <span className="text-primary migranium-font flex items-center">
                <img src={logo} alt="Logo" className="w-[20px]" />
                migranium
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
