"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-start items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full md:-mt-[20px] -mt-[12px]"
    >
      <div className="absolute w-full sm:h-[300px] h-[200px] hero-gradient rounded-tl-[140px] rounded-bl-[30px] z-[0] md:-top-[26px] lg:-top-[30px] sm:-top-[20px] -top-[18px]" />
      <img
        src="/cover.png"
        alt="cover"
        className="w-full sm:h-[488px] h-[275px] object-cover rounded-tl-[140px] rounded-bl-[30px] z-0 relative md:-top-[26px] lg:-top-[30px] sm:-top-[20px] -top-[18px]"
      />
      <a href="#explore">
        <div className="w-full flex justify-end md:-mt-[95px] sm:-mt-[75px] -mt-[50px] pr-[40px] relative z-10 md:-top-[26px] lg:-top-[30px] sm:-top-[20px] -top-[18px]">
          <img
            src="./stamp.png"
            className="md:w-[192px] sm:w-[150px] w-[100px] md:h-[191px] sm:h-[150px] h-[100px] object-contain"
          />
        </div>
      </a>
    </motion.div>
  </section>
);

export default Hero;
