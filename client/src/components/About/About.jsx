import React, { useEffect } from "react";
import AOS from "aos";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";

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
  services: {
    testDay: {
      title: "30 DAY TEST RIDE",
      caption:
        "Enjoy the added reassurance of a test ride. Because we want you to be 100% happy with your purchase, you can ride your Ribble bike and return it for a refund or any changes to be made within 30-days. Terms and conditions apply",
      image: "./images/daystest.svg",
    },
    inStore: {
      title: "IN-STORE AND ONLINE",
      caption:
        "Take advantage of our industry leading BikeBuilder customisation tool or visit us in-store. From choosing the right bike, sizing assistance and customisation advice, our passionate team of bike experts are here to help.",
      image: "./images/instore.svg",
    },
    flexPayment: {
      title: "FLEXIBLE WAYS TO PAY",
      caption:
        "With several flexible ways to pay, you can choose to pay for your dream ride outright or spread the payments into small, manageable instalments for added convenience.",
      image: "./images/flexiblepayment.svg",
    },
    noMiddleMan: {
      title: "NO MIDDLE MAN",
      caption:
        "By buying direct from us you cut out the middleman. The right bike at the right price. Delivered directly to you, the way you want it.",
      image: "./images/location.svg",
    },
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
      {/* Showrooms Section start  */}
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
      {/* Showrooms Section end  */}

      {/* Product ADs Section start */}
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
      {/* Product ADs Section end  */}

      {/* Service Section start  */}
      <div className="flex flex-col">
        <div className="flex xl:flex-row flex-col">
          <div className="card flex p-10 xl:w-1/2 w-full">
            <img
              src={descriptions.services.testDay.image}
              alt="Days Test"
              className="h-auto xl:w-28 w-24 mr-5"
            />
            <div className="grid place-content-center">
              <h3 className="card__title uppercase font-bold mb-3">
                {descriptions.services.testDay.title}
              </h3>
              <span className="card__caption text-sm">
                {descriptions.services.testDay.caption}
              </span>
            </div>
          </div>
          <div className="card flex p-10 xl:w-1/2 w-ful">
            <img
              src={descriptions.services.inStore.image}
              alt="In Store"
              className="h-auto xl:w-28 w-24 mr-5"
            />
            <div className="grid place-content-center">
              <h3 className="card__title uppercase font-bold mb-3">
                {descriptions.services.inStore.title}
              </h3>
              <span className="card__caption text-sm">
                {descriptions.services.inStore.caption}
              </span>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col">
          <div className="card flex p-10 xl:w-1/2 w-full">
            <img
              src={descriptions.services.flexPayment.image}
              alt="Flexible Payment"
              className="h-auto xl:w-28 w-24 mr-5"
            />
            <div className="grid place-content-center">
              <h3 className="card__title uppercase font-bold mb-3">
                {descriptions.services.flexPayment.title}
              </h3>
              <span className="card__caption text-sm">
                {descriptions.services.flexPayment.caption}
              </span>
            </div>
          </div>
          <div className="card flex p-10 xl:w-1/2 w-full">
            <img
              src={descriptions.services.noMiddleMan.image}
              alt="No Middle-Man"
              className="h-auto xl:w-28 w-24 mr-5"
            />
            <div className="grid place-content-center">
              <h3 className="card__title uppercase font-bold mb-3">
                {descriptions.services.noMiddleMan.title}
              </h3>
              <span className="card__caption text-sm">
                {descriptions.services.noMiddleMan.caption}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Service Section end  */}
    </div>
  );
};

export default About;
