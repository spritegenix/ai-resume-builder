"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";
export const Slider = ({ data = [], uniqueId = "Slider123", swiperButtonStyle="" }) => {
  const getSlidesPerView = (base: number) => {
    return data.length < base ? data.length : base;
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation, Pagination],
    pagination, 
    breakpoints: {
      640: { slidesPerView: getSlidesPerView(1) },
      768: { slidesPerView: getSlidesPerView(1) },
      1024: { slidesPerView: getSlidesPerView(1) },
    },
  };

  return (
    <div className="sliderStyle relative">
      <Swiper {...swiperOptions} className="w-full max-w-fit px-5">
        <SliderCards data={data} />
      </Swiper>

      <div className={cn(`${uniqueId}-next`, "swiper-button-next", `${swiperButtonStyle}`)}></div>
      <div className={cn(`${uniqueId}-prev`, "swiper-button-prev", `${swiperButtonStyle}`)}></div>
    </div>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SliderCards({ data }: any) {
    return (
      <>
        {data && data.length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((item: any, index: number) => (
            <SwiperSlide
              key={item?.id || index}
            >
              <StyledCard data={item} />
            </SwiperSlide>
          ))}
      </>
    );
  }
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StyledCard({ data }: any) {
  return (
    <div className="flex flex-col items-center space-y-3">
    </div>
  );
}
