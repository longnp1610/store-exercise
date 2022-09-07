import React, { useEffect } from "react";
import AOS from "aos";
import { ArrowRightIcon } from "@heroicons/react/solid";

import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const descriptions = {
  showrooms: {
    title: "Experience the bikes",
    sub: "In our showrooms",
    caption:
      "Visit us today for expert advice for expert guidance and fitting advice.",
    image: "/images/mxw_2736,f_auto.webp",
  },
  product: {
    title: "VERSATILE",
    sub: "GRAVEL BIKES",
    caption:
      "Compatible with both 650b MTB and 700c road wheels you can choose the tyres you need for your preferred style of riding. Added versatility is provided by the addition of mudguard and pannier rack mounts which makes the CGR range not only suited to road and off-road riding but also a superb multi terrain light tourer / bike trekker or all-weather commuter.",
    image: "/images/mxw_2736_f_auto.webp",
  },
};

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      delay: 0,
      disable: false,
      startEvent: "load",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refreshHard();
  }, []);
  return (
    <div className="overflow-x-hidden mt-16">
      <div className="lg:flex lg:flex-row flex-col">
        <div
          data-aos="fade-right"
          className="lg:w-1/2 w-full flex flex-col bg-[#0F1520] text-white justify-center lg:px-14 p-10"
        >
          <h2 className="uppercase w-fit font-bold xl:text-4xl text-2xl">
            {descriptions.showrooms.title}
          </h2>
          <h4 className="uppercase w-fit font-semibold xl:text-2xl mb-2 ">
            {descriptions.showrooms.sub}
          </h4>
          <span className="mb-5 w-fit xl:text-base text-sm">
            {descriptions.showrooms.caption}
          </span>
          <button className="border p-[11px_18px] font-semibold border-white w-fit uppercase xl:text-base text-sm">
            <Link to="#" className="flex">
              Find showrooms in your place
              <ArrowRightIcon
                className="-mr-1 ml-2 h-5 w-5 my-auto"
                aria-hidden="true"
              />
            </Link>
          </button>
        </div>
        <div data-aos="fade-left" className="lg:w-1/2 w-full">
          <img
            src={descriptions.showrooms.image}
            alt="store_image"
            className="h-auto max-w-full"
          />
        </div>
      </div>
      <div className="bg-[#F3F4F6] flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full flex flex-col justify-center lg:px-14 p-10">
          <h2 className="uppercase w-fit font-bold xl:text-4xl text-2xl">
            {descriptions.product.title}
          </h2>
          <h4 className="uppercase w-fit font-semibold xl:text-2xl mb-2 ">
            {descriptions.product.sub}
          </h4>
          <span className="mb-5 xl:text-base text-sm lg:line-clamp-4 lg:hover:line-clamp-none">
            {descriptions.product.caption}
          </span>
          <button className="p-[11px_18px] font-semibold text-white bg-[#0F1520] w-fit uppercase xl:text-base text-sm">
            <Link to="#" className="flex">
              GRAVEL BIKES
              <ArrowRightIcon
                className="-mr-1 ml-2 h-5 w-5 my-auto"
                aria-hidden="true"
              />
            </Link>
          </button>
        </div>
        <div className="lg:w-1/2 w-full lg:p-10 md:p-8 p-3 grid place-items-center">
          <img
            src={descriptions.product.image}
            alt="store_image"
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
