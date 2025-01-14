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
import ErrorPage from "../ErrorPage/ErrorPage";
import MyProfile from "../components/MyProfile/MyProfile";
import ContactUs from "../components/ContactUs/ContactUs";
import FAQ from "../components/FAQ/FAQ";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://game-loom-server-side.vercel.app/reviews/highest"),
      },
      {
        path: "/highratedGames/:id",
        element: (
          <SingleHighestRatedGameDetails></SingleHighestRatedGameDetails>
        ),
        loader: ({ params }) =>
          fetch(
            `https://game-loom-server-side.vercel.app/reviews/${params.id}`
          ),
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
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
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
        loader: () => fetch("https://game-loom-server-side.vercel.app/reviews"),
      },
      {
        path: "/reviews/:id",
        element: (
          <PrivateRoute>
            <SingleReviewDetailsCard></SingleReviewDetailsCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://game-loom-server-side.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/myWatchlist/:userEmail",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://game-loom-server-side.vercel.app/myWatchlist?userEmail=${params.userEmail}`
          ),
      },
      {
        path: "/myReviews/:userEmail",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://game-loom-server-side.vercel.app/reviews?userEmail=${params.userEmail}`
          ),
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);

export default router;
