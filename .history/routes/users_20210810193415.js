import express from "express";

import { v4 as uuidv4 } from "uuid";
const router = express.Router();
let users = [];

router.get("/", (req, res) => {
  console.log("Users requested");
  res.send(users);
});

router.post("/", createUser);
// get user with id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  // users.findById(id)
  const requestedUser = users.find((user) => user.id === id);
  res.send(requestedUser);
});
//delete user with id
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  users = users.filter((user) => user.id !== id);
  res.send(`user with id ${id} removed from the database`);
});
// update user with id
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);

  const { name, lastname, age } = req.body;

  if (name) {
    user.name = name;
  }
  if (lastname) {
    user.lastname = lastname;
  }
  if (age) {
    user.age = age;
  }
  res.send(`user with id ${id} updated`);
});
export default router;
