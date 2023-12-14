import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Productos } from "../productos/Productos";
import { Context } from "@/App";

export const Categorias = () => {
  const { categorias, error, setIsCat, isFetching, productos } =
    useContext(Context);
  const { id } = useParams();

  const productsByCat = productos.filter(
    (products) => products.id_category === id
  );

  // Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(11);
  const max = Math.ceil(productos.length / perPage) || 1;

  useEffect(() => {
    if (isFetching) {
      console.log("Cargando categorias...");
    }
    if (error) {
      console.log(error);
    }
    if (categorias) {
      setIsCat(categorias.data);
    }
  }, [categorias, isFetching, error, setIsCat]);

  //

  const location = useParams();

  return (
    <Productos
      productos={productsByCat}
      currentPage={currentPage}
      perPage={perPage}
      setCurrentPage={setCurrentPage}
      max={max}
    />
  );
};
