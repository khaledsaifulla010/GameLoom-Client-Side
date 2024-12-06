import Lottie from "lottie-react";
import reviewLottie from "../../../public/reviewLottie.json";

const AddReviewPage = () => {
  return (
    <div className="mt-12 mb-72 font-5">
      <h1 className="mt-4 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600">
        Please Review a Game
      </h1>
      <div>
        <form className="flex items-center justify-center mt-12 ">
          <div>
            <Lottie className="w-[450px]" animationData={reviewLottie}></Lottie>
          </div>
          <div className="flex items-center justify-center gap-8 border w-[1000px] p-4 rounded-xl h-[500px]">
            {/* First 4 Properties */}
            <div className="w-[450px] space-y-4">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Game Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Game Name</span>
                </label>
                <input
                  type="text"
                  name="gameName"
                  placeholder="Enter Your Game Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Genres */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Genres</span>
                </label>
                <select className="select select-bordered w-full" name="select">
                  <option selected>Who shot first?</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              {/* Publication Year */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Publication Year</span>
                </label>
                <input
                  type="number"
                  name="year"
                  className="input input-bordered"
                  min="1980"
                  max={new Date().getFullYear()}
                  placeholder="Enter Year"
                  required
                />
              </div>
            </div>
            {/* Second 4 Properties */}
            <div className="w-[450px] space-y-4">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Review Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review Description</span>
                </label>
                <input
                  type="text"
                  name="reviewDescription"
                  placeholder="Enter Your Review"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Rating */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  min={1.0}
                  max={5.0}
                  step={0.1}
                  placeholder="Enter Your Rating"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Thumbnail */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Game Thumbnail </span>
                </label>
                <input
                  type="url"
                  name="gameThumbnail"
                  placeholder="Enter Your Game Thumbnail"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviewPage;
