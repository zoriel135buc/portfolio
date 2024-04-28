const { Post, allUsers } = require("../models/userModel.js");

const _allUsers = async (req, res) => {
  try {
    console.log(req);
    const users = await allUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "not found!!!" });
  }
};

const _Post = async (req, res) => {
  console.log("req.body", req.body);
  const { email, firstname, lastname, phone, message } = req.body;
  const loweremail = email.toLowerCase();
  try {
    const user = await Post(loweremail, firstname, lastname, phone, message);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "email exist" });
  }
};

module.exports = { _Post, _allUsers };
