import { Router } from "express";
import {
  handleLogin,
  handleSignUp,
  handleLogout,
  handleCheckAuth,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.post("/signup", handleSignUp);
authRoutes.post("/login", handleLogin);
authRoutes.post("/logout", handleLogout);
authRoutes.get("/", protectRoute, handleCheckAuth);

export default authRoutes;
