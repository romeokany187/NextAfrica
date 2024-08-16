import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center lg:items-center items-start lg:gap-14 gap-8 py-10">
      <div className="relative flex xl:w-[55%] lg:w-[70%] ">
        <Image
          src="/images/accueil_bra1@1.25x.png"
          alt="image"
          width={600}
          height={50}
          className="lg:block w-full hidden"
        ></Image>
        <div className="hidden lg:top-[40%] xl:top-[50%] left-[10%] absolute lg:flex gap-1 p-2 bg-base-secondary bg-opacity-90 rounded-lg">
          <h1 className="text-5xl font-bold text-gray-800">+5</h1>
          <p className="font-semibold text-gray-900">
            Années <br />
            Experience
          </p>
        </div>
        <div
          className="z-0 lg:top-[60%]  xl:top-[60%] lg:right-[10%]  lg:absolute relative flex flex-col gap-1 p-2 bg-base-secondary
         bg-opacity-90 rounded-lg"
        >
          <h1 className="text-sm font-bold text-gray-800">250k Temoignages</h1>
          <div className="flex parent">
            <div className="rounded-full">
              <Image
                src="/assets/avatar1.jfif"
                alt="avatar"
                width={35}
                height={35}
                className="object-cover h-full
              rounded-full"
              ></Image>
            </div>
            <div className=" rounded-full">
              <Image
                src="/assets/avatar2.jfif"
                alt="avatar"
                width={35}
                height={35}
                className="object-cover h-full
              rounded-full "
              ></Image>
            </div>
            <div className="rounded-full">
              <Image
                src="/assets/avatar3.jfif"
                alt="avatar"
                width={35}
                height={35}
                className="object-cover h-full
              rounded-full"
              ></Image>
            </div>
            <div className="rounded-full cursor-pointer bg-[#00008B] ">
              <Image
                src="/assets/plus.svg"
                alt="avatar"
                width={35}
                height={35}
                className="object-cover h-full
              rounded-full"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-[50%] w-full text-wrap">
        <h1 className="xl:text-7xl lg:text-5xl text-5xl lg:text-start text-center font-extrabold text-black-secondary ">
          Push <br /> Your Limits
        </h1>
        <p className="lg:text-start text-center  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          expedita explicabo dicta accusantium enim maxime velit possimus
          placeat tempora laboriosam, minus reiciendis facilis officiis quo quos
          nulla nemo,
        </p>
        <div className="flex lg:flex-row md:flex-row flex-col gap-4 justify-center items-center">
          <button
            className="lg:p-3 px-12 py-3 text-sm font-medium text-base-secondary border border-green-primary 
          bg-green-primary rounded-lg transition hover:bg-base-secondary hover:text-green-primary"
          >
            Nous sommes
          </button>
          <button
            className="lg:p-3 px-12 py-3 text-sm font-medium text-green-primary border border-green-primary 
          bg-base-primary rounded-lg transition hover:bg-green-primary hover:text-base-primary"
          >
            Evénements
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
