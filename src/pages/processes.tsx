import process1 from "../assets/process1.svg";
import process2 from "../assets/process2.svg";
import process3 from "../assets/process3.svg";
import Carousel from "react-material-ui-carousel";
import Process from "../components/Process";

const Processes = () => {
  const items = [
    {
      id: 0,
      text: "Create your business account and get unique URL & bar code",
      img: process1,
    },
    {
      id: 1,
      text: "Share URL with your customers to join the queue from their mobile devices",
      img: process2,
    },
    {
      id: 2,
      text: "Manage the waitlist virtually to provide the best customer experience",
      img: process3,
    },
  ];
  return (
    <div className="px-4 py-14 lg:px-20 xl:px-28 flex flex-col justify-center items-center">
      <span className="text-3xl font-bold pb-5 md:text-5xl">How it works</span>
      <Carousel
        className="md:hidden h-full"
        height="100%"
        activeIndicatorIconButtonProps={{
          style: {
            color: "#0070BA",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: "#F1F5FB",
          },
        }}
      >
        {items.map((item, index) => (
          <Process key={index} item={item} />
        ))}
      </Carousel>

      <div className="hidden md:flex">
        <div className="bg-primary flex flex-col items-center p-7 rounded-2xl md:mr-5">
          <span className="flex-1 md:pb-5 dark:text-black">
            Create your business account and get unique URL & bar code
          </span>
          <img src={process1} alt="Process image 1" />
        </div>
        <div className="bg-primary flex flex-col items-center p-7 rounded-2xl md:mr-5">
          <span className="flex-1 md:pb-5 dark:text-black">
            Share URL with your customers to join the queue from their mobile
            devices
          </span>
          <img src={process2} alt="Process image 2" />
        </div>
        <div className="bg-primary flex flex-col items-center p-7 rounded-2xl md:mr-5">
          <span className="flex-1 md:pb-5 dark:text-black">
            Manage the waitlist virtually to provide the best customer
            experience
          </span>
          <img src={process3} alt="Process image 3" />
        </div>
      </div>
    </div>
  );
};

export default Processes;
