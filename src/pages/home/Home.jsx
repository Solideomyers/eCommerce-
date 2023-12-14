import {
  Carrousel,
  Hero,
  Productos,
  SlidesHero,
  Testimonials,
} from "@/components";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "@/App";
export const Home = () => {
  const {
    categorias,
    error,
    setIsCat,
    isFetching,
    productos,
    productosRandom,
  } = useContext(Context);

  const [switchHero, setSwitchHero] = useState(true);

  const { id } = useParams();

  // Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);
  const max = Math.ceil(productosRandom.length / perPage) || 1;

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

  return (
    <>
      {switchHero ? <Hero /> : <SlidesHero />}
      <Carrousel />
      <Productos
        loading={isFetching}
        productos={productosRandom}
        currentPage={currentPage}
        perPage={perPage}
        setCurrentPage={setCurrentPage}
        max={max}
      />
      <Testimonials />
    </>
  );
};
