import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../components/HomePage/Home/Home";
import SingleHighestRatedGameDetails from "../components/HomePage/SingleHighestRatedGameDetails/SingleHighestRatedGameDetails";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import AddReviewPage from "../components/AddReviewPage/AddReviewPage";
import PrivateRoute from "../privateRoute/PrivateRoute";
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
        element: (
          <SingleHighestRatedGameDetails></SingleHighestRatedGameDetails>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/highratedGames/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReviewPage></AddReviewPage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
