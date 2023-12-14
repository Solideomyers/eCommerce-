import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";
import { DropMedidas } from "./DropMedidas";
export const Producto = ({ idp, catName, proname, price }) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300  hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src="/src/assets/images/herosection.svg"
        alt="Product Image"
      />
      <div className="p-4">
        <div className="inline-flex justify-between items-center w-full">
          <h2 className="mb-2 text-md font-bold dark:text-white text-neutral-900">
            {proname || "PRODUCTO"}
          </h2>
          <Link to={`/product/${idp}`}>
            <button
              type="submit"
              className=" text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Comprar
            </button>
          </Link>
        </div>
        <div className="flex items-baseline justify-between ">
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
            {catName || "CATEGORIA"}
          </p>
          <DropMedidas />
        </div>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-neutral-800 dark:text-white">
            {price}€
          </p>
          <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
            25.00€
          </p>
          <MdLocalOffer className="text-2xl text-red-600 animate-pulse ml-1" />
          <p className="ml-auto text-base font-medium text-primary">20% off</p>
        </div>
      </div>
    </div>
  );
};
Producto.propTypes = {
  idp: PropTypes.number,
  catName: PropTypes.string,
  proname: PropTypes.string,
  price: PropTypes.number,
};
