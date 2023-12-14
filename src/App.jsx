// import "./App.css";
import { createContext, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavItems, Footer, Container, useGoUp, Breadcrumbs } from "components";
import { useWhatsapp } from "./hooks/useWhatsapp";
import { useGetCategoriasQuery } from "./redux";
import { randomMenu } from "./utils";

export const Context = createContext();

function App() {
  //
  const { data: categorias, error, isFetching } = useGetCategoriasQuery();
  const [isCat, setIsCat] = useState([]);
  const productos = isCat.flatMap((cat, i) => cat.products_by_cat);

  const productosRandom = useMemo(
    () => randomMenu(productos, false),
    [productos]
  );
  //

  const location = useLocation();
  const up = useGoUp();
  const wsp = useWhatsapp();

  return (
    <Context.Provider
      value={{
        categorias,
        isCat,
        productosRandom,
        setIsCat,
        error,
        isFetching,
        productos,
      }}
    >
      <div className="flex bg-neutral-100/70 min-h-screen w-full flex-col overflow-x-hidden">
        <>
          <NavItems />
        </>
        <main className="h-full flex-1 bg-slate-100 pb-32">
          {location.pathname !== "/" ? <Breadcrumbs /> : null}
          <Outlet />
        </main>
        <>
          {up}
          {wsp}
          <Footer />
        </>
      </div>
    </Context.Provider>
  );
}

export default App;
