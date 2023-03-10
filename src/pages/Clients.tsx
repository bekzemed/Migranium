import Carousel from "react-material-ui-carousel";
import client1 from "../assets/client1.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import client4 from "../assets/client4.svg";
import client5 from "../assets/client5.svg";
import Client from "../components/Client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

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
      className="py-20 px-4 text-center lg:px-20 2xl:px-80 bg-primary"
    >
      <div className=" m-auto">
        <span className="block pb-10 lg:pb-20 text-lg md:text-2xl lg:text-3xl dark:text-black">
          Our Clients have reduced wait times by over 300 years for 1 million
          customers using Migranium
        </span>

        <Carousel className="lg:hidden h-[100px]" indicators={false}>
          {items.map((item, index) => (
            <Client key={index} img={item.img} />
          ))}
        </Carousel>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="hidden lg:block"
        >
          {items.map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image.img} alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
