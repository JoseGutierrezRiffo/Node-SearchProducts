import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import productsRouter from "./routes/products";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// settings
const PORT = process.env.PORT || 4001;

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/api", productsRouter);

// server start
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
