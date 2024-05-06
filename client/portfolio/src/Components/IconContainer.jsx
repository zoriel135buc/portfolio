import React from "react";
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
import { VscTerminalCmd } from "react-icons/vsc";

const IconContainer = () => {
  return (
    <>
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
    </>
  );
};

export default IconContainer;
