"use client";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Image from "next/image";
const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.5)}
        className="flex-[0.5] lg:max-w-[370px] w-full flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient"></div>
        <div>
          <h4 className="font-bold text-[26px] lg:text-[32px] sm:leading-[40px] leading-[36px] text-white">
            Samantha
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Founder of Metaversus
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.3, 0.5)}
        className="flex justify-center items-center relative flex-1"
      >
        <div className="relative w-full lg:h-[610px] h-auto min-h-[210px] ">
          <Image
            src="/planet-09.png"
            alt=""
            fill
            className="object-cover rounded-[40px]"
          />
        </div>
        <motion.div
          variants={zoomIn(0.4, 0.5)}
          className="lg:block hidden absolute -left-[10%] top-[10%]"
        >
          <Image
            src="/stamp.png"
            alt=""
            width={155}
            height={155}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
