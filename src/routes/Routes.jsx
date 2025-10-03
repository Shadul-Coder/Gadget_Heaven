import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../layouts/Layout";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/:category/:id",
        Component: ProductDetails,
        loader: ({ params }) => axios(`../../public/${params.category}.json`),
      },
    ],
  },
]);