/* ButtonAppBar.jsx */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "black" }} position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <div style={{ marginRight: "60px" }}>
            <Button variant="h6" component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="/projects" color="inherit">
              Projects
            </Button>
            <Button component={Link} to="/post" color="inherit">
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
