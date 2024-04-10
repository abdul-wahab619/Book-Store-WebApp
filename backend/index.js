import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

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
