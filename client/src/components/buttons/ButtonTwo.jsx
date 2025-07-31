import React from "react";

function ButtonTwo({ text, onClick }) {
  return (
    <button
      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ededed] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em]"
      onClick={onClick}
    >
      <span className="truncate">{text}</span>
    </button>
  );
}

export default ButtonTwo;
