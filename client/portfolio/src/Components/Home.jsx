import "../App.css";
import bg from "../assets/image.jpg";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { LuSearchCode } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { VscTerminalCmd } from "react-icons/vsc";
import p from "../assets/p.jpg";
import { blue } from "@mui/material/colors";

const Home = ({ page }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="content">
        <h2 style={{ color: "blueviolet" }}>Technical skills</h2>
        <div className="icon-container">
          <SiMui size={30} />
          <FaBootstrap size={30} />
          <IoLogoJavascript size={30} />
          <FaReact size={30} />
          <VscTerminalCmd size={30} />
        </div>
        <div className="icon-container">
          <FaCss3 size={30} />
          <FaNodeJs size={30} />
          <FaHtml5 size={30} />
          <SiPostgresql size={30} />
          <FaGithub size={30} />
        </div>
        <div
          style={{
            backgroundImage: `url(${p})`,
            margin: "10px",
            display: "flex",
            width: "100vw",
            textAlign: "center",
            justifyItems: "center",
            justifyContent: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "30vh",
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="icon2">
            <div className="icon-text">
              <FaUsers size={50} color="black" />
              <h4 style={{ color: "black" }}>
                Communication Collaboration Attention to User Experience
              </h4>
            </div>
            <div className="icon-text">
              <FaClockRotateLeft size={50} color="black" />
              <h4 style={{ color: "black" }}>
                Time Management Continuous Learning Adaptability
              </h4>
            </div>
            <div className="icon-text">
              <LuSearchCode size={50} color="black" />
              <h4 style={{ color: "black" }}>
                Problem-solving Attention to details and ready to catch up all
                the time
              </h4>
            </div>
          </div>
        </div>
        <div>
          <h3>Hobbies</h3>
        </div>
      </div>
    </section>
  );
};
export default Home;
