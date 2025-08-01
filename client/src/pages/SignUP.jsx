import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../store/useAuthStore";
import { LoaderIcon } from "react-hot-toast";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { handleSignUp, isSigningUp } = useAuthStore();

  const onSubmit = (data) => {
    handleSignUp(data);
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1"
      >
        <h2 className="text-[#141414] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Join Bloggr
        </h2>

        {/* Name */}
        <div className="flex mx-auto min-w-[480px] flex-wrap items-end gap-2 px-4 py-2">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              {...register("fullName", { required: "Full name is required" })}
              placeholder="Your name"
              className={`form-input flex w-full resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#ededed] h-14 placeholder:text-neutral-500 p-4 text-base font-normal ${
                errors.fullName ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <span className="text-sm text-red-600 mt-1">
                {errors.fullName.message}
              </span>
            )}
          </label>
        </div>

        {/* Email */}
        <div className="flex mx-auto min-w-[480px] flex-wrap items-end gap-2 px-4 py-2">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="Your email"
              className={`form-input flex w-full resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#ededed] h-14 placeholder:text-neutral-500 p-4 text-base font-normal ${
                errors.email ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        {/* Password */}
        <div className="flex min-w-[480px] mx-auto flex-wrap items-end gap-2 px-4 py-2">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Your password"
              className={`form-input flex w-full resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#ededed] h-14 placeholder:text-neutral-500 p-4 text-base font-normal ${
                errors.password ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.password && (
              <span className="text-sm text-red-600 mt-1">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex px-4 py-3 mx-auto">
          <button
            type="submit"
            className="flex min-w-[450px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-black text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">
              {!isSigningUp ? (
                "Sign up"
              ) : (
                <LoaderIcon className=" text-black animate-spin" />
              )}
            </span>
          </button>
        </div>

        {/* Link to login */}
        <Link
          to="/login"
          className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer"
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
