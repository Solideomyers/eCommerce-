import React from "react";
import PropTypes from "prop-types";
export const ButtonPress = ({ title = "button", onclick, buttonRef }) => {
  return (
    <button
      type=""
      ref={buttonRef}
      onClick={onclick}
      className="bg-primary font-inherit py-1 px-4 font-bold text-white text-base rounded-full border-slate-100 focus:outline-1 focus:outline-primary/60 border-2 shadow-md hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-lg active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-sm transition-all duration-75 ease-in-out"
    >
      {title}
    </button>
  );
};

ButtonPress.propTypes = {
  title: PropTypes.string,
  onclick: PropTypes.func,
  buttonRef: PropTypes.any,
};
