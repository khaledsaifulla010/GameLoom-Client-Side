import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
const MyReviews = () => {
  const { userEmail } = useContext(AuthContext);

  const myReviews = useLoaderData();

  const filteredReviews = myReviews.filter(
    (review) => review.userEmail === userEmail
  );

  console.log(filteredReviews);

  return (
    <div className="mb-24 font-1">
      <h1 className="mt-12 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-700">
        My Game Review List
      </h1>
      {filteredReviews && filteredReviews.length > 0 ? (
        <div className="overflow-x-auto mt-12 mb-72 px-8">
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
                      <td className="text-center py-3 px-4 font-bold text-blue-600 text-2xl">
                        <button className="ml-4">
                          <FaEdit />
                        </button>
                      </td>
                      <td className="text-center py-3 px-4 font-bold text-red-600 text-2xl">
                        <button className="ml-4">
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
