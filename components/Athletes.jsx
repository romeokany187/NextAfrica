import Image from "next/image";
import React from "react";

const Athletes = () => {
  return (
    <div className="flex lg:flex-row flex-col bg-teal-700 justify-center gap-9 items-center pr-5 pb-5 text-white
     lg:h-[auto] h-auto mt-[5rem] ">
      <Image
        src="/images/session@2x.PNG"
        width={700}
        height={500}
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
