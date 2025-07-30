import React from "react";

function ButtonOne({ text }) {
  return (
    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]">
      <span className="truncate">{text}</span>
    </button>
  );
}

export default ButtonOne;
