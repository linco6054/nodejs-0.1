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
  console.log("success");
  users.push(req.user);
  res.send("success matherfucker");
});

export default router;
