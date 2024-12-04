import { useLoaderData } from "react-router-dom";
import HighRatedGamesCard from "../HighRatedGamesCard/HighRatedGamesCard";

const HighestRatedGames = () => {
  const highratedGames = useLoaderData();

  return (
    <div className="font-1 mt-36 mb-72">
      <h1 className="text-5xl font-extrabold text-center">
        Highest Rated Games {highratedGames.length}{" "}
      </h1>

      <div className="grid grid-cols-3 ml-10 mt-16 gap-y-16">
        {highratedGames.map((game) => (
          <HighRatedGamesCard key={game._id} game={game}></HighRatedGamesCard>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGames;
