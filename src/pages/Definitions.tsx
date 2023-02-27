import definition1 from "../assets/definition1.svg";
import definition2 from "../assets/definition2.svg";
import definition3 from "../assets/definition3.svg";
import definition4 from "../assets/definition4.svg";
import Definition from "../components/Definition";

const Definitions = () => {
  return (
    <div
      id="Features"
      className="px-4 py-20 lg:px-20 2xl:px-80 dark:text-black"
    >
      <span className="text-3xl font-bold pb-5 flex justify-center md:text-5xl">
        What is migranium?
      </span>
      <Definition
        image={definition1}
        text1="Customers can virtually join the line anytime"
        text2="Allow your customers to join a virtual line in real-time from their
            mobile devices and keep track of their appointments from anywhere."
      />
      <Definition
        image={definition2}
        text1="Improve productivity with precise wait time estimates"
        text2="Estimate your wait times with the power of machine learning, using
        real-time data from your business. Keep your customers informed with
        automatic notifications as estimates are updated."
        reverse={true}
        enlarge={true}
      />

      <Definition
        image={definition3}
        text1="Enhance your operations and grow your business"
        text2="Leverage insights from your operations trends and customer daily
        interactions to make informed decisions that would impact your
        business."
        noPadding={true}
      />

      <Definition
        image={definition4}
        text1="Display your waitlist anywhere"
        text2="With Migranium you can display the wait-list on the big screen or
        embed it directly into your website for customers to see."
        reverse={true}
      />
    </div>
  );
};

export default Definitions;
