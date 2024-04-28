import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ placeItems: "end", backgroundColor: "1C2221" }}
        position="absolute"
      >
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

            {/* Separate Button for "Projects" */}
            <Button component={Link} to="/projects" color="inherit">
              Projects
            </Button>
          </div>

          {/* Single Button wrapper for both "Home" and "Projects" */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
