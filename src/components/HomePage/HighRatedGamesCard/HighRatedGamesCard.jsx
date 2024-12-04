import { Heart, Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const HighRatedGamesCard = ({ game }) => {
  const { _id, name, rating, description, image } = game;

  const myStyles = {
    itemShapes: Heart,
    activeFillColor: "#FF007F",
    inactiveFillColor: "#FFC0CB",
  };

  return (
    <div>
      <div class="card bg-base-100 w-[420px] h-[600px] border-2 border-slate-300">
        <figure>
          <img src={image} />
        </figure>
        <div class="card-body">
          <h2 class="text-3xl font-extrabold">{name}</h2>
          <div className="flex items-center gap-4 mt-6">
            <Rating
              style={{ maxWidth: 180 }}
              itemStyles={myStyles}
              value={rating}
              readOnly
            />
            <p>{rating}</p>
          </div>
          <div class="card-actions ">
            <button class="border rounded-xl p-2 text-blue-700 bg-blue-100 border-blue-300 w-full mt-4 font-bold shadow-md hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-in-out text-base">
              Explore Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighRatedGamesCard;
