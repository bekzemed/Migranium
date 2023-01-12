import React from "react";
import client1 from "../assets/client1.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import client4 from "../assets/client4.svg";
import client5 from "../assets/client5.svg";

const Clients = () => {
  return (
    <div className="py-14 px-4 text-center lg:px-20 2xl:px-80 bg-primary">
      <div className="md:w-[800px] m-auto">
        <span className="block pb-10 text-lg md:text-2xl">
          Our Clients have saved 1 million customers more than 300 years of
          waiting with Migranium
        </span>

        <div className="flex overflow-x-scroll md:overflow-hidden justify-between scrollbar-hide whitespace-nowrap scrollbar">
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
