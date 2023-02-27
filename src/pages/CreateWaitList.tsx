import { Link } from "react-router-dom";

const CreateWaitList = () => {
  return (
    <div className="py-14 px-4 text-center lg:px-20 2xl:px-36 md:w-[800px] m-auto dark:text-black">
      <span className="block text-3xl pb-8">
        Sign up now and create your waitlist
      </span>
      <Link to="/sign-up">
        <button
          type="button"
          className="bg-secondary text-white rounded-full focus-visible:outline-none focus:outline-none"
        >
          Try it free
        </button>
      </Link>
    </div>
  );
};

export default CreateWaitList;
