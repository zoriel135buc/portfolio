import "../App.css";
import { FaUsers } from "react-icons/fa";
import { LuSearchCode } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import p from "../assets/p.jpg";

const Icon2 = () => {
  return (
    <>
      <div>
        <div className="icon2">
          <div className="icon-text">
            <FaUsers size={40} color="white" />
            <h4 style={{ color: "white" }}>
              Communication Collaboration Attention to User Experience
            </h4>
          </div>
          <div className="icon-text">
            <FaClockRotateLeft size={40} color="white" />
            <h4 style={{ color: "white" }}>
              Time Management Continuous Learning Adaptability
            </h4>
          </div>
          <div className="icon-text">
            <LuSearchCode size={40} color="white" />
            <h4 style={{ color: "white" }}>
              Problem-solving Attention to details and ready to catch up all the
              time
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Icon2;
