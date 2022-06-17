import express from "express";
import path from "path";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import importantLinkRoutes from "./routes/importantLinkRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import noticeBoardRoutes from "./routes/noticeBoardRoutes.js";
dotenv.config();
import queriesRoutes from "./routes/queriesRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
connectDB();

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v1/importantLink", importantLinkRoutes);
app.use("/api/v1/noticeboard", noticeBoardRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/queries", queriesRoutes);
app.use("/api/v1/result", resultRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/api/v1", (req, res) => {
  res.send("API is running....");
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
