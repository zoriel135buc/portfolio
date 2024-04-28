import bgP from "../assets/project.avif";

const Projects = ({ page }) => {
  return (
    <>
      <section className="project" style={{ backgroundImage: `url(${bgP})` }}>
        <div className="contP">
          <h1>Home</h1>
          <p>get ready to transform your react app</p>
          <a href="*">start now</a>
        </div>
      </section>
    </>
  );
};
export default Projects;
