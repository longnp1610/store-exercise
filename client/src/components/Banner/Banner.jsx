import React from "react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCards,
  Lazy,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const dummy = {
  d1280: "./dummy/img/1280.png",
};

const Banner = () => {
  return (
    <div className="h-auto sm:pt-0 pt-[6rem] w-full relative">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCards, Lazy]}
        spaceBetween={50}
        slidesPerView={1}
        watchSlidesProgress={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={Object.keys(dummy).length > 1 ? true : false}
        effect={"cards"}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        preloadImages={false}
        lazy={true}
        autoplay={{ delay: 3600 }}
        speed={1000}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="h-full w-full"
      >
        <SwiperSlide className="bg-red-50">
          <img src={dummy.d1280} className="w-full h-auto" alt="dummyimage" />
        </SwiperSlide>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default Banner;
