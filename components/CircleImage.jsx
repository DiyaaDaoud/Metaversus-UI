import Image from "next/image";
import React from "react";

const CircleImage = ({
  outerImage,
  innerImage,
  addedStyles,
  gradientStyle,
}) => {
  return (
    <div className={`absolute ${addedStyles}  h-[86px] w-[73px] flex flex-1`}>
      <Image src={outerImage} alt="" fill={true} />
      <div className="absolute top-0 right-0 left-0 flex justify-center items-center h-[73px] w-[73px]">
        <div className={` absolute  ${gradientStyle} h-full w-full`}></div>
        <div className="rounded-full flex items-center justify-center">
          <Image src={innerImage} alt="Inner Image" height={61} width={61} />
        </div>
      </div>
    </div>
  );
};

export default CircleImage;
