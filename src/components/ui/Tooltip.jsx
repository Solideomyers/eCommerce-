import React, { useRef } from "react";
import PropTypes from "prop-types";
export const Tooltip = ({ children, tooltip }) => {
  const tooltipRef = useRef(null);
  const container = useRef(null);
  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !container.current) return;
        const rct = container.current.getBoundingClientRect();
        // console.log(rct.left);
        // console.log(tooltipRef.current.style.left);
        tooltipRef.current.style.left = clientX - rct.left + "px";
      }}
      className="group relative inline-block"
    >
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className="invisible px-2 py-4 absolute group-hover:visible opacity-0 group-hover:opacity-100 transition border-2 shadow-neutral-100 shadow-sm border-slate-900 bg-secondary  text-slate-800/80 rounded-xl top-full mt-1 whitespace-wrap"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  tooltip: PropTypes.string,
};
