"use client";

import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Profile_Service_Carousel() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-black dark:text-white mb-10">
        Services
      </h2>
      <Swiper
        spaceBetween={15}
        // slidesPerView={"auto"}
        slidesPerView={2}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <div className="carousel_item">
            <div className="img_container w-full h-64 rounded-md overflow-hidden">
              <Image
                src="https://i.pravatar.cc/370"
                alt="avatar"
                width={200}
                height={300}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="content">
              {/* <h2 className="text-lg font-bold">Monroe Parker</h2> */}
              <p className="text-sm font-light text-center mt-3">
                Mens Haircut
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-40">
          <div className="carousel_item">
            <div className="img_container w-full h-64 rounded-md overflow-hidden">
              <Image
                src="https://i.pravatar.cc/380"
                alt="avatar"
                width={200}
                height={300}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="content">
              {/* <h2 className="text-lg font-bold">Monroe Parker</h2> */}
              <p className="text-sm font-light text-center mt-3">
                Mens Haircut
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-40">
          <div className="carousel_item">
            <div className="img_container w-full h-64 rounded-md overflow-hidden">
              <Image
                src="https://i.pravatar.cc/390"
                alt="avatar"
                width={200}
                height={300}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="content">
              {/* <h2 className="text-lg font-bold">Monroe Parker</h2> */}
              <p className="text-sm font-light text-center mt-3">
                Mens Haircut
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_item">
            <div className="img_container w-full h-64 rounded-md overflow-hidden">
              <Image
                src="https://i.pravatar.cc/330"
                alt="avatar"
                width={200}
                height={300}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="content">
              {/* <h2 className="text-lg font-bold">Monroe Parker</h2> */}
              <p className="text-sm font-light text-center mt-3">
                Mens Haircut
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_item">
            <div className="img_container w-full h-64 rounded-md overflow-hidden">
              <Image
                src="https://i.pravatar.cc/320"
                alt="avatar"
                width={200}
                height={300}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="content">
              {/* <h2 className="text-lg font-bold">Monroe Parker</h2> */}
              <p className="text-sm font-light text-center mt-3">
                Mens Haircut
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_item">
            <div className="img_container w-full h-64 rounded-md overflow-hidden">
              <Image
                src="https://i.pravatar.cc/460"
                alt="avatar"
                width={200}
                height={300}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="content">
              {/* <h2 className="text-lg font-bold">Monroe Parker</h2> */}
              <p className="text-sm font-light text-center mt-3">
                Mens Haircut
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_item">
            <div className="img_container w-full h-64 rounded-md overflow-hidden">
              <Image
                src="https://i.pravatar.cc/450"
                alt="avatar"
                width={200}
                height={300}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="content">
              {/* <h2 className="text-lg font-bold">Monroe Parker</h2> */}
              <p className="text-sm font-light text-center mt-3">
                Mens Haircut
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_item">
            <div className="img_container w-full h-64 rounded-md overflow-hidden">
              <Image
                src="https://i.pravatar.cc/400"
                alt="avatar"
                width={200}
                height={300}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="content">
              {/* <h2 className="text-lg font-bold">Monroe Parker</h2> */}
              <p className="text-sm font-light text-center mt-3">
                Mens Haircut
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
