import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
  authUser: false,
  isSigningUp: false,
  isLoggingIn: false,
  setAuthUser: (user) => set({ authUser: user }),
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/");

      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  handleSignUp: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      const errMsg =
        error?.response?.data?.message || error?.message || "Signup failed";
      console.log(errMsg);
      toast.error(errMsg);
    } finally {
      set({ isSigningUp: false });
    }
  },
  handleLogin: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },
}));
