import Image from "next/image";
import React from "react";

const Athletes = () => {
  return (
    <div
      className="flex lg:flex-row flex-col bg-teal-700 justify-center lg:gap-9 gap-2 items-center lg:pr-5 pr-0 lg:pb-0 pb-5 text-white
     lg:h-auto h-auto mt-[5rem] "
    >
      <Image
        src="/images/nos attletes@1.25x.png"
        width={700}
        height={700}
        className="hidden lg:block w-full h-full"
      ></Image>

      <Image
        src="/images/session@2x.PNG"
        width={700}
        height={500}
        className="lg:hidden block w-full"
      ></Image>

      <div className=" block  px-6 space-y-4">
        <p className="text-3xl font-extrabold">Nos Athlètes du moment</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          voluptatem molestias dolores ad excepturi est inventore qui
          accusantium, reprehenderit distinctio!
        </p>

        <button
          className="lg:p-3 px-14 py-3 text-sm font-medium text-base-secondary border border-green-primary 
          bg-green-primary rounded-lg transition hover:bg-base-secondary hover:text-green-primary"
        >
          Découvrir
        </button>
      </div>
    </div>
  );
};

export default Athletes;
