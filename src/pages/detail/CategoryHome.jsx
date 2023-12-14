import React from "react";
import { Categorias } from "components";
import { useMatch, useLocation } from "react-router-dom";

export const CategoryHome = () => {
  // const match = useMatch("/category/:id");
  // console.log(match);
  const location = useLocation();
  // console.log(location);
  return <Categorias />;
};
