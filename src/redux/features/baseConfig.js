// @ts-nocheck
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN = import.meta.env.VITE_MP_PUB_KEY;

const BASE_URL =
  import.meta.env.VITE_API_URL_BASE || "http://laweb_api.test/api";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-type", "application/json;");
    headers.set("Authorization", `Bearer ${TOKEN}`);
    return headers;
  },
});

export const endpoints = {
  categories: ["categories"],
};

export const getEndpoint = (category, action) => `${category}/${action}`;
