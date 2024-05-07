/* Header.jsx */
import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <p style={{ color: " burlywood" }}>
        Hi, I'm <strong>Zoriel</strong>, a Software Engineer with a passion for
        crafting exceptional front-end experiences. Currently based in{" "}
        <span></span>
        <strong>Jerusalem, Israel</strong>, I'm a Full-stack Developer, where I
        bring innovative solutions to life through code and creativity.
      </p>
      <h3>Technical Skills</h3> {/* Added a title for technical skills */}
    </header>
  );
};

export default Header;
