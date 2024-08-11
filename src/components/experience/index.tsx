import * as React from "react";
import "./styles.css";

export const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <p className="experience__title">Working Experience 🚀</p>
      <div className="experience__container">
        <div className="experience__container__timeline">
          <div className="experience__container__timeline__line"></div>
        </div>

        <div className="experience__container__content">
          {/* START APPSINDIE */}
          <div className="experience__container__content__card">
            {/* LINE AND DOT*/}
            <div className="experience__container__content__card__line">
              <div className="experience__container__content__card__line__center">
                <div className="experience__container__content__card__line__dot"></div>
              </div>
            </div>

            {/* CARD */}
            <div className="experience__container__content__card__content">
              <p className="experience__container__content__card__content__title">
                Appsindie (Start up company)
              </p>
              <p className="experience__container__content__card__content__date">
                Mobile Developer (01/2024 - 07/2024)
              </p>
              <p className="experience__container__content__card__content__tech">
                Technologies: Azure Function, Mongodb, React Native, Redux
                Toolkit, Swift, Redis, Mapbox
              </p>
              <ul className="experience__container__content__card__content__description">
                <li>
                  ✔️ Get ideas about business activities for the project, draw
                  out use cases, logic flow for the application.
                </li>
                <li>
                  ✔️ Deploy application design using Figma tool, review and edit
                  with team leader.
                </li>
                <li>
                  ✔️ Implement the Frontend part with React Native, Redux
                  Toolkit.
                </li>
                <li>
                  ✔️ Implement the back-end with a domain-driven design in the
                  Azure Functions with Firebase, Mongodb.
                </li>
                <li>
                  ✔️ Research new architecture Driven Domain Design and Swift
                  and communicate it to team members.
                </li>
              </ul>
            </div>
          </div>
          {/* END APPSINDIE */}

          {/* START CDS */}
          <div className="experience__container__content__card">
            {/* LINE AND DOT*/}
            <div className="experience__container__content__card__line">
              <div className="experience__container__content__card__line__center">
                <div className="experience__container__content__card__line__dot"></div>
              </div>
            </div>

            {/* CARD */}
            <div className="experience__container__content__card__content">
              <p className="experience__container__content__card__content__title">
                Blackwind Software
              </p>
              <p className="experience__container__content__card__content__date">
                Mobile Developer (05/2023 - 12/2023)
              </p>
              <p className="experience__container__content__card__content__tech">
                Technologies: React Native, Camera, Map Location, Redux Saga, NodeJS, Microsoft SQL Server
              </p>
              <ul className="experience__container__content__card__content__description">
                <li>
                  ✔️ Implementing ERP projects for some businesses such as Hoanghamobile, Hesman Shopdunk
                </li>
                <li>
                  ✔️ Collaborate with design and BA teams to review feature implementations and analyze work
                </li>
                <li>
                  ✔️ Deploy base construction for the project on the Frontend side using React Native technology, Redux Toolkit
                </li>
                <li>
                  ✔️ Focus on handling Camera checkin, location tracking using MLKit and Map Location
                </li>
              </ul>
            </div>
          </div>
          {/* END CDS */}
        </div>
      </div>
    </section>
  );
};
