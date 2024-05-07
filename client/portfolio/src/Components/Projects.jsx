import bgP from "../assets/project.avif";
import ImgMediaCard from "./CardProject";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { TbFileCv } from "react-icons/tb";

const Projects = ({ page }) => {
  return (
    <section className="project" style={{ backgroundImage: `url(${bgP})` }}>
      <div className="contP">
        <h1>{page}</h1>
        <div className="card-container">
          <ImgMediaCard />
          <footer
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              margin: "20px",
            }}
          >
            <div>
              <a
                href="https://linkedin.com/in/zoriel-bucris-724177273"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 20px" }}
              >
                <CiLinkedin color="black" size={40} />
              </a>
              <a
                href="https://github.com/zoriel135buc"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 20px" }}
              >
                <IoLogoGithub color="black" size={40} />
              </a>
              <a
                href="https://docs.google.com/document/d/1Wk4FN7io_Jkxn7ol47JGbOL0g_SvmdFd2zXu6xem0U4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 20px" }}
              >
                <TbFileCv color="black" size={40} />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Projects;
