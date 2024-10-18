import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center gap-[2rem] mt-8 lg:mb-20 mb-12">
      <div className="flex flex-col gap-5  ">
        <p className="text-green-primary lg:text-xl sm:text-sm font-medium">Apropos de nous</p>
        <div className="xl:text-4xl text-2xl font-extrabold">
          Une entreprise th t's bluiding ahealtier world
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          vitae est quam minima cum delectus qui vel fuga quae laboriosam? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <div className="flex justify-start items-center gap-6">
          <div className="flex flex-col">
            <p className="text-3xl font-extrabold">200k</p>
            <p className="text-xs">
              RECRUTEMENTS <br />
              PAR ANS
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl font-extrabold">05+</p>
            <p className="text-xs">
              ANNEES <br />
              EXPERIENCE
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl font-extrabold">200k</p>
            <p className="text-xs">
              FORMATION <br />
              PAR ANS
            </p>
          </div>
        </div>
        <Link
          href="/infos"
          className="underline text-green-primary font-semibold"
        >
          Pour plus d'infos
        </Link>
      </div>
      <div className="relative  rounded-lg ">
        <Image
          src="/images/about us@3x.png"
          alt="about us"
          width={2000}
          height={2000}
          className="object-fill w-full h-full rounded-3xl border "
        ></Image>
        <div className="hidden lg:flex flex-col justify-center items-center gap-4 absolute top-[75%]  left-[15%] p-8 rounded-lg bg-white shadow-md ">
          <div className="h-[8vh] w-[4vw]  bg-black-secondary rounded-full p-2">
            <Image
              src="/images/logo nav@3x.png"
              width={40}
              height={40}
              className="rounded-full w-full h-full object-contain"
            ></Image>
          </div>
          <p className="text-xs text-center text-black-primary">
            Transformez <br className="mb-2" /> vos talents <br /> avec
            NextAfrica
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
