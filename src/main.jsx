// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { Home, Contact, CategoryHome, ProductoDetailPage } from "@/pages";
import { persistor, store } from "@/redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Breadcrumbs } from "components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        id: "home",
      },
      {
        path: "/category/:id",
        element: <CategoryHome />,
        id: "category",
      },
      {
        path: "/product/:id",
        element: <ProductoDetailPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <Breadcrumbs />
        </RouterProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);
