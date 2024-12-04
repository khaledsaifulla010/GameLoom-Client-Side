import { useLoaderData } from "react-router-dom";
import HighRatedGamesCard from "../HighRatedGamesCard/HighRatedGamesCard";

const HighestRatedGames = () => {
  const highratedGames = useLoaderData();

  return (
    <div className="font-1 mt-16 mb-72">
      <h1 className="text-5xl font-extrabold text-center">
        Highest Rated Games {highratedGames.length}{" "}
      </h1>

      <div>
        {highratedGames.map((game) => (
          <HighRatedGamesCard key={game._id} game={game}></HighRatedGamesCard>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGames;
