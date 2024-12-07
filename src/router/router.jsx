import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../components/HomePage/Home/Home";
import SingleHighestRatedGameDetails from "../components/HomePage/SingleHighestRatedGameDetails/SingleHighestRatedGameDetails";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import AddReviewPage from "../components/AddReviewPage/AddReviewPage";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AllReviews from "../components/AllReviews/AllReviews";
import SingleReviewDetailsCard from "../components/SingleReviewDetailsCard/SingleReviewDetailsCard";
import GameWatchList from "../components/GameWatchList/GameWatchList";
import MyReviews from "../components/MyReviews/MyReviews";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/highratedGames/:id",
        element: (
          <SingleHighestRatedGameDetails></SingleHighestRatedGameDetails>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
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
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/reviews/:id",
        element: <SingleReviewDetailsCard></SingleReviewDetailsCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
      {
        path: "/myWatchlist/:userEmail",
        element: <GameWatchList></GameWatchList>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/myWatchlist?userEmail=${params.userEmail}`
          ),
      },
      {
        path: "/myReviews/:email",
        element: <MyReviews></MyReviews>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews?email=${params.email}`),
      },
    ],
  },
]);

export default router;
