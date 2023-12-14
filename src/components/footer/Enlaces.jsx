import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const Enlaces = ({ links, title }) => {
  return (
    <nav className="list-none mb-0 sm:mb-1">
      <div className="lg:w-full md:w-1/2 px-0 inline-block justify-center">
        <h2 className="title-font w-full uppercase font-bold text-gray-800 tracking-widest text-sm mb-2">
          {title}
        </h2>
        {links.map((link, i) => (
          <li key={i}>
            <Link
              to={link.path}
              target="_blank"
              className="text-gray-600 hover:text-gray-800 my-1"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

Enlaces.propTypes = {
  links: PropTypes.array,
  title: PropTypes.string,
};
