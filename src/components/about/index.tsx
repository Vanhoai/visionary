import * as React from "react";
import { motion } from "framer-motion";
import Image from "../../assets/mobile.png";
import "./styles.css";

export const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <motion.p
        className="about__title"
        whileInView={{
          opacity: [0.7, 1],
          y: [100, 0],
        }}
      >
        I am a <strong>Mobile Engineer</strong> <br /> with a passion for AI and
        Machine Learning. Experience working with mobile apps that integrate
        AI/ML technology and Blockchain
      </motion.p>
      <div className="about__right">
        <div className="about__card__bubble"></div>
        <img className="about__image" src={Image} alt="mobile"></img>
      </div>
    </section>
  );
};
