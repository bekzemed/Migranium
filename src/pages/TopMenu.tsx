import TopMenuImage from "../assets/top-menu.svg";

const TopMenu = () => {
  return (
    <div className="lg:flex bg-primary px-4 py-20 md:px-28">
      <div>
        <span className="font-black text-5xl pb-10 block lg:leading-snug dark:text-black">
          Virtual queue management
        </span>
        <span className="font-light opacity-60 leading-relaxed pb-10 block dark:text-black">
          Don't let long wait times make you lose customers! With Migranium you
          can effectively manage your queues virtually and keep your customers
          happy.
        </span>
        <div className="flex items-center justify-between pb-10 md:justify-start">
          <button className="bg-secondary text-white font-bold py-2 px-8 rounded-full focus-visible:outline-none focus:outline-none md:mr-10">
            Try it free
          </button>

          <div className="flex items-center lg:text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-2 fill-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>

            <span className="font-bold dark:text-black">See how it works</span>
          </div>
        </div>
      </div>
      <img
        src={TopMenuImage}
        alt="Migranium Top Menu Image"
        className="lg:h-80 2xl:h-[500px] m-auto"
      />
    </div>
  );
};

export default TopMenu;
