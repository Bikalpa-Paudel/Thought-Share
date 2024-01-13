import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import post from "./routes/post.route";


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
app.use(express.json());
app.use('/api', post);

const port = 3001;

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

