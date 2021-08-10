import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Users requested");
  res.send("Hello from users");
});

export default router;
