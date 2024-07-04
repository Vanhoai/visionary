import * as React from "react";
import { GithubIcon, LinkedinIcon } from "../../icons";
import "./styles.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__information">
          <p>Trần Văn Hoài</p>
          <p>+84 123 456 789</p>
        </div>

        <div className="footer__contact">
          <p className="footer__contact__label">Contact me 👉🏻</p>

          <div className="footer__contact__socials">
            <a href="https://github.com/Vanhoai">
              <GithubIcon />
            </a>

            <div className="footer__contact__socials__divider" />

            <a href="https://www.linkedin.com/in/tran-hoai-38a028235">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
