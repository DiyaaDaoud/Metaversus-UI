"use client";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import { exploreWorlds, newFeatures, startingFeatures } from "../constants";
import Image from "next/image";
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Whats New?"></TypingText>
        <TitleText title={<>What's New about Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter} mt-[40px]`}
      >
        <Image src="/whats-new.png" alt="" fill className="object-contain" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
