import Image from "next/image";
import React from "react";

const Partenaire = () => {
  return (
    <div className="lg:flex md:flex justify-around items-center grid grid-cols-2 px-[5rem] mb-8 lg:h-[30vh] h-[50vh] ">
      <div className="">
        <Image
          src="/images/SOSO_5.png"
          alt="partenaires"
          width={150}
          height={150}
        ></Image>
      </div>
      <div className="">
        <Image
          src="/images/tunda_4.png"
          alt="partenaires"
          width={150}
          height={150}
        ></Image>
      </div>
      <div className="">
        <Image
          src="/images/M_6.png"
          alt="partenaires"
          width={150}
          height={150}
        ></Image>
      </div>
      <div className="">
        <Image
          src="/images/malcat_2.png"
          alt="partenaires"
          width={150}
          height={150}
        ></Image>
      </div>
    </div>
  );
};

export default Partenaire;
