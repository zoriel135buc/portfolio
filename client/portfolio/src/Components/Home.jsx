import React from "react";
import "../App.css";
import bg from "../assets/image.jpg";
import IconContainer from "./IconContainer";
import Header from "./Header";
import Icon2 from "./Icon2.jsx";
import IconHobbies from "./IconHobbies.jsx";

const Home = () => {
  return (
    <div className="container">
      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <div className="content">
          <Header />
          <IconContainer />
          <Icon2 />
        </div>
      </section>
    </div>
  );
};

export default Home;
