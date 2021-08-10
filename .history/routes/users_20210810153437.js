import express from "express";

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
  users.push(user);
  res.send(`user with the name ${user.name} added to the data`);
});

export default router;
