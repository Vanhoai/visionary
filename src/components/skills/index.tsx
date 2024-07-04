import * as React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { skills, core } from "./contants";

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
          {core.map((skill) => {
            return (
              <li key={skill.title} className="skills__container__core__item">
                <motion.p
                  whileHover={{
                    scaleY: 1.15,
                    scaleX: 1.15,
                  }}
                  className="skills__container__core__item__name"
                >
                  {skill.title}
                </motion.p>

                <div className="skills__container__core__item__list">
                  {skill.skills.map((e) => {
                    return (
                      <motion.p
                        key={e}
                        className="skills__container__core__item__description"
                        whileHover={{
                          scaleY: 1.15,
                          scaleX: 1.15,
                        }}
                      >
                        ✔️ {e}
                      </motion.p>
                    );
                  })}
                </div>
              </li>
            );
          })}
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
