import express from "express";
import cors from "cors";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";

const app = express();

// middlewares
app.use(express.json());

// middleware for handling CORS

//option 1: Allow all Origins (*)
// app.use(cors());

//option 2: Alow Custom Origins
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type"],
  })
);
app.get("/", (req, res) => {
  console.log(req);
  return res.status(619).send("Welcome Abdul Wahab Sab!");
});

// Routes
app.use("/books", bookRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log(`DB Connected`);
    app.listen(PORT, () => {
      console.log(`Server is Running at: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
