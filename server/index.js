import { configDotenv } from "dotenv";
import app from "./app.js";

configDotenv();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("server started at port : " + PORT));
