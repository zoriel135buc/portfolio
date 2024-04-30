import "../App.css";
import bg from "../assets/image.jpg";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { VscTerminalCmd } from "react-icons/vsc";

const Home = ({ page }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="content">
        <h1>Home</h1>
        <h2>Technical skills</h2>
        <div className="icon-container">
          <SiMui size={64} />
          <FaBootstrap size={64} />
          <IoLogoJavascript size={64} />
          <FaReact size={64} />
          <VscTerminalCmd size={64} />
        </div>
        <div className="icon-container">
          <FaCss3 size={64} />
          <FaNodeJs size={64} />
          <FaHtml5 size={64} />
          <SiPostgresql size={64} />
          <FaGithub size={64} />
        </div>
        <p>Get ready to transform your React app</p>
        <a href="*">Start now</a>
      </div>
    </section>
  );
};

export default Home;
