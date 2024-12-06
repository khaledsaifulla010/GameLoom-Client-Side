import { useLoaderData } from "react-router-dom";
import AllReviewsCard from "../AllReviewsCard/AllReviewsCard";

const AllReviews = () => {
  const reviews = useLoaderData();
  console.log(reviews);

  return (
    <div className="mt-12 mb-24  font-4">
      <h1 className="mt-4 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-600">
        All Reviews
      </h1>
      <div className="grid grid-cols-2 ml-10 gap-x-4 mt-16 gap-y-16 ">
        {reviews.map((review) => (
          <AllReviewsCard key={review._id} review={review}></AllReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
