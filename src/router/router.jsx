import { createBrowserRouter } from "react-router";
import First from "../layouts/First";
import Second from "../layouts/Second";
import axios from "axios";
import ProductDetails from "../pages/ProductDetails";
import Statistics from "../pages/Statistics";
import Loading from "../components/Loading/Loading";
import Dashboard from "../pages/Dashboard";
import Bag from "../components/Bag/Bag";
import Wishlist from "../components/Wishlist/Wishlist";
import Home from "../pages/Home";
import ErrorPage from "../Error/ErrorPage";
import ProductError from "../Error/ProductError";

const router = createBrowserRouter([
  {
    path: "/",
    Component: First,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/",
    Component: Second,
    children: [
      {
        path: ":category/:id",
        Component: ProductDetails,
        errorElement: <ProductError></ProductError>,
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

export default router;