import React from "react";

const LinkBtn = ({ title, bg }) => {
  return (
    <button
      className={`  px-4 py-2 bg-accent rounded-md hover:first-line:text-text focus-visible:text-red-800 text-white xl:text-base text-sm
  hover:bg-blue-700 before:bg-accent  bg-${bg}  disabled:cursor-progress tracking-wide"
      type="submit`}
      fdprocessedid="1fi6k"
    >
      <span>{title}</span>
    </button>
  );
};

export default LinkBtn;
