import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";
const MyReviews = () => {
  const { userEmail, user } = useContext(AuthContext);

  const myReviews = useLoaderData();
  const [reviews, setReviews] = useState(myReviews);

  const filteredReviews = reviews.filter(
    (review) => review.userEmail === userEmail
  );

  // UPDATE REVIEW
  const handleUpdateReview = (e, _id) => {
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
    const updateReview = { ...newReview, userEmail };

    fetch(`https://game-loom-server-side.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review updated successfully!", {
            position: "top-center",
          });
          setReviews((prevReviews) =>
            prevReviews.map((review) =>
              review._id === _id ? { ...review, ...newReview } : review
            )
          );
          document.getElementById(`modal-${_id}`).close();
        } else {
          toast.error("Failed to update the review.", {
            position: "top-center",
          });
        }
      });
  };

  // DELETE REVIEW
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-loom-server-side.vercel.app/reviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
              setReviews((prevReviews) =>
                prevReviews.filter((review) => review._id !== _id)
              );
            } else {
              toast.error("Failed to delete the review.", {
                position: "top-center",
              });
            }
          });
      }
    });
  };

  return (
    <div className=" mt-24 mb-24 font-1">
      <Helmet>
        <title>GameLoom || MyReviews</title>
      </Helmet>
      <h1
        style={{ animationDuration: "4s" }}
        className="mt-12 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600 animate__animated
         animate__backInLeft "
      >
        My Game Review List
      </h1>
      {filteredReviews && filteredReviews.length > 0 ? (
        <div className="overflow-x-auto mt-12  px-8">
          <div>
            <div className="rounded-lg shadow-lg border border-gray-300">
              <table className="table w-full border-collapse">
                <thead className="bg-gray-700 text-white text-lg font-extrabold">
                  <tr>
                    <th className="text-center py-3 px-4">SL/No.</th>
                    <th className="text-center py-3 px-4">Image</th>
                    <th className="text-center py-3 px-4">Game Name</th>
                    <th className="text-center py-3 px-4">Genre</th>
                    <th className="text-center py-3 px-4">Rating</th>
                    <th className="text-center py-3 px-4">Published Year</th>
                    <th className="text-center py-3 px-4">Update</th>
                    <th className="text-center py-3 px-4">Delete</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {filteredReviews.map((game, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="text-center py-3 px-4 font-bold text-green-600 text-base flex justify-center items-center mt-8">
                        <span className="border p-4 rounded-full bg-green-50 border-green-100 w-10 h-10 flex items-center justify-center">
                          {index + 1}
                        </span>
                      </td>

                      <td className="text-center py-3 px-4">
                        <div className="avatar flex justify-center">
                          <div className="mask rounded-lg h-24 w-24">
                            <img
                              src={game.gameThumbnail}
                              alt="Game Thumbnail"
                            />
                          </div>
                        </div>
                      </td>

                      <td className="text-center py-3 px-4 text-indigo-500 font-bold text-base">
                        <span className="border p-2 rounded-lg bg-indigo-50 border-indigo-100">
                          {game.gameName}
                        </span>
                      </td>

                      <td className="text-center py-3 px-4 text-base text-purple-500 font-bold">
                        <span className="border p-2 rounded-lg bg-purple-50 border-purple-100">
                          {game.genreSelect}
                        </span>
                      </td>

                      <td className="text-center py-3 px-4 text-base font-bold text-pink-500">
                        <span className="border p-2 rounded-lg bg-pink-50 border-pink-100">
                          {game.rating}
                        </span>
                      </td>

                      <td className="text-center py-3 px-4 text-base font-bold text-teal-600">
                        <span className="border p-2 rounded-lg bg-teal-50 border-teal-100">
                          {game.publicationYear}
                        </span>
                      </td>
                      <td className="text-center py-3 px-4 font-bold  text-2xl">
                        <button
                          className="ml-4"
                          onClick={() =>
                            document
                              .getElementById(`modal-${game._id}`)
                              .showModal()
                          }
                        >
                          <FaEdit className="text-blue-600" />
                        </button>
                        <dialog id={`modal-${game._id}`} className="modal">
                          <div className="modal-box max-w-[1200px]">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>
                              <form
                                onSubmit={(e) =>
                                  handleUpdateReview(e, game._id)
                                }
                                className="flex items-center justify-center mt-12"
                              >
                                <div className="border border-slate-300 w-[1000px] p-4 rounded-xl h-[520px] ">
                                  <div className="flex items-center justify-center gap-8">
                                    {/* First 4 Properties */}
                                    <div className="w-[450px] space-y-2">
                                      {/* Name */}
                                      <div className="form-control">
                                        <label className="label">
                                          <span className="label-text text-lg font-bold">
                                            Name
                                          </span>
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
                                          <span className="label-text text-lg font-bold">
                                            Game Name
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          name="gameName"
                                          defaultValue={game.gameName}
                                          className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                                          required
                                        />
                                      </div>
                                      {/* Genres */}
                                      <div className="form-control">
                                        <label className="label">
                                          <span className="label-text text-lg font-bold">
                                            Genres
                                          </span>
                                        </label>
                                        <select
                                          className="select select-bordered w-full shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                                          name="genreSelect"
                                          defaultValue={game.genreSelect}
                                        >
                                          <option disabled>
                                            Enter Games Genre
                                          </option>
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
                                          <span className="label-text text-lg font-bold">
                                            Publication Year
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          name="publicationYear"
                                          defaultValue={game.publicationYear}
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
                                          <span className="label-text text-lg font-bold">
                                            Email
                                          </span>
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
                                          <span className="label-text text-lg font-bold">
                                            Review Description
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          name="reviewDescription"
                                          defaultValue={game.reviewDescription}
                                          className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                                          required
                                        />
                                      </div>
                                      {/* Rating */}
                                      <div className="form-control">
                                        <label className="label">
                                          <span className="label-text text-lg font-bold">
                                            Rating
                                          </span>
                                        </label>
                                        <input
                                          type="number"
                                          name="rating"
                                          defaultValue={game.rating}
                                          min={1.0}
                                          max={5.0}
                                          step={0.1}
                                          className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                                          required
                                        />
                                      </div>
                                      {/* Thumbnail */}
                                      <div className="form-control">
                                        <label className="label">
                                          <span className="label-text text-lg font-bold">
                                            Game Thumbnail
                                          </span>
                                        </label>
                                        <input
                                          type="url"
                                          name="gameThumbnail"
                                          defaultValue={game.gameThumbnail}
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
                        </dialog>
                      </td>
                      <td className="text-center py-3 px-4 font-bold text-red-600 text-2xl">
                        <button
                          onClick={() => handleDelete(game._id)}
                          className="ml-4"
                        >
                          <RiDeleteBin2Fill />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-gray-500 font-black text-4xl mt-24 mb-24">
          Review List is Empty!
        </h1>
      )}
    </div>
  );
};

export default MyReviews;
