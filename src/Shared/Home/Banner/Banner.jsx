import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";

export default function Banner() {
  return (
    <div className="my-2">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}
        autoFocus={true}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
      </Carousel>
    </div>
  );
}
