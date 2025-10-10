import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CartProvider from "./context/CartProvider.jsx";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </StrictMode>
);