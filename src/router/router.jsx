import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../components/HomePage/Home/Home";
import SingleHighestRatedGameDetails from "../components/HomePage/SingleHighestRatedGameDetails/SingleHighestRatedGameDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/highratedGames"),
      },
      {
        path: "/highratedGames/:id",
        element: <SingleHighestRatedGameDetails></SingleHighestRatedGameDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/highratedGames/${params.id}`),
      },
    ],
  },
]);

export default router;
