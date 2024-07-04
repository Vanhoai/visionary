import * as React from "react";
import "./styles.css";
import {
  AppStoreIcon,
  CHPlayIcon,
  FlutterIcon,
  GithubIcon,
  KotlinIcon,
} from "../../icons";

const projects = [
  {
    name: "WFlow",
    image:
      "https://i.pinimg.com/564x/d4/5f/7c/d45f7c4992728360bda6e180bf6a859f.jpg",
  },
  {
    name: "WFlow",
    image:
      "https://i.pinimg.com/564x/d4/5f/7c/d45f7c4992728360bda6e180bf6a859f.jpg",
  },
  {
    name: "FSLBlog",
    image:
      "https://i.pinimg.com/564x/d4/5f/7c/d45f7c4992728360bda6e180bf6a859f.jpg",
  },
  {
    name: "Sightsea DApp",
    image:
      "https://i.pinimg.com/564x/d4/5f/7c/d45f7c4992728360bda6e180bf6a859f.jpg",
  },
];

export const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <h4 className="projects__title">Personal Projects 🧑🏻‍💻</h4>
      <div className="projects__container">
        {projects.map((project) => (
          <ProjectItem name={project.name} image={project.image} />
        ))}
      </div>
    </section>
  );
};

interface ProjectItemProps {
  name: string;
  image: string;
}

export const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  return (
    <div className="projects__container__item">
      <img
        className="projects__container__item__image"
        src={props.image}
        alt={props.name}
      />

      <div className="projects__container__item__information">
        <p className="projects__container__item__information__name">FSLBlog</p>
        <p className="projects__container__item__information__description">
          A Social Media BLog for personal. Where you can share your thoughts
        </p>
        <ul className="projects__container__item__information__tech">
          <li className="projects__container__item__information__tech__item">
            <FlutterIcon height={20} width={20} />
            <span className="projects__container__item__information__tech__item__name">
              Flutter
            </span>
          </li>

          <li className="projects__container__item__information__tech__item">
            <KotlinIcon height={20} width={20} />
            <span className="projects__container__item__information__tech__item__name">
              Kotlin
            </span>
          </li>
        </ul>

        <div className="projects__container__item__information__link">
          <a href="#">
            <GithubIcon height={26} width={26} />
          </a>

          <a href="#">
            <CHPlayIcon height={30} width={30} />
          </a>

          <a href="#">
            <AppStoreIcon height={30} width={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
