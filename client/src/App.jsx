import Explore from "./components/Explore";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";

const authUser = true;

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={!authUser && <Landing />} />
        <Route
          path="/home"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/:id"
          element={authUser ? <BlogDetails /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
