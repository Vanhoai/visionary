import * as React from "react";
import "./styles.css";

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

      <div className="projects__container__item__image__overlay">
        <p>{props.name}</p>
      </div>
    </div>
  );
};
