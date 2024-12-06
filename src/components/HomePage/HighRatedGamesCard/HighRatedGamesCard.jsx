import { Heart, Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const HighRatedGamesCard = ({ game }) => {
  const { _id, gameName, rating, gameThumbnail } = game;

  const myStyles = {
    itemShapes: Heart,
    activeFillColor: "#FF007F",
    inactiveFillColor: "#FFC0CB",
  };

  return (
    <div>
      <div class="card bg-base-100 w-[420px] h-[600px] border-2 border-slate-300 shadow-md transition-transform duration-1000 ease-in-out transform hover:shadow-[0px_15px_35px_rgba(0,0,0,0.5)] hover:scale-105">
        <figure>
          <img src={gameThumbnail} />
        </figure>
        <div class="card-body">
          <h2 class="text-3xl font-extrabold">{gameName}</h2>
          <div className="flex items-center gap-4 mt-6 justify-between">
            <Rating
              style={{ maxWidth: 160 }}
              itemStyles={myStyles}
              value={rating}
              readOnly
            />
            <div className="border p-1 rounded-md w-10 font-semibold text-rose-600 bg-rose-100 border-rose-300 text-center">
              {rating}
            </div>
          </div>
          <div class="card-actions ">
            <Link
              to={`/highratedGames/${_id}`}
              class="border rounded-xl p-2 text-blue-700 bg-blue-100 border-blue-300 w-full mt-4 font-bold shadow-md hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-in-out text-base text-center"
            >
              Explore Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighRatedGamesCard;
