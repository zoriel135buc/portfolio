const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/userRoutes.js");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
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
