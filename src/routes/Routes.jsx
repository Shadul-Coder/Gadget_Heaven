import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/dashboard",
    Component: Layout,
  },
]);