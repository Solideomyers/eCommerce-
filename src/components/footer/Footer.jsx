// Importa iconos directamente de react-icons
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Logo, FooterTop, FooterBellow } from "components";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-0">
      <div>
        <FooterTop />
      </div>
      <FooterBellow />
    </footer>
  );

  //   <footer className="bg-blue-font py-10 text-white-font">
  //     <div className="flex h-left flex-col items-center justify-evenly lg:h-auto lg:flex-row">
  //       <div className="h-20 w-44 lg:h-10 lg:w-24">
  //         <Link to="/" className="text-bg-green">
  //           <Logo />
  //         </Link>
  //       </div>
  //       <div>
  //         <ul className="flex flex-col flex-nowrap items-center gap-3 space-y-0 font-amenable text-2xl lg:flex-row lg:gap-9 lg:text-lg">
  //           {/* ... Tus enlaces ... */}
  //         </ul>
  //       </div>
  //       <div className="flex flex-col items-start">
  //         {/* Iconos de redes sociales con enlaces */}
  //         <SocialIconLink
  //           url="https://www.linkedin.com/company/empli/"
  //           icon={<FaLinkedin />}
  //           text="Linkedin"
  //         />
  //         <SocialIconLink
  //           url="https://www.instagram.com/empli_org/"
  //           icon={<FaInstagram />}
  //           text="Instagram"
  //         />
  //         <SocialIconLink
  //           url="https://www.facebook.com/Empli.org"
  //           icon={<FaFacebook />}
  //           text="Facebook"
  //         />
  //       </div>
  //     </div>
  //     <p className="font-quicksand-light text-center text-xl lg:mt-5 lg:text-base">
  //       &copy; 2024 La Web del Colchon. Todos los derechos reservados
  //     </p>
  //     <p className="font-quicksand-light text-center text-xl lg:mt-5 lg:text-base">
  //       Página realizada por:{" "}
  //       <Link to="/credits" className="underline">
  //         créditos
  //       </Link>
  //     </p>
  //   </footer>
  // );
};
