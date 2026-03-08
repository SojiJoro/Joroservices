import React from "react";

const Button = ({ title, bg = "transparent", type = "button" }) => {
  return (
    <button
      className="relative isolate text-nowrap flex justify-center items-center select-none overflow-hidden rounded-md border border-accent align-middle transition-all duration-300 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent hover:text-black active:scale-[0.98] touch-manipulation"
      style={bg !== "transparent" ? { backgroundColor: bg } : undefined}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
