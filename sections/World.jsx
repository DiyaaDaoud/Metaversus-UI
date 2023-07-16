"use client";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { CardWorld, CircleImage, TitleText, TypingText } from "../components";
import { exploreWorlds } from "../constants";
import Image from "next/image";
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col ${styles.flexCenter}`}
    >
      <TypingText
        title="| People on the World"
        textStyles="text-center"
      ></TypingText>
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center max-w-[962px]"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="xl:block hidden relative lg:mt-[80px] md:mt-[70px] sm:mt-[20px] mt-[20px] w-full h-[550px]"
      >
        <Image src="/map.png" alt="map" fill />
        <CircleImage
          outerImage="/union2.png"
          innerImage="/people-01.png"
          addedStyles="bottom-[21%] right-[10%]"
          gradientStyle="people1-gradient "
        />
        <CircleImage
          outerImage="/union2.png"
          innerImage="/people-03.png"
          addedStyles="bottom-[44%] right-[46%]"
          gradientStyle="people3-gradient"
        />
        <CircleImage
          outerImage="/union2.png"
          innerImage="/people-02.png"
          addedStyles="top-[8%] left-[10%]"
          gradientStyle="people2-gradient"
        />
        <div
          className={` absolute  top-[40%] left-[20%] w-[217px] h-[167px] planetcard-gradient2`}
        ></div>
        <CardWorld
          title={exploreWorlds[1].title}
          imgUrl="/planetcard02.png"
          containerStyles="top-[40%] left-[20%]"
          outerWidth={217}
          outerHeight={167}
        />
        <div
          className={` absolute  top-[10%] right-[20%] w-[211px] h-[159px] planetcard-gradient1`}
        ></div>
        <CardWorld
          title={exploreWorlds[4].title}
          imgUrl="/planetcard01.png"
          containerStyles="top-[10%] right-[20%]"
          outerWidth={211}
          outerHeight={159}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
