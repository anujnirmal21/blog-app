import { Router } from "express";

const authRoutes = Router();

authRoutes.post("/signup", handleSignUp);
authRoutes.post("/login", handleLogin);
authRoutes.post("/logout", handleLogout);
authRoutes.get("/user", getUser);

export default authRoutes;
