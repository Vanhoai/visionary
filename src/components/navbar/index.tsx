import * as React from "react";
import { GithubIcon, LinkedinIcon, Mail01Icon } from "../../icons";
import "./styles.css";

export const NavBar: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__email">
          <Mail01Icon />
          <p className="navbar__email__name">hardy251223@gmail.com</p>
        </div>

        <ul className="navbar__menu">
          <li className="navbar__menu__item">
            <a href="#container">Home</a>
          </li>
          <li className="navbar__menu__item">
            <a href="#about">About</a>
          </li>
          <li className="navbar__menu__item">
            <a href="#skills">Skills</a>
          </li>
          <li className="navbar__menu__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar__menu__item">
            <a href="#experience">Experience</a>
          </li>
        </ul>

        <div className="navbar__socials">
          <span>
            <GithubIcon />
          </span>
          <div className="navbar__socials__separator" />
          <span>
            <LinkedinIcon />
          </span>
        </div>
      </nav>
    </header>
  );
};
