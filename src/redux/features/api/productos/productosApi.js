import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL_BASE;

export const productosApi = createApi({
  reducerPath: "productosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getProductoById: builder.query({
      query: (id, ido) => `productos/${id}?ida=${ido}`,
    }),
  }),
});

export const { useGetProductoByIdQuery } = productosApi;
