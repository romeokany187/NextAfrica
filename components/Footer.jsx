import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="lg:flex justify-between grid grid-cols-2 gap-8 grid-flow-row  py-5 px-8">
      <div className="flex flex-col  items-start space-y-4">
        <Image
          src="/images/logo-suite-nav@1.5x.png"
          alt="logo"
          width={200}
          height={200}
        ></Image>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Magni, in.
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-sm font-bold">APROPOS</p>
        <div className="flex flex-col justify-between space-y-2 items-start text-sm">
          <p>Apropos de nous</p>
          <p>Future</p>
          <p>Actualités</p>
          <p>Evenement</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-sm  font-bold">COMPANY</p>
        <div className="flex flex-col space-y-2  justify-between items-start text-sm">
          <p>Notre équipe</p>
          <p>Nos partenaires</p>
          <p>FAQ</p>
          <p>Blog</p>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        <p className="text-sm  font-bold">NOS MEDIAS SOCIAUX</p>
        <div className="flex flex-col space-y-2  justify-between items-start text-sm">
          <div className="flex gap-3">
            <Image
              src="/assets/facebook.svg"
              alt="logo"
              width={20}
              height={20}
            ></Image>
            <p>Notre page Facebbok</p>
          </div>
          <div className="flex gap-3">
            <Image
              src="/assets/instagram.svg"
              alt="logo"
              width={20}
              height={20}
            ></Image>
            <p>Notre page instagram</p>
          </div>
          <div className="flex gap-3">
            <Image
              src="/assets/x.svg"
              alt="logo"
              width={15}
              height={15}
            ></Image>
            <p>Notre page X</p>
          </div>
          <div className="flex gap-3">
            <Image
              src="/assets/youtube.svg"
              alt="logo"
              width={20}
              height={20}
            ></Image>
            <p>Notre chaine youtube</p>
          </div>
          <div className="flex gap-3">
            <Image
              src="/assets/linkedin.svg"
              alt="logo"
              width={20}
              height={20}
            ></Image>
            <p>Notre page linkedin</p>
          </div>
          <div className="flex gap-3">
            <Image
              src="/assets/whatsapp.svg"
              alt="logo"
              width={20}
              height={20}
            ></Image>
            <p>Notre groupe whatsapp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
