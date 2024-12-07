import { Link } from "react-router-dom";

const AllReviewsCard = ({ review }) => {
  const {
    _id,
    name,
    gameName,
    gameThumbnail,
    genreSelect,
    publicationYear,
    rating,
  } = review;

  return (
    <div>
      <div className="flex ">
        <div className="card bg-slate-100 border-2 border-slate-300 w-[700px] h-[400px] overflow-hidden shadow-md transition-transform duration-1000 ease-in-out transform hover:shadow-[0px_15px_35px_rgba(0,0,0,0.5)] hover:scale-105">
          <figure className="flex h-full">
            <img
              src={gameThumbnail}
              alt={gameName}
              className="object-cover w-[35%] h-full"
            />
            <div className="flex flex-col justify-center w-[65%] p-6">
              <h3 className="text-2xl font-black text-indigo-800 border w-full text-center p-2 rounded-xl border-indigo-200 bg-indigo-50 ">
                {gameName}
              </h3>
              <div className="divider px-4 mt-8"></div>
              <div className="flex items-center justify-between mt-2">
                <div className="mt-2 text-base text-gray-600 ">
                  <p className="font-semibold text-teal-700 border px-2 w-full rounded-xl bg-teal-50 border-teal-200 text-center">
                    <strong>Reviewer :</strong> {name}
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-600 ">
                  <p className="font-semibold text-rose-700 border px-2 w-full rounded-xl bg-rose-50 border-rose-200 text-center italic">
                    <strong>Genre :</strong> {genreSelect}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="mt-4 text-base text-gray-600 ">
                  <p className="font-semibold text-violet-700 border px-2 w-full rounded-xl bg-violet-50 border-violet-200 text-center">
                    <strong>Published in :</strong> {publicationYear}
                  </p>
                </div>
                <div className="mt-4 text-base text-gray-600 ">
                  <p className="font-semibold text-orange-600 border px-2 w-full rounded-xl bg-orange-50 border-orange-200 text-center italic">
                    <strong>Rating :</strong> {rating}
                  </p>
                </div>
              </div>
              <div class="card-actions ">
                <Link
                  to={`/reviews/${_id}`}
                  class="border rounded-xl p-2 text-blue-700 bg-blue-100 border-blue-300 w-full mt-8 font-bold shadow-md hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-in-out text-base text-center "
                >
                  Explore Details
                </Link>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AllReviewsCard;
