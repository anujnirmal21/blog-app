import React from "react";

function SignUP() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
        <h2 className="text-[#141414] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Join Bloggr
        </h2>
        <div className="flex mx-auto min-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Your email"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#ededed] focus:border-none h-14 placeholder:text-neutral-500 p-4 text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
        </div>
        <div className="flex min-w-[480px] mx-auto flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Your password"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#ededed] focus:border-none h-14 placeholder:text-neutral-500 p-4 text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
        </div>
        <div className="flex px-4 py-3 mx-auto">
          <button className="flex min-w-[450px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-black text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Continue</span>
          </button>
        </div>
        <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
          Already have an account?
        </p>
      </div>
    </div>
  );
}

export default SignUP;
