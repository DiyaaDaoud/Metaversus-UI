"use client";
import { motion } from "framer-motion";
import {
  fadeIn,
  footerVariants,
  staggerContainer,
  zoomIn,
} from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { insights, socials } from "../constants";
import styles from "../styles";
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient"></div>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-5">
        <h4 className="font-bold md:text-p[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <button
          className="flex items-center justify-center h-fit bg-[rgba(37,97,139,1)] rounded-[32px] gap-[12px] px-6 py-4"
          type="button"
        >
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            <img
              src="./headset.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <p className="font-normal text-white text-[16px]">ENTER METAVERSE</p>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>
        <div className="flex justify-between gap-4 items-center ">
          <h4 className=" text-white font-extrabold text-[24px]">METVERSUS</h4>
          <p className="lg:block hidden font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex flex-row gap-4">
            {socials.map((social, index) => (
              <img
                key={index}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
        <p className="lg:hidden font-normal text-[14px] text-white opacity-50 text-center mt-3">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
