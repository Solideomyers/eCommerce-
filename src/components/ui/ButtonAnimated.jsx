import React from "react";
import PropTypes from "prop-types";
export const ButtonAnimated = ({ title, onClick, color = "primary" }) => {
  return (
    <div className="z-10 space-x-6 max-w-xs">
      <button
        onClick={onClick}
        className={`text-${color} text-transform-uppercase border-2 border-${color} py-1 px-3 rounded-full text-base font-semibold relative transition-all overflow-hidden hover:text-white before:content-[''] before:absolute before:h-[100%] before:w-0 before:top-0 before:-left-10 before:transform before:skew-x-[45deg] before:bg-primary before:-z-10 before:transition-all before:duration-500 hover:before:w-[160%] ease-in-out`}
      >
        <span>{title}</span>
      </button>
    </div>
  );
};

ButtonAnimated.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
