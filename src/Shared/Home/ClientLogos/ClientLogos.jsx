import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start.png";
import logo7 from "../../../assets/brands/start-people 1.png";

const logos = [
  { id: 1, src: logo1, alt: "Amazon" },
  { id: 2, src: logo2, alt: "Amazon Vector" },
  { id: 3, src: logo3, alt: "Casio" },
  { id: 4, src: logo4, alt: "Moonstar" },
  { id: 5, src: logo5, alt: "Randstad" },
  { id: 6, src: logo6, alt: "Start" },
  { id: 7, src: logo7, alt: "Start People" },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-white" aria-label="Our clients">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#03464D]">
          We've helped thousands of sales teams
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false, // left to right এর জন্য false, right to left এর জন্য true
        }}
        speed={3000}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id}>
            <div className="flex items-center justify-center px-4">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-12 md:h-16 w-30 object-contain  hover:grayscale-0 transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientLogos;