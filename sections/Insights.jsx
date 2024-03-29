"use client";
import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { insights } from "../constants";
const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col ${styles.flexCenter}`}
    >
      <TypingText title="| Insight" textStyles="text-center"></TypingText>
      <TitleText
        title={<>Insight about metaverse</>}
        textStyles="text-center max-w-[962px]"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
