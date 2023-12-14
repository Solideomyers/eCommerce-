// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL_API = import.meta.env.VITE_API_URL_BASE_PROD;
// console.log(BASE_URL_API);
// export const productosApi = createApi({
//   reducerPath: "productosApi",
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
//   endpoints: (builder) => ({
//     getProductos: builder.query({
//       queryFn: async ({ idsCategorias, page, pageSize }) => {
//         if (
//           !idsCategorias ||
//           !Array.isArray(idsCategorias) ||
//           idsCategorias.length === 0
//         ) {
//           return { data: [] };
//         }
//         console.log(idsCategorias);
//         const productosPromises = idsCategorias?.map((idCategoria) => {
//           console.log(
//             `${BASE_URL_API}/${idCategoria}?page=${page}&pageSize=${pageSize}`
//           );
//           try {
//             const response = fetch(
//               `${BASE_URL_API}/${idCategoria}?page=${page}&pageSize=${pageSize}`
//             );
//             if (!response.ok) {
//               throw new Error(
//                 `Failed to fetch data for category ${idCategoria}`
//               );
//             }
//             return response.json();
//           } catch (error) {
//             console.error(
//               `Error fetching data for category ${idCategoria}:`,
//               error
//             );
//             return { data: [] };
//           }
//         });
//         console.log(productosPromises);
//         const totalProductos = await Promise.all(productosPromises);
//         // console.log(totalProductos);
//         const productosValidos = totalProductos
//           .flatMap((response) => response?.value?.data?.products_by_cat || [])
//           .filter(Boolean);

//         return { data: productosValidos };
//       },
//     }),
//   }),
// });

// export const { useGetProductosQuery } = productosApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL_API = import.meta.env.VITE_API_URL_BASE_PROD;

export const productosApi = createApi({
  reducerPath: "productosApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  endpoints: (builder) => ({
    getProductos: builder.query({
      queryFn: async ({ idsCategorias }) => {
        console.log(idsCategorias);
        if (
          !idsCategorias ||
          !Array.isArray(idsCategorias) ||
          idsCategorias.length === 0
        ) {
          return { data: [] };
        }

        const productosPromises = idsCategorias.map(async (idCategoria) => {
          try {
            const response = await fetch(`${BASE_URL_API}/${idCategoria}`);
            if (!response.ok) {
              throw new Error(
                `Failed to fetch data for category ${idCategoria}`
              );
            }
            return response.json();
          } catch (error) {
            console.error(
              `Error fetching data for category ${idCategoria}:`,
              error
            );
            return { data: [] };
          }
        });

        const totalProductos = await Promise.allSettled(productosPromises);
        const productosValidos = totalProductos
          .flatMap((response) => response?.value?.data?.products_by_cat || [])
          .filter(Boolean);

        return { data: productosValidos };
      },
    }),
  }),
});

export const { useGetProductosQuery } = productosApi;
