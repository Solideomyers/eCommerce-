import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ButtonDefault = ({
  title,
  to,
  color = "white",
  background,
  extend,
  hover,
  icon,
  border = false,
  disabled = false,
  onClick = () => {},
}) => {
  const buttonClass = `w-full ${extend} rounded-full ${
    border ? "border" : ""
  } px-4 py-1 text-${color} bg-${background} font-ligth font-quicksand text-base font-bold uppercase tracking-widest border-${color} hover:font-bold transform transition-transform-gpu hover:scale-110 hover:${hover} mx-auto transition duration-300 ease-in-out md:mx-0`;

  return (
    <Link to={to} onClick={onClick}>
      <button disabled={disabled} className={buttonClass}>
        {title}
        {icon}
      </button>
    </Link>
  );
};

ButtonDefault.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
  textHover: PropTypes.string,
  icon: PropTypes.element,
  extend: PropTypes.string,
  hover: PropTypes.string,
  background: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  onClick: PropTypes.func,
};
