import ImgMediaCard from "./CardProject";
const CardComponent = ({ card }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${card.imageUrl})`,
      }}
    >
      <h2>{card.title}</h2>
      <p>{card.content}</p>
      <h3>{card.githubLink}</h3>
      <h4>{card.externalLink}</h4>
    </div>
  );
};

export default CardComponent;
