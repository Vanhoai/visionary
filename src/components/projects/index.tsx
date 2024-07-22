import * as React from "react";
import "./styles.css";

const projects = [
  {
    name: "Tourismate",
    image:
      "https://i.pinimg.com/564x/d4/5f/7c/d45f7c4992728360bda6e180bf6a859f.jpg",
    description:
      "Tourismate is a travel support application using AI technology. Here we will provide trip itinerary using large language model (LLM). There will also be real-time location tracking of the team on Maps.",
    tech: "Tech: Kotlin for Android, Swift for IOS, ...updating",
  },
  {
    name: "WFlow",
    image:
      "https://i.pinimg.com/564x/d4/5f/7c/d45f7c4992728360bda6e180bf6a859f.jpg",
    description:
      "Wflow is an application that allows freelancers to connect with recruitment businesses, in addition to managing work progress and payment upon completion.",
    tech: "Tech: Flutter, Bloc, SocketIO, Stripe Balance, NestJS, Postgres, Firebase",
  },
  {
    name: "SightSea",
    image:
      "https://i.pinimg.com/564x/d4/5f/7c/d45f7c4992728360bda6e180bf6a859f.jpg",
    description:
      "SightSea is a Blockchain social networking application that allows users to post and connect with each other. There is also a user and article rating system.",
    tech: "Tech: React Native, Redux Toolkit, Blockchain, Firebase",
  },
  {
    name: "Aurora Coffee",
    image:
      "https://i.pinimg.com/564x/d4/5f/7c/d45f7c4992728360bda6e180bf6a859f.jpg",
    description: "Project on selling coffee and managing a chain of stores",
    tech: "Tech: Android, MVVM, Retrofit, Firebase, NestJS, Postgres",
  },
];

export const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <h4 className="projects__title">Projects 🧑🏻‍💻</h4>
      <div className="projects__container">
        {projects.map((project) => (
          <ProjectItem {...project} />
        ))}
      </div>
    </section>
  );
};

interface ProjectItemProps {
  name: string;
  image: string;
  tech: string;
  description: string;
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
        <p className="projects__container__item__information__name">
          {props.name}
        </p>
        <p className="projects__container__item__information__description">
          {props.description}
        </p>
        <p className="projects__container__item__information__list_tech">
          {props.tech}
        </p>
        <ul className="projects__container__item__information__tech">
          {/* <li className="projects__container__item__information__tech__item">
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
          </li> */}
        </ul>

        {/* <div className="projects__container__item__information__link">
          <a href="#">
            <CHPlayIcon height={30} width={30} />
          </a>

          <a href="#">
            <AppStoreIcon height={30} width={30} />
          </a>
        </div> */}
      </div>
    </div>
  );
};
