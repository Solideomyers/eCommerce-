import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Importar estilos de Swiper (asegúrate de tener los estilos correspondientes en tu aplicación)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Producto } from "components";
import { Context } from "@/App";
import { useContext } from "react";
import { randomMenu } from "@/utils";

export const Carrousel = () => {
  const { productos } = useContext(Context);
  const productosShort = randomMenu(productos, true);

  return (
    <div className="px-8 py-1 shadow-sm border mt-2">
      <h1 className="text-neutral-900 underline-offset-8 font-black text-xl">
        Producos en Oferta
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={8} // Espacio entre tarjetas
        slidesPerView={4} // Número de tarjetas por vista
        centeredSlides={false} // Centrar tarjetas en la vista
        // navigation={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="mySwiper"
      >
        {productosShort.map((producto, i) => (
          <SwiperSlide key={i}>
            <Producto
              proname={producto.proname}
              price={parseInt(producto.attribute_price)}
              idp={producto.idp}
              catName={producto.cat_name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
