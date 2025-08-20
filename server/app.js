import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import blogRoutes from "./routes/blog.routes.js";

const app = express();
const CLIENT_URL = process.env.CLIENT_URL;

//middlewares
app.use(
  express.json({
    limit: "10mb",
    strict: true,
    inflate: true,
    type: "application/json",
  })
);

app.use(cookieParser());
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

//middleware routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/blog", blogRoutes);

export default app;
