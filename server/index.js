import { configDotenv } from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

configDotenv();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log("server started at port : " + PORT);
});
