import { Heart, Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
const SingleReviewDetailsCard = () => {
  const singleReview = useLoaderData();
  const {
    name,
    email,
    gameName,
    rating,
    reviewDescription,
    gameThumbnail,
    genreSelect,
    publicationYear,
  } = singleReview;

  const singleGameDetails = singleReview;

  const myStyles = {
    itemShapes: Heart,
    activeFillColor: "#FF007F",
    inactiveFillColor: "#FFC0CB",
  };

  const handleAddToWatchList = () => {
    fetch(`http://localhost:5000/myWatchlist?email=${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleGameDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="font-5">
      <h1 className="mt-12 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-600">
        Review Details of "{gameName}"
      </h1>
      <div className="flex justify-center items-center p-8 mt-12 mb-24">
        <div className="card bg-slate-100 border-2 border-gray-300 w-[1200px] h-[550px] shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          <figure className="flex">
            <img
              src={gameThumbnail}
              className="object-cover w-[40%] h-[550px] border-r"
            />
            <div className="flex flex-col p-6 w-[60%]">
              <h2 className="text-4xl font-bold text-indigo-800 bg-indigo-50 border-indigo-200 border p-2 rounded-xl w-full text-center ">
                {gameName}
              </h2>
              <div className="mt-10 text-lg text-gray-700 flex justify-between gap-8">
                <p className="text-green-600 bg-green-50 border-green-200 border p-2 rounded-xl w-[40%] text-center">
                  <strong>Reviewer : </strong> {name}
                </p>
                <p className="text-green-600 bg-green-50 border-green-200 border p-2 rounded-xl w-[60%] text-center">
                  <strong>Email : </strong>
                  {email}
                </p>
              </div>
              <div className="mt-8 text-lg text-gray-700 flex justify-between gap-8">
                <p className="text-red-600 bg-red-50 border-red-200 border p-2 rounded-xl w-[40%] text-center">
                  <strong>Published In : </strong> {publicationYear}
                </p>
                <p className="text-red-600 bg-red-50 border-red-200 border p-2 rounded-xl w-[60%] text-center">
                  <strong>Genre : </strong> {genreSelect}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 justify-between">
                <Rating
                  style={{ maxWidth: 160 }}
                  itemStyles={myStyles}
                  value={rating}
                  readOnly
                />
                <div className="border p-1 rounded-md w-28 font-semibold text-amber-600 bg-amber-100 border-amber-300 text-center">
                  <strong>Rating : </strong> {rating}
                </div>
              </div>
              <div className="divider mt-6"></div>
              <p className="mt-4 text-gray-600 text-lg font-bold text-justify">
                <strong className="text-orange-600">
                  Review Description :
                </strong>
                {reviewDescription}
              </p>
              <button
                onClick={handleAddToWatchList}
                className="border rounded-xl p-2 text-violet-700 bg-violet-200
              border-violet-300 w-full mt-6 font-bold shadow-md
              hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition-shadow
              duration-300 ease-in-out text-lg  flex items-center justify-center gap-2"
              >
                Add to WatchList
                <BiSolidLike />
              </button>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SingleReviewDetailsCard;