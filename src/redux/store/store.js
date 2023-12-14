// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// import roleSliceReducer from "../features/slices/role/roleSlice";
// import { categoriasApi } from "../features/api/categorias/categoriasApi"; // Asegúrate de importar correctamente
// import productosApi from "../features/api/productos/productosApi";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["roleState"],
// };

// const rootReducer = combineReducers({
//   roleState: roleSliceReducer,
//   [categoriasApi.reducerPath]: categoriasApi.reducer,
//   [productosApi.reducerPath]: productosApi.reducer, // Usar directamente el reducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   categorias: categoriasApi.middleware,

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       categoriasApi.middleware,
//       productosApi.middleware
//     ),
// });

// setupListeners(store.dispatch);
// store.js
// store.js
// import { configureStore } from "@reduxjs/toolkit";
// import { categoriasApi } from "../features/api/categorias/categoriasApi";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, categoriasApi.reducer);

// export const store = configureStore({
//   reducer: {
//     [categoriasApi.reducerPath]: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(categoriasApi.middleware),
// });

// export const persistor = persistStore(store);

// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriasApi } from "../features/api/categorias/categoriasApi";
import { productosApi } from "../features/api/productos/productosApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [categoriasApi.reducerPath]: categoriasApi.reducer,
    [productosApi.reducerPath]: productosApi.reducer, // Usar directamente el reducer
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(categoriasApi.middleware, productosApi.middleware),
});

export const persistor = persistStore(store);
