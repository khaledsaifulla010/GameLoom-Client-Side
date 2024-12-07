import { useLoaderData } from "react-router-dom";
import AllReviewsCard from "../AllReviewsCard/AllReviewsCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { ImSortAmountDesc } from "react-icons/im";
import { FaStar } from "react-icons/fa";

const AllReviews = () => {
  const reviews = useLoaderData();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-infinity loading-xs"></span>;
  }

  if (!user) {
    return <p className="text-center text-red-500">User not logged in.</p>;
  }

  return (
    <div className="mt-12 mb-24 font-4">
      <div className="flex items-center justify-around mt-16 mb-24">
        <div className="border w-[400px] p-2 text-center text-lg font-semibold text-purple-700 border-purple-200 bg-purple-50 rounded-xl">
          <h1>Name : {user.displayName} </h1>
          <h1>Email : {user.email} </h1>
        </div>
        <div>
          <h1 className=" text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-600">
            All Reviews
          </h1>
        </div>
        <div>
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-1 font-bold text-xl text-orange-600 border p-2 rounded-xl bg-orange-50 border-orange-100"
            >
              Sort By <ImSortAmountDesc className="mt-1" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li className=" font-semibold text-rose-600 border rounded-xl bg-rose-50 border-rose-100">
                <h1 className="ml-12">
                  Rating <FaStar />
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 ml-10 gap-x-4 mt-16 gap-y-16">
        {reviews.map((review) => (
          <AllReviewsCard key={review._id} review={review}></AllReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
