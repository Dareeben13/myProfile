import React from "react";
import "../style.css";
import Button from "../Button";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="welcome-text">
          <h3>Wellcome! I'M</h3>
        </div>
        <div className="dev-name">
          <h1>EBENEZER KOLAWOLE</h1>
        </div>
        <div className="dev-job">
          <h4> Software Developer</h4>
        </div>
        <div className="dev-info">
          <p>
            I have over 3 years of experience as a software engineer, and have
            worked at startup organisations.
            <br /> While I'm a proficient full-stack Developer, my expertise is
            building scalable web applications.
          </p>
        </div>
        <div className="button-wrapper">
          <Button path="about" text="My Work" />
          <Button path="contact" text="Hire Me" />
        </div>
      </div>
    );
  }
}

export default Home;
