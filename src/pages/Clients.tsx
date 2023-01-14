import Carousel from "react-material-ui-carousel";
import client1 from "../assets/client1.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import client4 from "../assets/client4.svg";
import client5 from "../assets/client5.svg";
import Client from "../components/Client";

const Clients = () => {
  const items = [
    {
      img: client1,
    },
    {
      img: client2,
    },
    {
      img: client3,
    },
    {
      img: client4,
    },
    {
      img: client5,
    },
  ];
  return (
    <div
      id="Clients"
      className="py-14 px-4 text-center lg:px-20 2xl:px-80 bg-primary"
    >
      <div className="lg:w-[800px] m-auto">
        <span className="block pb-10 lg:pb-20 text-lg md:text-2xl lg:text-3xl dark:text-black">
          Our Clients have saved 1 million customers more than 300 years of
          waiting with Migranium
        </span>

        <Carousel className="md:hidden h-[100px]" indicators={false}>
          {items.map((item, index) => (
            <Client key={index} img={item.img} />
          ))}
        </Carousel>

        <div className="hidden md:flex overflow-x-scroll md:overflow-hidden justify-between scrollbar-hide  scrollbar">
          <img className="mr-6 md:mr-0" src={client1} alt="Clients" />
          <img className="mr-6 md:mr-0" src={client2} alt="Clients" />
          <img className="mr-6 md:mr-0" src={client3} alt="Clients" />
          <img className="mr-6 md:mr-0" src={client4} alt="Clients" />
          <img className="mr-6 md:mr-0" src={client5} alt="Clients" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
