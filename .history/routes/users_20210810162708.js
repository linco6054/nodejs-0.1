import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  console.log("Users requested");
  res.send(users);
});

router.post("/add", (req, res) => {
  //request . body gets you incoming info
  const user = req.body;

  const userWithId = { ...user, id: uuidv4(), createdAt: new Date() };
  users.push(userWithId);
  res.send(`user with the name ${userWithId.name} added to the database`);
});
// get user with id
rout

export default router;
