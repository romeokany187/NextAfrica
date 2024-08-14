"use client";
import React from "react";
import Card from "./Card";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Offers = () => {
  return (
    <div className="lg:p-6 p-4 mt-14">
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <p className="text-xl text-green-primary font-medium">
          CE QUE NOUS FAISONS
        </p>
        <h1 className="text-5xl font-extrabold text-gray-800">
          Nous offrons comme ouverture
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ullam
          quas, voluptatum tempore dolor hic voluptas. Consequatur ipsa quisquam
          repellat pariatur tempora laboriosam blanditiis ea deserunt natus!
          Explicabo, maxime tempora eaque nobis cum fuga? Eius aliquid sint
          vitae praesentium placeat. Numquam quas praesentium iure eos quos
          consequatur. Veritatis, voluptates? Magnam.
        </p>
      </div>
      <div className="py-8  pl-[3rem] flex justify-center lg:bg-red-500 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true, spaceBetween: 200 }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // when window width is >= 640px
            500: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1244: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        }}
          style={{with:"100%", marginBottom: "20px" }}
          className="w-full xl"
        >
          <SwiperSlide className="lg:ml-0 ml-[2rem] ">
            <Card
              img="/images/recrutement.jpg"
              href="/recrutements"
              head="Recrutemnts"
              sub="
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ullam quas, voluptatum tempore"
              alt="image recrutment"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="/images/tennis.avif"
              href="/recrutements"
              head="Recruteurs"
              sub="
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ullam quas, voluptatum tempore"
              alt="image recrutment"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <Card
              img="/images/entraineurs.webp"
              href="/recrutements"
              head="Entraineurs"
              sub="
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ullam quas, voluptatum tempore"
              alt="image recrutment"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="/images/tennis.avif"
              href="/recrutements"
              head="Recrutemnts"
              sub="
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ullam quas, voluptatum tempore"
              alt="image recrutment"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  );
};

export default Offers;
