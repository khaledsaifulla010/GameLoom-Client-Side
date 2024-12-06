const AddReviewPage = () => {
  return (
    <div className="mt-12 mb-72 font-5">
      <h1>Reviews</h1>
      <div>
        <form>
          <div>
            {/* First 4 Properties */}
            <div>
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
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* Second 4 Properties */}
            <div>
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
