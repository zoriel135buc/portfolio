// Projects.jsx
import bgP from "../assets/project.avif";
import ImgMediaCard from "./CardProject";

const Projects = ({ page }) => {
  return (
    <section className="project" style={{ backgroundImage: `url(${bgP})` }}>
      <div className="contP">
        <h1>{page}</h1>
        <div className="card-container">
          <ImgMediaCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
