import { useLoaderData } from "react-router-dom";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";
const GameWatchList = () => {
  const allWatchListData = useLoaderData();
  return (
    <div className="font-1">
      <Helmet>
        <title>GameLoom || GameWatchList</title>
      </Helmet>
      <h1
        style={{ animationDuration: "4s" }}
        className="mt-12 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-700 animate__animated
         animate__backInLeft"
      >
        My Game Watch List
      </h1>
      {allWatchListData && allWatchListData.length > 0 ? (
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
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {allWatchListData.map((game, index) => (
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

                      <td className="text-center py-3 px-4 text-blue-500 font-bold text-base">
                        <span className="border p-2 rounded-lg bg-blue-50 border-blue-100">
                          {game.gameName}
                        </span>
                      </td>

                      <td className="text-center py-3 px-4 text-base text-purple-500 font-bold">
                        <span className="border p-2 rounded-lg bg-purple-50 border-purple-100">
                          {game.genreSelect}
                        </span>
                      </td>

                      <td className="text-center py-3 px-4 text-base font-bold text-orange-600">
                        <span className="border p-2 rounded-lg bg-orange-50 border-orange-100">
                          {game.rating}
                        </span>
                      </td>

                      <td className="text-center py-3 px-4 text-base font-bold text-red-600">
                        <span className="border p-2 rounded-lg bg-red-50 border-red-100">
                          {game.publicationYear}
                        </span>
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
          Watchlist is Empty!
        </h1>
      )}
    </div>
  );
};

export default GameWatchList;
