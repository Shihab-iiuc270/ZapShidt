// import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
// import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
  return (
    <Carousel
    //   autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
    >
      {/* Slide 1 */}
      <div className="w-full">
        <img src={bannerImg1} alt="" />
      </div>

        {/* Overlay Content */}
    
      

      {/* Slide 2 */}
      <div className="w-full">
        <img src={bannerImg2} alt="Banner 2" />
      </div>

      {/* Slide 3 */}
      <div className="w-full">
        <img src={bannerImg3} alt="Banner 3" />
      </div>
    </Carousel>
    
  );
};

export default Banner;