"use client";

import { motion } from "framer-motion";

import styles from "../styles";

import { fadeIn } from "../utils/motion";
import Image from "next/image";
const ExploreCard = ({ index, active, handleClick, id, imgUrl, title }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      fill
      className="absolute object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 left-0 p-8 justify-start lg:w-full lg:h-fit w-fit h-full max-w-full max-h-[100%] flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] rounded-t-[24px]">
        <div className="flex lg:flex-col lg:justify-start flex-row gap-6 lg:items-start items-center ">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism xl:mb-[16px]`}
          >
            <Image
              src="/headset.svg"
              alt="headset"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20px] uppercase text-white">
            Enter the Metaverse
          </p>
        </div>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
