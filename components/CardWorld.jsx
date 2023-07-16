import Image from "next/image";
import React from "react";

const CardWorld = ({
  title,
  imgUrl,
  containerStyles,
  outerWidth,
  outerHeight,
}) => (
  <div
    className={`absolute ${containerStyles}  h-[${outerHeight}px] w-[${outerWidth}px] px-[${
      Math.floor(outerWidth / 100) + 1
    }px] py-[${
      Math.floor(outerHeight / 100) + 1
    }px] flex justify-center items-center bg-gray-600 rounded-[32px]`}
  >
    <Image
      src={imgUrl}
      alt=""
      width={Math.floor(outerWidth - outerWidth * 0.05)}
      height={Math.floor(outerHeight - outerHeight * 0.05)}
      className="rounded-[32px]"
    />
    <div className="absolute bottom-[15%] left-[11%] flex flex-col gap-2">
      <div className="flex flex-row items-center gap-[10px]">
        <div className="h-[24px] w-[48px] flex">
          <div className="relative h-full w-1/2 z-20">
            <Image src="/user0.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative h-full w-1/2 -ml-[12px] z-10">
            <Image src="/user1.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative h-full w-1/2 -ml-[12px] ">
            <Image src="/user2.png" alt="" fill className="object-contain" />
          </div>
        </div>
        <p className="font-normal text-white text-[12px]">+ 264 has joined</p>
      </div>
      <p className="font-bold text-white text-[18px]">{title}</p>
    </div>
  </div>
);

export default CardWorld;
