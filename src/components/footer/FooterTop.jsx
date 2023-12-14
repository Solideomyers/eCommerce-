import React from "react";
import { FaShippingFast, FaCreditCard } from "react-icons/fa";
import { RiRecycleFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

export const FooterTop = () => {
  return (
    <section className="w-full py-2 flex items-center px-4 md:px-10 bg-blue-500">
      <div className="w-full flex-col flex-wrap md:flex-row md:flex-nowrap justify-center items-center gap-4 md:gap-20 xl:inline-flex">
        {renderFooterItem(
          FaShippingFast,
          "Envío Gratuito",
          "Orden gratuita sobre $99"
        )}
        {renderFooterItem(
          RiRecycleFill,
          "Reciclaje",
          "Recicle sus productos con nosotros"
        )}
        {renderFooterItem(
          FaCreditCard,
          "Pagos Seguros",
          "Transacciones seguras y protegidas"
        )}
        {renderFooterItem(
          MdOutlineSupportAgent,
          "Soporte 24/7",
          "Atención al cliente disponible"
        )}
      </div>
    </section>
  );
};

const renderFooterItem = (Icon, title, description) => (
  <section className="w-1/2 inline-flex xs:inline-flex md:w-1/2 overflow-hidden max-h-content md:h-full justify-start items-start gap-0">
    <Icon className="text-white" size={24} />
    <div className="max-w-content h-full md:w-full flex-col justify-center items-start gap-0.5 py-0 px-2">
      <div className="text-white text-xs md:text-sm font-bold uppercase">
        {title}
      </div>
      <div className="text-white text-xs md:text-sm font-normal capitalize">
        {description}
      </div>
    </div>
  </section>
);
