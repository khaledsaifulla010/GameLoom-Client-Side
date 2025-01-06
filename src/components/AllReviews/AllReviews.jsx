import { useLoaderData } from "react-router-dom";
import AllReviewsCard from "../AllReviewsCard/AllReviewsCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { ImSortAmountDesc } from "react-icons/im";
import { FaStar, FaFilter, FaLightbulb } from "react-icons/fa";
import { PiCalendarStarFill } from "react-icons/pi";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";
const AllReviews = () => {
  const reviews = useLoaderData();
  const { user, loading } = useContext(AuthContext);

  const [sortOption, setSortOption] = useState(null);
  const [filterOption, setFilterOption] = useState([]);
  const [sortedReviews, setSortedReviews] = useState(reviews);

  // HANDLE SORTING USING RATING & YEAR
  const handleSort = (option) => {
    setSortOption(option);

    let sorted = [...reviews];

    if (option === "rating") {
      sorted = sorted.sort((a, b) => b.rating - a.rating);
    } else if (option === "year") {
      sorted = sorted.sort((a, b) => b.publication_year - a.publication_year);
    }

    if (filterOption.length > 0) {
      sorted = sorted.filter((game) => filterOption.includes(game.genreSelect));
    }

    setSortedReviews(sorted);
  };

  // HANDLE GENRE FILTER
  const handleGenreClick = (genre) => {
    const filtered = reviews.filter((game) => game.genreSelect === genre);
    setFilterOption(filtered);
  };

  const finalReviews = filterOption.length > 0 ? filterOption : sortedReviews;

  return (
    <div className="mt-24 mb-24 font-4">
      <Helmet>
        <title>GameLoom || AllReviews</title>
      </Helmet>
      <div className="flex items-center justify-around gap-36 mt-16 mb-28">
        {user ? (
          <div className="border w-[400px] p-2 text-center text-lg font-semibold text-purple-700 border-purple-200 bg-purple-50 rounded-xl">
            <h1>Name : {user.displayName} </h1>
            <h1>Email : {user.email} </h1>
          </div>
        ) : (
          <p className="text-center text-red-500 font-bold">
            You are a Guest. Please Login or Register!
          </p>
        )}
        <div>
          <h1
            style={{ animationDuration: "3s" }}
            className=" text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600 animate__animated animate__backInDown "
          >
            All Reviews
          </h1>
        </div>
        <div>
          <div className="flex">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-1 font-bold text-xl text-orange-600 border p-2 rounded-xl bg-orange-50 border-orange-100"
              >
                Sort By <ImSortAmountDesc className="mt-1" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 p-2 shadow gap-y-4 border-2"
              >
                <li
                  className="font-semibold text-rose-600 border rounded-xl bg-rose-50 border-rose-100 w-24"
                  onClick={() => handleSort("rating")}
                >
                  <h1>
                    Rating <FaStar />
                  </h1>
                </li>
                <li
                  className="font-semibold text-blue-600 border rounded-xl bg-blue-50 border-blue-100 w-24"
                  onClick={() => handleSort("year")}
                >
                  <h1>
                    Year <PiCalendarStarFill />
                  </h1>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end ml-6 flex justify-center items-center">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-1 font-bold text-xl text-cyan-600 border p-2 rounded-xl bg-cyan-50 border-cyan-100"
              >
                Filter By <FaFilter className="mt-1" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow gap-y-4 border-2 mx-auto text-center"
              >
                <li
                  onClick={() => handleGenreClick("Action")}
                  className="font-semibold text-white border rounded-xl bg-red-500 hover:bg-red-600 w-24 mx-auto mb-2"
                >
                  <h1>
                    Action <FaLightbulb />
                  </h1>
                </li>
                <li
                  onClick={() => handleGenreClick("RPG")}
                  className="font-semibold text-white border rounded-xl bg-blue-500 hover:bg-blue-600 w-24 mx-auto mb-2"
                >
                  <h1>
                    RPG <FaLightbulb />
                  </h1>
                </li>
                <li
                  onClick={() => handleGenreClick("Sandbox")}
                  className="font-semibold text-white border rounded-xl bg-green-500 hover:bg-green-600
                   w-28 mx-auto mb-2"
                >
                  <h1>
                    Sandbox <FaLightbulb />
                  </h1>
                </li>
                <li
                  onClick={() => handleGenreClick("Strategy")}
                  className="font-semibold text-white border rounded-xl bg-yellow-500 hover:bg-yellow-600 w-24 mx-auto mb-2"
                >
                  <h1>
                    Strategy <FaLightbulb />
                  </h1>
                </li>
                <li
                  onClick={() => handleGenreClick("Adventure")}
                  className="font-semibold text-white border rounded-xl bg-purple-500 hover:bg-purple-600 w-28 mx-auto"
                >
                  <h1>
                    Adventure <FaLightbulb />
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 ml-10 gap-x-4 mt-16 gap-y-16">
        {finalReviews.map((review) => (
          <AllReviewsCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
