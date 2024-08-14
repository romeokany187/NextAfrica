import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ img, head, sub, href, alt }) => {
  return (
    <div
      className=" w-[15rem] h-[20rem]
    "
    >
      <div className="p-6 flex flex-col gap-3 text-center justify-center items-center rounded-xl shadow-md h-[80%] ">
        <Link href={href} className="">
          <Image
            src={img}
            width={90}
            height={90}
            alt={alt}
            className="rounded-full"
          ></Image>
        </Link>
        <p className="text-xl text-gray-800 font-semibold">{head}</p>
        <p className="text-xs">{sub}</p>
      </div>
    </div>
  );
};

export default Card;
