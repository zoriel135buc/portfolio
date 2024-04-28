import "../App.css";
import bg from "../assets/image.jpg";

const Home = ({ page }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="content">
        <h1>Home</h1>
        <p>get ready to transform your react app</p>
        <a href="*">start now</a>
      </div>
    </section>
  );
};

export default Home;
