import * as React from "react";
import "./styles.css";
import { Download04Icon } from "../../icons";

export const Container: React.FC = () => {
  return (
    <section className="container" id="container">
      <img
        className="container__image"
        alt="avatar"
        src="https://i.pinimg.com/736x/35/15/ed/3515ed5f1a66e182a0f6779aeb73e3ae.jpg"
      />

      <h5 className="container__name">Hi ! I’m Trần Văn Hoài ✌🏻</h5>
      <p className="container__special">Mobile Engineer AI/ML Engineer</p>

      <div className="container__actions">
        <button className="container__actions__hire">Hire Me</button>
        <div className="container__actions_download">
          <span className="container__actions_download__label">
            Download CV
          </span>
          <Download04Icon />
        </div>
      </div>
    </section>
  );
};
