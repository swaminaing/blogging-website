import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function Aside() {
  return (
    <div>
      <div className="relative mb-5">
        <div className="bg-black opacity-1.5 absolute rounded-xl inset-0"></div>
        <div className="relative z-10 p-4">
          <h3 className="text-black">Jane Doe</h3>
          <span className="text-[13px] text-[#626262]">Developer</span>
        </div>
      </div>

      <div className="relative mb-5">
        <div className="bg-black opacity-1.5 absolute rounded-xl inset-0"></div>
        <div className="relative z-10 p-4">
          <p className="underline">Menu</p>
          <ul className="text-[#626262] mt-2">
            <li>
              <a href="#" className="text-[13px] hover:text-black">
                Dashboard +
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="bg-black opacity-1.5 absolute rounded-xl inset-0"></div>
        <div className="relative z-10 p-4">
          <p className="underline mb-3">Authors</p>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            className="w-full"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="p-3 bg-gray-800 rounded-lg text-white">
                <h4>John Smith</h4>
                <span className="text-[13px] text-gray-400">Writer</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-gray-800 rounded-lg text-white">
                <h4>Emily Johnson</h4>
                <span className="text-[13px] text-gray-400">Editor</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 bg-gray-800 rounded-lg text-white">
                <h4>Michael Brown</h4>
                <span className="text-[13px] text-gray-400">Blogger</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Aside;
