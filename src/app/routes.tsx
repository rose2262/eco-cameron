import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { TourDetailPage } from "./pages/TourDetailPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "tour/:tourId", element: <TourDetailPage /> },
    ],
  },
]);
