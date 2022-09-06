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
      <div className="flex">
        <div
          data-aos="fade-right"
          className="w-1/2 flex flex-col bg-[#0F1520] text-white justify-center pl-20"
        >
          <h2 className="uppercase w-fit font-bold text-4xl">
            {descriptions.showrooms.title}
          </h2>
          <h4 className="uppercase w-fit font-semibold text-2xl mb-2 ">
            {descriptions.showrooms.sub}
          </h4>
          <span className="mb-5 w-fit">{descriptions.showrooms.caption}</span>
          <button className="border p-[11px_18px] font-semibold border-white w-fit uppercase">
            <Link to="#" className="flex">
              Find showrooms in your place
              <ArrowRightIcon
                className="-mr-1 ml-2 h-5 w-5 my-auto"
                aria-hidden="true"
              />
            </Link>
          </button>
        </div>
        <div data-aos="fade-left" className="w-1/2">
          <img
            src={descriptions.showrooms.image}
            alt="store_image"
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
