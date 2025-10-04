import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../layouts/Layout";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import axios from "axios";
import Dashboard from "../components/Dashboard/Dashboard";
import Bag from "../components/Dashboard/Bag/Bag";
import Wishlist from "../components/Dashboard/Wishlist/Wishlist";
import Loading from "../components/Loading/Loading";
import Statistics from "../components/Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    hydrateFallbackElement: <Loading></Loading>,
    loader: () => axios(`/AllProduct.json`),
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: ":category/:id",
        Component: ProductDetails,
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) => axios(`/${params.category}.json`),
      },
      {
        path: "/Statistics",
        Component: Statistics,
      },
      {
        path: "Dashboard",
        Component: Dashboard,
        children: [
          {
            index: true,
            Component: Bag,
          },
          {
            path: "Cart",
            Component: Bag,
          },
          {
            path: "Wishlist",
            Component: Wishlist,
          },
        ],
      },
    ],
  },
]);