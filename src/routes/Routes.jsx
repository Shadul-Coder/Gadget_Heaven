import { createBrowserRouter } from "react-router";
import FirstLayout from "../layouts/FirstLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FirstLayout,
  },
]);