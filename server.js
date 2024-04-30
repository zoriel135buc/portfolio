const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/userRoutes.js");
const app = express();
const path = require("path");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  // allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
  console.log(`running on ${process.env.PORT || 3001}`);
});

app.use("/users", usersRouter);
app.use(express.static(path.join(__dirname, "client/portfolio/dist")));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./client/portfolio/dist", "index.html")
  );
});
