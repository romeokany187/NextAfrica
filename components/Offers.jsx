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
    <div className="lg:p-6 mt-14">
      <div className="flex flex-col gap-4 justify-center lg:items-center md:items-center items-start lg:text-center md:text-center text-left">
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
      <div className="py-8 flex justify-center ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
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
                spaceBetween: 0,
            },
            1244: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        }}
          style={{with:"100%", marginBottom: "20px" }}
          className="w-full ml-auto mr-auto justify-center"
        >
          <SwiperSlide className="lg:ml-[4rem] ml-[3.5rem] ">
            <Card
              img="/images/recrutement.jpg"
              href="/recrutements"
              head="Recrutemnts"
              sub="
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ullam quas, voluptatum tempore"
              alt="image recrutment"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Card
              img="/images/tennis.avif"
              href="/recrutements"
              head="Recruteurs"
              sub="
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ullam quas, voluptatum tempore"
              alt="image recrutment"
            />
          </SwiperSlide>
          
          <SwiperSlide className="">
            <Card
              img="/images/entraineurs.webp"
              href="/recrutements"
              head="Entraineurs"
              sub="
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ullam quas, voluptatum tempore"
              alt="image recrutment"
            />
          </SwiperSlide>
          <SwiperSlide className="">
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
