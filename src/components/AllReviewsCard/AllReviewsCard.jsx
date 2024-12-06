const AllReviewsCard = ({ review }) => {
  const { name, gameName, gameThumbnail, genreSelect } = review;

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 border-2 border-slate-300 w-[950px] h-[300px] overflow-hidden shadow-md transition-transform duration-1000 ease-in-out transform hover:shadow-[0px_15px_35px_rgba(0,0,0,0.5)] hover:scale-105">
          <figure className="flex h-full">
            <img
              src={gameThumbnail}
              alt={gameName}
              className="object-cover w-[40%] h-full"
            />
            <div className="flex flex-col justify-center w-[60%] p-6">
              <h3 className="text-2xl font-black text-indigo-800 border w-full text-center p-2 rounded-xl border-indigo-200 bg-indigo-50 ">
                {gameName}
              </h3>
              <div className="divider mt-12"></div>
              <div className="flex items-center justify-between mt-4">
                <div className="mt-4 text-xl text-gray-600 ">
                  <p className="font-semibold text-teal-700 border p-1 w-full rounded-xl bg-teal-50 border-teal-200 text-center">
                    <strong>Reviewer :</strong> {name}
                  </p>
                </div>
                <div className="mt-4 text-xl text-gray-600 ">
                  <p className="font-semibold text-rose-700 border p-1 w-full rounded-xl bg-rose-50 border-rose-200 text-center italic">
                    <strong>Genre :</strong> {genreSelect}
                  </p>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AllReviewsCard;
