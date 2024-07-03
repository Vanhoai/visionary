import * as React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import {
  KotlinIcon,
  SwiftIcon,
  FirebaseIcon,
  NestJsIcon,
  MongodbIcon,
  FlutterIcon,
  PostgresIcon,
  DockerIcon,
} from "../../icons";

const skills = [
  {
    icon: KotlinIcon,
    name: "Kotlin",
  },
  {
    icon: SwiftIcon,
    name: "Swift",
  },
  {
    icon: FirebaseIcon,
    name: "Firebase",
  },
  {
    icon: NestJsIcon,
    name: "NestJs",
  },
  {
    icon: MongodbIcon,
    name: "MongoDB",
  },
  {
    icon: FlutterIcon,
    name: "Flutter",
  },
  {
    icon: PostgresIcon,
    name: "Postgres",
  },
  {
    icon: DockerIcon,
    name: "Docker",
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <h3 className="skills__title">Main Skills 📚</h3>
      <div className="skills__container">
        <div className="skills__container__items">
          <div className="skills__container__items__list">
            {skills.map((skill) => (
              <ItemSkill key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
        <ul className="skills__container__core">
          <li className="skills__container__core__item">
            <motion.p
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
              className="skills__container__core__item__name"
            >
              💎 Core
            </motion.p>
            <motion.p
              className="skills__container__core__item__description"
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
            >
              ✔️ OOP, SOLID, Design Pattern
            </motion.p>
          </li>
          <li className="skills__container__core__item">
            <motion.p
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
              className="skills__container__core__item__name"
            >
              ⏰ Manage
            </motion.p>
            <motion.p
              className="skills__container__core__item__description"
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
            >
              ✔️ Good teamwork and time management
            </motion.p>
          </li>
          <li className="skills__container__core__item">
            <motion.p
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
              className="skills__container__core__item__name"
            >
              🛠️ Architecture
            </motion.p>
            <motion.p
              className="skills__container__core__item__description"
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
            >
              ✔️ MVVM Architecture <br />
              ✔️ Clean Architecture <br />
              ✔️ Driven Domain Design
            </motion.p>
          </li>
          <li className="skills__container__core__item">
            <motion.p
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
              className="skills__container__core__item__name"
            >
              🎨 Design
            </motion.p>
            <motion.p
              className="skills__container__core__item__description"
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
            >
              ✔️ Figma
            </motion.p>
          </li>

          <li className="skills__container__core__item">
            <motion.p
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
              className="skills__container__core__item__name"
            >
              📚 AI
            </motion.p>
            <motion.p
              className="skills__container__core__item__description"
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
            >
              ✔️ Algorithms Machine Learning <br />
              ✔️ LLM / Generative AI
            </motion.p>
          </li>

          <li className="skills__container__core__item">
            <motion.p
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
              className="skills__container__core__item__name"
            >
              📚 Blockchain
            </motion.p>
            <motion.p
              className="skills__container__core__item__description"
              whileHover={{
                scaleY: 1.15,
                scaleX: 1.15,
              }}
            >
              ✔️ Solidity Language <br />
              ✔️ Write Smart Contract <br />
              ✔️ Web3JS, WalletConnect
            </motion.p>
          </li>
        </ul>
      </div>
    </section>
  );
};

interface ItemSkillProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
}

export const ItemSkill: React.FC<ItemSkillProps> = (props) => {
  const Icon = props.icon;

  return (
    <motion.div
      whileHover={{
        scaleY: 1.3,
        scaleX: 1.3,
      }}
      drag
      dragConstraints={{
        left: -40,
        right: 40,
        top: -40,
        bottom: 40,
      }}
      className="skills__container__items__item"
    >
      <Icon height={24} width={24} />
      <p className="skills__container__items__item__name">{props.name}</p>
    </motion.div>
  );
};
