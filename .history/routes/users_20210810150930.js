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
    age: 25,
  },
];

router.get("/", (req, res) => {
  console.log("Users requested");
  res.send();
});

export default router;
