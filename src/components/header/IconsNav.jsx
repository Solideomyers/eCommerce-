import React, { useState } from "react";
import { Tooltip } from "components";
import { FaShoppingBag } from "react-icons/fa";
import { PiPhoneCall, PiPhoneCallFill } from "react-icons/pi";
import { BtnWsp } from "../ui/BtnWsp";
export const IconsNav = () => {
  const [isHovered, setIsHovered] = useState([
    { hover: false, msg: "Tus productos favoritos" },
    { hover: false, msg: "Accede a tu cuenta" },
    { hover: false, msg: "Paga tus productos" },
  ]);

  const handleHover = (index) => {
    const updateHover = isHovered.map((item, i) =>
      i === index ? { ...item, hover: !item.hover } : item
    );

    setIsHovered(updateHover);
  };

  return (
    <div className="hidden lg:flex bg-white w-fit px-1.25 py-0 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out ">
      <div className="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-0 md:px-3 md:py-1">
        <a
          className="text-gray-700 hover:text-primary dark:text-gray-400 border-2 inline-flex items-center mr-0 last-of-type:mr-0 py-1 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
          title="Linea directa"
        >
          <PiPhoneCallFill className="w-5 h-5" />
        </a>
        <a
          className="text-gray-700 hover:text-primary dark:text-gray-400 border-2 inline-flex items-center mr-0 last-of-type:mr-0 py-0 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
          title="Go to about me page"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          className="text-gray-700 hover:text-primary dark:text-gray-400 border-2 inline-flex items-center mr-0 last-of-type:mr-0 py-0 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
          title="Cesta de compras"
        >
          <FaShoppingBag className="w-5 h-5" />
        </a>
        {/* <BtnWsp /> */}
      </div>
    </div>
  );
};
