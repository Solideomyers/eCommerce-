// import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
// import { ButtonPress } from "./ButtonPress";

// export const SelectBox = React.memo(({ options, buttonText }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const buttonRef = useRef(null);

//   const ChevronUpDownIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="h-6 w-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
//       />
//     </svg>
//   );

//   const CheckIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-6 w-6"
//     >
//       <path
//         fillRule="evenodd"
//         d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );

//   useEffect(() => {
//     // Realiza la navegación cuando se selecciona una categoría
//     if (selectedCategory) {
//       navigate(`/category/${selectedCategory.id}`);
//     }
//   }, [selectedCategory, navigate]);

//   const handleButtonClick = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const handleOptionClick = (category) => {
//     setSelectedCategory(category);
//     setIsMenuOpen(false);
//   };

//   const handleDocumentClick = (event) => {
//     // Cerrar el menú si se hace clic fuera del componente
//     if (buttonRef.current && !buttonRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     // Suscribirse al evento de clic en el documento para cerrar el menú
//     document.addEventListener("click", handleDocumentClick);

//     // Cancelar la suscripción al desmontar el componente
//     return () => {
//       document.removeEventListener("click", handleDocumentClick);
//     };
//   }, []);

//   const sortedOptions = options
//     .slice()
//     .sort((a, b) => a.name.localeCompare(b.name));

//   return (
//     <div className="max-w-fit sm:min-w-sm">
//       <div className="relative">
//         <ButtonPress
//           ref={buttonRef}
//           onclick={handleButtonClick}
//           title="Categorias"
//         />

//         {isMenuOpen && (
//           <ul className="absolute overscroll-y-none text-slate-500 py-2 mt-1 mb-1 h-60 max-w-max bg-white overflow-auto z-20 text-base shadow-lg rounded-2xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm animate-scaleIn">
//             {sortedOptions.map((opt, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => handleOptionClick(opt)}
//                 className="cursor-pointer select-none bg-white text-slate-500 rounded-full whitespace-nowrap flex items-center py-2 px-1 hover:bg-primary hover:text-white animate-scaleIn"
//               >
//                 <li className="w-full pl-2">{opt.name}</li>
//                 <span className="block truncate text-white bg-red-500">
//                   {opt.label}
//                 </span>
//               </div>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// });

// SelectBox.displayName = "SelectBox";

// SelectBox.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.object).isRequired,
//   buttonText: PropTypes.string,
// };

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ButtonPress } from "./ButtonPress";
export const SelectBox = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (id) => {
    navigate(`/category/${id}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((oldIndex) => (oldIndex + 1) % data.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex(
        (oldIndex) => (oldIndex - 1 + data.length) % data.length
      );
    } else if (event.key === "Enter" && highlightedIndex >= 0) {
      handleItemClick(data[highlightedIndex].id);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div>
        <ButtonPress
          title="Categorias"
          onclick={toggleDropdown}
          buttonRef={null}
          type="button"
        />
      </div>

      {isOpen && (
        <div
          onKeyDown={handleKeyDown}
          className="origin-top-right animate-scaleIn absolute overflow-y-scroll overscroll-y-none z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 h-64"
        >
          <ul
            className="py-1 w-full"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {data.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="block px-4 py-1 text-base text-gray-700 hover:bg-primary hover:text-white"
                role="menuitem"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

SelectBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
