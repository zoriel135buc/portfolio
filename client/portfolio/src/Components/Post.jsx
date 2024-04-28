import axios from "axios";
import { BASE_URL } from "../App";
import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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
          firstname, // Corrected from 'firstname'
          lastname, // Corrected from 'lastname'
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
    <div>
      <h2>Contact</h2>
      <Box component={"form"} sx={{ m: 1 }} autoComplete="off">
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
      </Box>
      <Button onClick={PostDea} variant="contained">
        Post
      </Button>
      <div>{err}</div>
    </div>
  );
};

export default Post;
