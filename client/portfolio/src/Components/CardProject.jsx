import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import panic from "../assets/panic.jpeg";
import { Link } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import "../App.css";
import project from "../assets/project.avif";

export default function ImgMediaCard() {
  return (
    <Card className="custom-card">
      <div className="card-content">
        <CardMedia component="img" alt="panic" height="300" image={panic} />
        <CardContent className="card-text">
          <Typography gutterBottom variant="h5" component="div">
            panicRest
          </Typography>
          <Typography variant="body2" color="beige">
            PanicRest is a platform designed to assist individuals during
            anxiety attacks by offering immediate support and guidance. Our
            website aims to provide a prompt and effective response to help
            alleviate anxiety symptoms and promote emotional well-being.
          </Typography>
          <CardActions className="card-actions">
            <a href="https://github.com/zoriel135buc/LastProject">
              <FaGithub color="black" size={40} />
            </a>
            <a href="https://lastproject-iyl7.onrender.com/">
              <HiOutlineExternalLink color="black" size={40} />
            </a>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}
