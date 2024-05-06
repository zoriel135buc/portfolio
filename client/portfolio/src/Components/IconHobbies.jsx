import "../App.css";
import { FaMusic } from "react-icons/fa6";
import { FaBasketballBall } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const IconHobbies = () => {
  return (
    <>
      <h2 style={{ color: "blueviolet" }}>Hobbies</h2>
      <div className="icon2">
        <div className="icon-text">
          <FaMusic size={50} color="blue" />
          <h4>Graduated from academic music studies</h4>
        </div>
        <div className="icon-text">
          <FaBasketballBall size={50} color="blue" />
          <h4>I played basketball at a professional level</h4>
        </div>
        <div className="icon-text">
          <FaUserFriends size={50} color="blue" />
          <h4>Meetings with friends</h4>
        </div>
      </div>
    </>
  );
};
export default IconHobbies;
