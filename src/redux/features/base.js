// @ts-nocheck
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL_API = import.meta.env.VITE_API_URL_BASE;

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  tagTypes: ["Favs", "Saved", "Posts"],
  endpoints: (builder) => {
    const endpointFactory = (method, url, invalidatesTags) => ({
      query: (body) => ({
        url,
        method,
        body,
      }),
      invalidatesTags,
    });

    return {
      createAccount: builder.mutation(
        endpointFactory("POST", "/account/create")
      ),
      verifyAccount: builder.mutation(
        endpointFactory("POST", "/account/verify")
      ),
      getSavedOffers: builder.query({
        query: ({ userId, queryString }) =>
          `/talents/${userId}/saved${queryString ? `?${queryString}` : ""}`,
        providesTags: ["Saved"],
      }),
      saveOffer: builder.mutation({
        ...endpointFactory("PUT", "/talents/:userId/saved", ["Saved"]),
      }),
      getFavsProfiles: builder.query({
        query: ({ userId, queryString }) =>
          `/companies/${userId}/favs?${queryString}`,
        providesTags: ["Favs"],
      }),
      favProfile: builder.mutation({
        ...endpointFactory("PUT", "/companies/:userId/favs", ["Favs"]),
      }),
    };
  },
});

export const {
  useCreateAccountMutation,
  useVerifyAccountMutation,
  useGetSavedOffersQuery,
  useSaveOfferMutation,
} = baseApi;
