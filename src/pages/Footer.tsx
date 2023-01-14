import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <div className="py-14 pb-0 px-4 lg:px-20 md:hidden">
        <div>
          <a
            href="/"
            className="flex items-center justify-center py-10 border-y text-bright"
          >
            <img src={logo} className="h-6 mr-1 sm:h-9" alt="Migranium Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-primary migranium-font">
              migranium
            </span>
          </a>
        </div>
        <div className="text-sm text-gray-700 dark:text-white py-12 flex justify-between opacity-80">
          <span>Features</span>
          <span>Clients</span>
          <span>Login</span>
          <span>Create account</span>
        </div>

        <div className="flex flex-col items-center pb-10">
          <span className="pb-8 font-extrabold">Join us!</span>
          <ul className="flex gap-10 ">
            <li>
              <img src={twitter} alt="Twitter" />
            </li>

            <li>
              <img src={facebook} alt="Facebook" />
            </li>

            <li>
              <img src={instagram} alt="Instagram" />
            </li>
            <li>
              <img src={youtube} alt="Youtube" />
            </li>
          </ul>
        </div>

        <div className="text-xs opacity-80 flex justify-between pb-3">
          <div>
            <span className="mr-2">Terms</span>
            <Link to="privacy-policy">
              <span className="cursor-pointer">Privacy Policy</span>
            </Link>
          </div>
          <div>
            <span className="mr-2">&copy;{date.getFullYear()}</span>
            <span>Migranium</span>
          </div>
        </div>
      </div>

      {/* desktop */}

      <div className="hidden md:flex flex-col justify-center px-10">
        <div className="py-10 border-y flex justify-between items-center mb-10">
          <div className="flex">
            <img src={logo} className="h-6 mr-1 sm:h-9" alt="Migranium Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-primary migranium-font">
              migranium
            </span>
          </div>

          <ul className="text-sm text-gray-700 dark:text-white opacity-80 gap-5 flex">
            <li>
              <span>Features</span>
            </li>

            <li>
              <span>Clients</span>
            </li>

            <li>
              <span>Login</span>
            </li>

            <li>
              <span>Create account</span>
            </li>
          </ul>

          <div className="flex flex-col">
            <span className="pb-2 font-extrabold text-center">Join us!</span>
            <ul className="flex gap-5">
              <li>
                <img src={twitter} alt="Twitter" />
              </li>

              <li>
                <img src={facebook} alt="Facebook" />
              </li>

              <li>
                <img src={instagram} alt="Instagram" />
              </li>
              <li>
                <img src={youtube} alt="Youtube" />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-xs opacity-80 flex justify-evenly py-10">
          <div>
            <a href="" className="cursor-pointer mr-2 hover:text-primary">
              Terms
            </a>
            <Link to="privacy-policy">
              <span className="cursor-pointer hover:text-primary">
                Privacy Policy
              </span>
            </Link>
          </div>
          <div>
            <span className="mr-2">&copy;{date.getFullYear()}</span>
            <span>Migranium</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
