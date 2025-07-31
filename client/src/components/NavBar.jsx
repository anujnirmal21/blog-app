import { useAuthStore } from "../store/useAuthStore";
import ButtonOne from "./buttons/ButtonOne";
import ButtonTwo from "./buttons/ButtonTwo";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const { authUser } = useAuthStore();
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
      <div className="flex gap-4">
        <ButtonOne text={"Sign up"} />
        <ButtonTwo text={"Log in"} />
      </div>
    </header>
  );
}

export default NavBar;
