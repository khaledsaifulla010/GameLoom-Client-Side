const GameWatchList = () => {
  return (
    <div>
      <h1 className="mt-12 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-600">
        My Game Watchlist
      </h1>
      <div className="overflow-x-auto mt-12 mb-72 px-8">
        <div>
          <div className="rounded-lg shadow-lg border border-gray-300">
            <table className="table w-full border-collapse">
              {/* Head */}
              <thead className="bg-gray-800 text-white">
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
                <tr className="hover:bg-gray-100">
                  <td className="text-center py-3 px-4 font-bold text-green-600">
                    1
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="avatar flex justify-center">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src="https://via.placeholder.com/50" alt="Game" />
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4 text-blue-500 font-semibold">
                    Zemlak, Daniel, and Leannon
                  </td>
                  <td className="text-center py-3 px-4 text-purple-500 font-medium">
                    Adventure
                  </td>
                  <td className="text-center py-3 px-4 font-bold text-yellow-500">
                    4.5
                  </td>
                  <td className="text-center py-3 px-4 font-bold text-red-500">
                    2023
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWatchList;
