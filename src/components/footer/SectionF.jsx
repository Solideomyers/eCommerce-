import React from "react";
import PropTypes from "prop-types";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { Enlaces } from "components";
export const SectionF = () => {
  const links = [
    {
      title: "información",
      links: [
        {
          name: "Politica de Privacidad",
          path: "https://www.lawebdelcolchon.es/pages.php?id=2&footer=1",
        },
        {
          name: "Quiénes Somos",
          path: "https://www.lawebdelcolchon.es/pages.php?id=3&footer=1",
        },
        {
          name: "Condiciones de uso y venta",
          path: "https://www.lawebdelcolchon.es/pages.php?id=108&footer=1",
        },
        {
          name: "Envíos y Devoluciones Gratis",
          path: "https://www.lawebdelcolchon.es/pages.php?id=314&footer=1",
        },
        {
          name: "Nuestros Videos",
          path: "https://www.lawebdelcolchon.es/pages.php?id=328&footer=1",
        },
      ],
    },
    {
      title: "mi cuenta",
      links: [
        {
          name: "Informaciòn General",
          path: "https://www.lawebdelcolchon.es/account.php",
        },
        {
          name: "Direciones",
          path: "https://www.lawebdelcolchon.es/account.php?type=address",
        },
        {
          name: "Pedidos",
          path: "https://www.lawebdelcolchon.es/account.php?type=orders",
        },
        {
          name: "Contacto",
          path: "https://www.lawebdelcolchon.es/contacts.php",
        },
      ],
    },
    {
      title: "contacto",
      links: [
        {
          name: (
            <div className="inline-flex gap-1 items-center">
              <FaPhone />
              926090440
            </div>
          ),
          path: "#",
        },
        {
          name: (
            <div className="inline-flex gap-1 items-center">
              <RiWhatsappFill size={20} className="text-[#25D366]" />
              648709325
            </div>
          ),
          path: "#",
        },
        {
          name: (
            <div className="inline-flex gap-1 items-center">
              <MdEmail />
              info@lawebdelcolchon.es
            </div>
          ),
          path: "#",
        },
        {
          name: "Términos y Condiciones",
          path: "#",
        },
        {
          name: (
            <div className="inline-flex gap-1 items-center">
              <ImLocation2 />
              Localización
            </div>
          ),
          path: "#",
        },
      ],
    },
  ];

  return (
    <div className="w-full inline-flex justify-start gap-8">
      {links.map((item, i) => (
        <Enlaces key={i} title={item.title} links={item.links} />
      ))}
    </div>
  );
};
