"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
const InsightCard = ({ index, imgUrl, title, subtitle }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.5 * index, 1)}
    className="flex md:flex-row flex-col gap-4 lg:w-[1170px] w-full"
  >
    <img
      src={imgUrl}
      alt=""
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal text-white lg:text-[42px] text-[26px]">
          {title}
        </h4>
        <p className="mt-[16px] font-normal  text-secondary-white lg:text-[20px] text-[14px]">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center h-[100px] w-[100px] rounded-full border-white border-[1px] bg-transparent ">
        <img
          src="./arrow.svg"
          alt=""
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
