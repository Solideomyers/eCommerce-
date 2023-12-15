import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import { Producto } from "components";
import { Context } from "@/App";
import { randomMenu } from "@/utils";

export const Carrousel = () => {
  const { productos } = useContext(Context);
  const productosShort = randomMenu(productos, true);

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        // cuando la ventana de visualización es <= 400px
        400: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // cuando la ventana de visualización es <= 430px
        430: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // cuando la ventana de visualización es <= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // cuando la ventana de visualización es <= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      pagination={{ clickable: true }}
      slidesPerView={3}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
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
  );
};
