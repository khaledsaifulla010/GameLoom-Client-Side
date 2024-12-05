import { Heart, Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const TopPlayerGameReviewCard = ({ singleReview }) => {
  const { gameName, image, playerName, rating, review } = singleReview;
  const myStyles = {
    itemShapes: Heart,
    activeFillColor: "#FF007F",
    inactiveFillColor: "#FFC0CB",
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 border-2 border-slate-300 w-[650px] h-[300px] overflow-hidden shadow-md transition-transform duration-1000 ease-in-out transform hover:shadow-[0px_15px_35px_rgba(0,0,0,0.5)] hover:scale-105">
          <figure className="flex h-full">
            <img
              src={image}
              alt={gameName}
              className="object-cover w-[40%] h-full"
            />
            <div className="flex flex-col justify-center w-[60%] p-6">
              <h3 className="text-3xl font-black text-indigo-800 border w-64 text-center p-2 rounded-xl border-indigo-200 bg-indigo-50 ">
                {gameName}
              </h3>
              <div className="mt-6 text-xl text-gray-600 ">
                <p className="font-semibold">
                  Player: <span className="text-black">{playerName}</span>
                </p>
              </div>
              <div className="mt-2 text-lg text-gray-600 ">
                <p className="mt-2 font-light italic">"{review}"</p>
              </div>
              <div className="divider"></div>
              <div className="flex items-center gap-4 justify-between">
                <Rating
                  style={{ maxWidth: 160 }}
                  value={rating}
                  itemStyles={myStyles}
                  readOnly
                />
                <div className="border p-1 rounded-md w-10 font-semibold text-rose-600 bg-rose-100 border-rose-300 text-center">
                  {rating}
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default TopPlayerGameReviewCard;
