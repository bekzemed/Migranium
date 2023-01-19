import Carousel from "react-material-ui-carousel";
import client1 from "../assets/client1.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import client4 from "../assets/client4.svg";
import client5 from "../assets/client5.svg";
import Client from "../components/Client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
  variableWidth: true,
  swipeToSlide: true,
  edgeFriction: 0.15,
};

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
      <div className="lg:w-[800px] m-auto">
        <span className="block pb-10 lg:pb-20 text-lg md:text-2xl lg:text-3xl dark:text-black">
          Our Clients have reduced wait times by over 300 years for 1 million
          customers using Migranium
        </span>

        <Carousel className="lg:hidden h-[100px]" indicators={false}>
          {items.map((item, index) => (
            <Client key={index} img={item.img} />
          ))}
        </Carousel>

        <Slider
          {...settings}
          className="hidden lg:block"
          prevArrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          }
          nextArrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          }
        >
          {items.map((image, i) => (
            <img key={i} src={image.img} alt="image" />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
