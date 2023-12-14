import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { RiArrowUpSLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
const scrollButtonStyles = {
  button:
    "fixed bottom-10 right-14 z-50 p-2 animate-pulse transition-colors ease-in-out duration-300 text-primary animate-reveal rounded-full text-white bg-[#25D366] shadow-lg",
};

// How can I use this hook?
// Is simple, just import in the componente that you want to use like it: import { useGoUp } from "./yourpath"
// Then inside the component parent declare like it: const yourvariable = useGoUp()
// finally you can put in your render.
export const useWhatsapp = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const shouldShowScrollButton = window.scrollY > window.innerHeight * 0.2;
    setShowScrollButton(shouldShowScrollButton);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showScrollButton && (
        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className={scrollButtonStyles.button}
        >
          <Link to={"#"} target="_blank">
            <IoLogoWhatsapp />
          </Link>
        </motion.button>
      )}
    </>
  );
};
