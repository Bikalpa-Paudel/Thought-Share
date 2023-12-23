import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1>");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
