import React from "react";
import { useNavigate } from "react-router-dom";
import {
  IconsNav,
  Logo,
  SearchCategory,
  BannerTop,
  BarMenu,
  Container,
} from "components";
import { useGetCategoriasQuery } from "@/redux";
import { randomMenu } from "utils";

export const NavItems = () => {
  const { data: categoriasData, error, isFetching } = useGetCategoriasQuery();

  if (isFetching) console.log("Cargando categorias...");
  if (error) console.log(error);

  const categorias = categoriasData?.data;
  const items = randomMenu(categorias, true);
  // console.log(items);
  const navigate = useNavigate();

  return (
    <div className="w-full z-50 flex flex-col gap-1 sticky">
      <BannerTop />
      <nav className="lg:max-w-content px-10 lg:justify-between lg:h-[76px] md:w-full md:h-[120px] justify-start items-center flex flex-col md:flex-row md:gap-8 md:items-center gap-2">
        <Logo />
        <SearchCategory />
        <IconsNav />
      </nav>
      <BarMenu items={items} />
    </div>
  );
};
