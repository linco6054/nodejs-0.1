import express from "express";
import usersRoutes from "./routes/users.js";
import bodyParser from "body-parser";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Home page reguested");
  res.send("Server is Running");
});
app
app.listen(PORT, () =>
  console.log(`server running on port http://localhost:${PORT}`)
);
