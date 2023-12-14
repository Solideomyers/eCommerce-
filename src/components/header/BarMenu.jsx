import React from "react";
import { ButtonAnimated } from "../ui/ButtonAnimated";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
export const BarMenu = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full border border-neutral-40 bg-neutral-100/20">
      <div className="py-1 flex flex-wrap justify-center items-center gap-2">
        {items?.map((item, i) => (
          <ButtonAnimated
            onClick={() => navigate(`/category/${item.id}`)}
            key={i}
            color="primary"
            title={item.name}
          />
        ))}
      </div>
    </div>
  );
};

BarMenu.propTypes = {
  items: PropTypes.arrayOf(Object),
};
