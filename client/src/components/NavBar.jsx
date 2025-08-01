import { useAuthStore } from "../store/useAuthStore";
import ButtonOne from "./buttons/ButtonOne";
import ButtonTwo from "./buttons/ButtonTwo";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const { authUser, handleLogout } = useAuthStore();
  return (
    <header className="w-full flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-10 py-3">
      <div
        className="flex items-center gap-4 text-[#141414] cursor-pointer"
        onClick={() => navigate(authUser ? "/home" : "/")}
      >
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
          Bloggr
        </h2>
      </div>
      {!authUser && (
        <div className="flex gap-4">
          <ButtonOne text={"Sign up"} onClick={() => navigate("/signup")} />
          <ButtonTwo text={"Log in"} onClick={() => navigate("/login")} />
        </div>
      )}
      {authUser && (
        <div className="flex gap-4 items-center">
          <div className="h-10 w-10 cursor-pointer">
            <img
              src="https://previews.123rf.com/images/mik38/mik382306/mik38230600134/206406358-young-student-avatar-generative-ai.jpg"
              alt="user_profile"
            />
          </div>
          <ButtonTwo text={"Logout"} onClick={() => handleLogout()} />
        </div>
      )}
    </header>
  );
}

export default NavBar;
