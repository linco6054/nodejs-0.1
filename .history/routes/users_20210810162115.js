import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const users = [
  {
    name: "lincoln",
    lastname: "kantet",
    age: 25,
  },
  {
    name: "jane",
    lastname: "mary",
    age: 35,
  },
];

router.get("/", (req, res) => {
  console.log("Users requested");
  res.send(users);
});

router.post("/add", (req, res) => {
  //request . body gets you incoming info
  const user = req.body;
  const userId = uuidv4;()
  users.push(user);
  res.send(`user with the name ${user.name} added to the database`);
});

export default router;
