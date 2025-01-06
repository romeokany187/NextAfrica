import Image from "next/image";
import React from "react";

const Agenda = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:gap-[5rem] gap-5 lg:mt-[10rem] mt-4 mb-8">
      <div className="lg:w-[50%] w-full">
        <Image src="/images/checklist@2x.png" width={800} height={800} className="w-full"></Image>
      </div>
      <div className="flex flex-col justify-start items-start space-y-5 lg:w-[50%] w-full ">
        <p className="text-sm text-green-primary font-semibold">
          TROUVEZ NOS PROGRAMMES
        </p>
        <p className="xl:text-3xl text-2xl font-extrabold">
          Une entreprise th t's bluiding ahealtier world
        </p>
        <div className="flex justify-center items-center gap-4">
          <div className="px-2 py-[0.1rem] border border-green-primary text-green-primary rounded-lg">
            +
          </div>
          <p>Trouver une discipline </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="self-start px-[0.66rem] py-[0.1rem] border border-green-primary text-white bg-green-primary rounded-lg">
            -
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p>
              Trouver une discipline <br /> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolores expedita explicabo dicta
              accusantium enim maxime velit possimus
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="px-2 py-[0.1rem] border border-green-primary text-green-primary rounded-lg">
            +
          </div>
          <p>Trouver une discipline</p>
        </div>

        <button
          className="lg:p-3 px-12 py-3 text-sm font-medium text-base-secondary border border-green-primary 
          bg-green-primary rounded-lg transition hover:bg-base-secondary hover:text-green-primary"
        >
          Notre Agenda
        </button>
      </div>
    </div>
  );
};

export default Agenda;
