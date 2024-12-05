import { Heart, Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const SingleHighestRatedGameDetails = () => {
  const singleGame = useLoaderData();

  const {
    name,
    rating,
    description,
    image,
    genre,
    published_year,
    downloads,
    company,
  } = singleGame;

  const myStyles = {
    itemShapes: Heart,
    activeFillColor: "#FF007F",
    inactiveFillColor: "#FFC0CB",
  };

  return (
    <div className="flex justify-center items-center p-8 mt-12 mb-24">
      <div className="card bg-base-100 border-2 border-gray-300 w-[1200px] h-[500px] shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
        <figure className="flex">
          <img
            src={image}
            alt={name}
            className="object-cover w-[40%] h-[500px] border-r"
          />
          <div className="flex flex-col p-6 w-[60%]">
            <h2 className="text-4xl font-bold text-indigo-800 bg-indigo-50 border-indigo-200 border p-2 rounded-xl w-[450px] text-center">
              {name}
            </h2>

            <div className="mt-8 text-lg text-gray-700 flex justify-between">
              <p className="text-red-600 bg-red-50 border-red-200 border p-2 rounded-xl w-[240px] text-center">
                Genre : <strong>{genre}</strong>
              </p>
              <p className="text-sky-600 bg-sky-50 border-sky-200 border p-2 rounded-xl w-[170px] text-center">
                Downloads : <strong>{downloads}</strong>
              </p>
            </div>

            <div className="mt-8 text-lg text-gray-700 flex justify-between">
              <p className="text-pink-900 bg-pink-50 border-pink-200 border p-2 rounded-xl w-[235px] text-center">
                Company: <strong>{company}</strong>
              </p>
              <p className="text-purple-600 bg-purple-50 border-purple-200 border p-2 rounded-xl w-[160px] text-center">
                Published : <strong>{published_year}</strong>
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-between">
              <Rating
                style={{ maxWidth: 160 }}
                itemStyles={myStyles}
                value={rating}
                readOnly
              />
              <div className="border p-1 rounded-md w-10 font-semibold text-amber-600 bg-amber-100 border-amber-300 text-center">
                {rating}
              </div>
            </div>

            <div className="divider mt-6"></div>
            <p className="mt-4 text-gray-600 text-lg font-bold text-justify">
              {description}
            </p>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default SingleHighestRatedGameDetails;
