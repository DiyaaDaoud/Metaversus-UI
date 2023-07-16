"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import Image from "next/image";
const InsightCard = ({ index, imgUrl, title, subtitle }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.5 * index, 1)}
    className="flex md:flex-row flex-col gap-4 lg:w-[1170px] w-full"
  >
    <div className="relative flex items-center justify-center md:max-w-[270px] w-full  h-[250px]  ">
      <Image src={imgUrl} alt="" fill className="rounded-[32px] object-cover" />
    </div>
    <div className="w-full flex justify-between items-center">
      <div className=" md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal text-white lg:text-[42px] text-[26px]">
          {title}
        </h4>
        <p className="mt-[16px] font-normal  text-secondary-white lg:text-[20px] text-[14px]">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center h-[100px] w-[100px] rounded-full border-white border-[1px] bg-transparent ">
        <div className="relative w-[40%] h-[40%]">
          <Image src="/arrow.svg" alt="" fill className="object-contain" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
