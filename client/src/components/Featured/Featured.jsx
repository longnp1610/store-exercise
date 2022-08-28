import React, { useRef } from "react";
import { Pagination, A11y, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const dummy = Array(8).fill({ d600: "./dummy/img/600.png" });

const Featured = () => {
  const slide = useRef();
  return (
    <div className="my-8">
      <div className="head text-2xl mb-[0.8rem] font-semibold w-full">
        Featured
      </div>
      <Swiper
        modules={[Pagination, A11y, Autoplay, Lazy]}
        onSwiper={(swiper) => (slide.current = swiper)}
        spaceBetween={50}
        slidesPerView={3}
        watchSlidesProgress={true}
        loop={dummy.length > 3 ? true : false}
        pagination={{ clickable: true }}
        preloadImages={false}
        autoplay
        lazy={true}
        speed={1000}
        className="h-auto w-full"
      >
        {dummy.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.d600}
              className="cursor-pointer"
              onMouseEnter={() => slide.current.autoplay.stop()}
              onMouseLeave={() => slide.current.autoplay.start()}
              alt="dummyimage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
