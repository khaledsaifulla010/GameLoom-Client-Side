import Lottie from "lottie-react";
import reviewLottie from "../../../public/reviewLottie.json";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";
const AddReviewPage = () => {
  const { user } = useContext(AuthContext);
  const redirects = useNavigate();

  const { email: userEmail, displayName } = user;

  const handleAddReview = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const gameName = e.target.gameName.value;
    const genreSelect = e.target.genreSelect.value;
    const publicationYear = e.target.publicationYear.value;
    const email = e.target.email.value;
    const reviewDescription = e.target.reviewDescription.value;
    const rating = e.target.rating.value;
    const gameThumbnail = e.target.gameThumbnail.value;

    const newReview = {
      name,
      gameName,
      genreSelect,
      publicationYear,
      email,
      reviewDescription,
      rating,
      gameThumbnail,
    };
    const singleReview = { ...newReview, userEmail, displayName };

    // SEND REVIEW IN MONGODB //

    fetch("https://game-loom-server-side.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Thanks for Giving Review.", { position: "top-center" });
        redirects("/");
      });
  };

  return (
    <div className="mt-24 mb-24 font-5 py-10">
      <Helmet>
        <title>GameLoom || AddReviews</title>
      </Helmet>
      <h1
        style={{ animationDuration: "3s" }}
        className="mt-4 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600 animate__animated
         animate__backInLeft "
      >
        Please Review a Game
      </h1>
      <div>
        <form
          onSubmit={handleAddReview}
          className="flex items-center justify-center mt-12"
        >
          <div>
            <Lottie className="w-[450px]" animationData={reviewLottie}></Lottie>
          </div>
          <div className="border border-slate-300 w-[1000px] p-4 rounded-xl h-[520px] shadow-lg transition duration-500 ease-in-out hover:shadow-2xl">
            <div className="flex items-center justify-center gap-8">
              {/* First 4 Properties */}
              <div className="w-[450px] space-y-2 ">
                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className=" text-lg font-bold ">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user.displayName}
                    readOnly
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg text-slate-400 font-semibold"
                    required
                  />
                </div>
                {/* Game Name */}
                <div className="form-control">
                  <label className="label">
                    <span className=" text-lg font-bold">Game Name</span>
                  </label>
                  <input
                    type="text"
                    name="gameName"
                    placeholder="Enter Your Game Name"
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                    required
                  />
                </div>
                {/* Genres */}
                <div className="form-control">
                  <label className="label">
                    <span className=" text-lg font-bold">Genres</span>
                  </label>
                  <select
                    className="select select-bordered w-full shadow-md transition duration-300 ease-in-out hover:shadow-lg text-gray-500"
                    name="genreSelect"
                  >
                    <option selected>Enter Games Genre</option>
                    <option>Action</option>
                    <option>RPG</option>
                    <option>Sandbox</option>
                    <option>Adventure</option>
                    <option>Strategy</option>
                  </select>
                </div>
                {/* Publication Year */}
                <div className="form-control">
                  <label className="label">
                    <span className=" text-lg font-bold">Publication Year</span>
                  </label>
                  <input
                    type="number"
                    name="publicationYear"
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                    min="1980"
                    max={new Date().getFullYear()}
                    placeholder="Enter Publication Year"
                    required
                  />
                </div>
              </div>
              {/* Second 4 Properties */}
              <div className="w-[450px] space-y-2">
                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className=" text-lg font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    readOnly
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg text-slate-400 font-semibold"
                    required
                  />
                </div>
                {/* Review Description */}
                <div className="form-control">
                  <label className="label">
                    <span className=" text-lg font-bold">
                      Review Description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="reviewDescription"
                    placeholder="Enter Your Review"
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                    required
                  />
                </div>
                {/* Rating */}
                <div className="form-control">
                  <label className="label">
                    <span className=" text-lg font-bold">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    min={1.0}
                    max={5.0}
                    step={0.1}
                    placeholder="Enter Your Rating"
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                    required
                  />
                </div>
                {/* Thumbnail */}
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-bold">Game Thumbnail</span>
                  </label>
                  <input
                    type="url"
                    name="gameThumbnail"
                    placeholder="Enter Your Game Thumbnail"
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="border p-2 ml-4 w-[930px] rounded-xl text-pink-600 bg-pink-100 border-pink-300 font-extrabold text-xl shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviewPage;
