const ComingSoonGamesCard = ({ game }) => {
  const { name, image } = game;
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 border-2 border-slate-300 w-[420px] h-[400px] overflow-hidden shadow-md transition-transform duration-1000 ease-in-out transform hover:shadow-[0px_15px_35px_rgba(0,0,0,0.5)] hover:scale-105">
          <figure className="relative h-full">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
            />
            <button className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-black/50 hover:bg-black/70 transition-opacity">
              Coming Soon
            </button>
            <h2 className="absolute bottom-4 w-full text-center text-white text-3xl font-extrabold bg-black/40 py-2">
              {name}
            </h2>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonGamesCard;
