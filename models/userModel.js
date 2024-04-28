const { db } = require("../config/db.js");

const Post = (email, firstname, lastname, phone, message) => {
  return db("users").insert({ email, firstname, lastname, phone, message }, [
    "userid",
    "email",
    "firstname	",
    "lastname",
    "	phone",
    "message",
  ]);
};

const allUsers = () => {
  return db("users").select(
    "userid",
    "email",
    "firstname	",
    "lastname",
    "	phone",
    "message"
  );
};

module.exports = { Post, allUsers };
