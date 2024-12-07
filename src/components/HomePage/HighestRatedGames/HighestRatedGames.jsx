import { useLoaderData } from "react-router-dom";
import HighRatedGamesCard from "../HighRatedGamesCard/HighRatedGamesCard";

import "animate.css/animate.css";

const HighestRatedGames = () => {
  const highratedGames = useLoaderData();

  return (
    <div className="font-1 mt-36">
      <h1
        className="text-5xl font-extrabold text-center text-teal-700 border w-[500px] ml-[500px] p-2 rounded-xl border-teal-200 bg-teal-50 animate__animated 
        animate__tada animate__infinite"
        style={{ animationDuration: "4s" }}
      >
        Highest Rated Games
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
