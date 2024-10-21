import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-base-first h-auto lg:py-[3rem] lg:px-[10rem] px-0 py0">
      <div className="bg-base-secondary p-10 rounded-2xl flex flex-col justify-center items-center space-y-4">
        <div className="relative">
          <Image
            src="/assets/message.gif"
            alt="mail"
            width={200}
            height={200}
            unoptimized
            className="rounded-full"
          ></Image>
         
        </div>

        <p className="lg:text-4xl text-xl font-extrabold  text-center">
          Laissez votre adresse mail pour recévoir  plus d'informations
          sur nous
        </p>
        <p className="lg:text-xl text-sm font font-medium">
          Nous nous engageons à ne pas spamer
        </p>
        <button
          className="lg:p-3 px-12 py-3 text-sm font-medium text-base-secondary border border-green-primary 
          bg-green-primary rounded-lg transition hover:bg-base-secondary hover:text-green-primary"
        >
          Oui j'adhère
        </button>
      </div>
    </div>
  );
};

export default Contact;
