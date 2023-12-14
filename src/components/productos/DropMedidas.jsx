import React, { useState } from "react";

export const DropMedidas = () => {
  const [isOpen, seaIsOpen] = useState(false);
  const medidas = ["medida1", "medida2", "medida3"];
  return (
    <div className="z-50">
      <button
        onClick={() => seaIsOpen(!isOpen)}
        className="z-50 text-white border-1 shadow-sm border-white bg-neutral-800 hover:text-white hover:bg-neutral-900 hover:border-none focus:ring-1 focus:mb-2 focus:outline-none focus:ring-white font-medium rounded-full text-sm px-6 py-1.5  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Medidas{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* // <!-- Dropdown menu --> */}
      {isOpen ? (
        <div className="z-50 absolute -bottom-46 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            {medidas.map((medida, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {medida}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
