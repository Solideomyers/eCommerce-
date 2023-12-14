import React, { useContext, useState } from "react";
import { ProductoDetail } from "components";
import { useGetCategoriasQuery } from "@/redux";
import { useParams } from "react-router-dom";
import { Context } from "@/App";
export const ProductoDetailPage = () => {
  const { productos } = useContext(Context);
  const { id } = useParams();

  const producto = productos.filter((product) => product.idp.toString() === id);

  return (
    <section className="mx-10 my-1">
      <ProductoDetail product={producto} />
    </section>
  );
};
