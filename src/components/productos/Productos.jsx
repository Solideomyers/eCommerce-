import React from "react";
import PropTypes from "prop-types";
import { Pagination, Producto } from "components";
import { Spinner } from "components";
export const Productos = ({
  productos,
  currentPage,
  perPage,
  setCurrentPage,
  max,
  loading,
}) => {
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="container px-1 py-0 mx-auto flex w-full flex-col items-center ">
        <div className="inline-flex flex-wrap w-full justify-center">
          {loading ? (
            <Spinner />
          ) : (
            productos
              ?.slice(
                (currentPage - 1) * perPage,
                (currentPage - 1) * perPage + perPage
              )
              .map((producto, i) => (
                // <div key={i}>
                <Producto
                  key={i}
                  catName={producto.cat_name}
                  price={parseInt(producto.attribute_price)}
                  proname={producto.proname}
                  idp={producto.idp}
                />
                // </div>
              ))
          )}
        </div>
        <Pagination
          current={currentPage}
          setCurrent={setCurrentPage}
          max={max}
        />
      </div>
    </section>
  );
};
Productos.propTypes = {
  productos: PropTypes.array,
  currentPage: PropTypes.number,
  perPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  max: PropTypes.number,
  loading: PropTypes.bool,
};
