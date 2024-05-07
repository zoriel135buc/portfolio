import axios from "axios";
import { BASE_URL } from "../App";
import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import post from "../assets/post.jpg";

const Post = ({ page }) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");

  const PostDea = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/post`,
        {
          email,
          message,
          firstname,
          lastname,
          phone,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
      setErr(error.response);
    }
  };

  return (
    <div className="post" style={{ backgroundImage: `url(${post})` }}>
      <div className="postP">
        <h2>Contact</h2>
        <Box
          component={"form"}
          sx={{
            m: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
          }}
          autoComplete="off"
        >
          <TextField
            sx={{ m: 1 }}
            id="email"
            type="email"
            label="Enter your email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="message"
            type="text"
            label="Enter your message"
            variant="outlined"
            onChange={(e) => setMessage(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="phone"
            type="text"
            label="Enter your phone"
            variant="outlined"
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="firstname"
            type="text"
            label="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="lastname"
            type="text"
            label="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Button
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            onClick={PostDea}
            variant="contained"
            style={{ marginBottom: "10px" }}
          >
            Post
          </Button>
        </Box>
      </div>
      <div>{err}</div>
    </div>
  );
};

export default Post;
