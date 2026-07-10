import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = ({ data }) => {

  // Compatibility: some bundlers expose the component on `default`.
  const Slick = Slider?.default || Slider;




  const settings = {
    dots: true,          // Shows bottom indicator dots
    infinite: true,      // Infinite looping
    speed: 500,          // Animation slide speed (ms)
    slidesToShow: 1,     // Show one image at a time
    slidesToScroll: 1,   // Scroll one image at a time
    autoplay: true,      // Enable automatic sliding
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: true,        // Show left/right navigation arrows
  };

  return (

    <div className="w-full mx-auto px-0 py-0">
      <Slick {...settings}>
        {data.map((item) => (
          <div key={item.id} className="w-full h-[260px] sm:h-[320px] md:h-[380px] px-2">
            {/* Full-width responsive image */}
            <img
              src={item.Imgsrc}
              alt={item?.alt || `slide-${item.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slick>

    </div>
  )
}

export default BannerCarousel