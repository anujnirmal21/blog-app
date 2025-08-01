import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LoaderIcon } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { handleLogin, isLoggingIn } = useAuthStore();

  const onSubmit = (data) => {
    handleLogin(data);
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="justify-center flex flex-col py-5 w-full flex-1">
        <h2 className="text-[#141414] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Welcome back.
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto w-[480px]">
          <div className="mx-auto flex min-w-[480px] flex-wrap items-center gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                Email
              </p>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your email"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
              />
              {errors.email && (
                <span className="text-red-500 text-sm pt-1">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="flex mx-auto min-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141414] text-base font-medium leading-normal pb-2">
                Password
              </p>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Your password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
              />
              {errors.password && (
                <span className="text-red-500 text-sm pt-1">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          <div className="flex px-4 py-3 mx-auto">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-w-[450px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-black text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em] disabled:opacity-60"
            >
              <span className="truncate text-base">
                {isLoggingIn ? <LoaderIcon /> : "Log in"}
              </span>
            </button>
          </div>
        </form>

        <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Or{" "}
          <Link
            to="/signup"
            className="border-b border-neutral-500 cursor-pointer"
          >
            Create a new account.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
