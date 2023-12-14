import React, { useEffect, useMemo, useState } from "react";

export const BannerTop = () => {
  const prompter = useMemo(
    () => [
      "ENVIOS GRATUITOS",
      "FINANCIA TU COMPRA EN CÓMODOS PLAZOS",
      "OPCIÓN DE SUBIDA Y MONTAJE EN SU DOMICILIO",
      "PRODUCTOS FABRICADOS EN ESPAÑA",
      "FABRICACIÓN PROPIA, MUEBLES HECHOS A MANO",
      "MUEBLES YA MONTADOS Y LISTOS",
      "GARANTÍA CON LA MEJOR SOLUCIÓN PARA TI EN 24 H",
      "ENVIOS EXPRESS CON ENTREGA 24 HORAS",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % prompter.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index, prompter.length]);

  return (
    <div className="relative bg-primary bg-opacity-80 overflow-hidden">
      <div className="max-w-screen-lg mx-auto py-0 flex items-center justify-center gap-1">
        <div className="w-4 h-4">
          {/* Ícono */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.6}
            stroke="currentColor"
            className="text-white w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
        <div className="text-white text-sm font-normal font-sans capitalize overflow-hidden">
          {prompter.map((text, i) => (
            <span
              key={i}
              className={`${
                i === index ? "block" : "hidden"
              } text-center flex-shrink-0 transition-all delay-200 ease-out`}
            >
              {text.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
