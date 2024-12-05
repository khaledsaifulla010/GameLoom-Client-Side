import { useEffect, useState } from "react";
import TopPlayerGameReviewCard from "../TopPlayerGameReviewCard/TopPlayerGameReviewCard";

const TopPlayerGameReview = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topPlayerGameReview")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="font-1 mt-36 mb-72">
      <h1
        className="text-5xl font-extrabold text-center text-sky-700 border w-[650px] ml-[430px] p-2 rounded-xl border-sky-200 bg-sky-50 animate__animated animate__tada animate__infinite"
        style={{ animationDuration: "4s" }}
      >
        Top Player Recommendations
      </h1>
      <div className="grid grid-cols-2 ml-10 mt-16 gap-y-16 ">
        {reviews.map((singleReview) => (
          <TopPlayerGameReviewCard
            key={singleReview._id}
            singleReview={singleReview}
          ></TopPlayerGameReviewCard>
        ))}
      </div>
    </div>
  );
};

export default TopPlayerGameReview;
