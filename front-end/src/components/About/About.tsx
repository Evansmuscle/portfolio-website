import "./About.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush, faTruckFast } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-background">
      <div className="about-left-block about-block">
        <header className="about-slogan">Blazing Fast,</header>
        <header className="about-slogan">Feature-Rich Websites</header>
        <FontAwesomeIcon className="about-icon" icon={faTruckFast} />
      </div>
      <div className="about-right-block about-block">
        <FontAwesomeIcon className="about-icon" icon={faBrush} />
        <header className="about-slogan">But Colorful,</header>
        <header className="about-slogan">And Modern</header>
      </div>
    </div>
  );
};

export default About;
