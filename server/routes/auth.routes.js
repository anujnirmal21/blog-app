import { Router } from "express";
import {
  handleLogin,
  handleSignUp,
  handleLogout,
} from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/signup", handleSignUp);
authRoutes.post("/login", handleLogin);
authRoutes.post("/logout", handleLogout);

export default authRoutes;
