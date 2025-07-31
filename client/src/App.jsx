import NavBar from "./components/NavBar";
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";

function App() {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={!authUser && <Landing />} />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/:id"
          element={authUser ? <BlogDetails /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
