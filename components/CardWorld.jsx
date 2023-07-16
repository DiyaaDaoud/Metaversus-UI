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
    <div className="flex items-center justify-center w-full h-full">
      <img src={imgUrl} alt="" className="object-contain rounded-[32px]" />
    </div>
    <div className="absolute bottom-[15%] left-[11%] flex flex-col gap-2">
      <div className="flex flex-row items-center gap-[10px]">
        <div className="h-[24px] w-[48px] flex">
          <img
            src="./user0.png"
            alt=""
            className="h-full w-1/2 object-contain z-20"
          />
          <img
            src="./user1.png"
            alt=""
            className="h-full w-1/2 object-contain -ml-[12px] z-10"
          />
          <img
            src="./user2.png"
            alt=""
            className="h-full w-1/2 object-contain -ml-[12px]"
          />
        </div>
        <p className="font-normal text-white text-[12px]">+ 264 has joined</p>
      </div>
      <p className="font-bold text-white text-[18px]">{title}</p>
    </div>
  </div>
);

export default CardWorld;
