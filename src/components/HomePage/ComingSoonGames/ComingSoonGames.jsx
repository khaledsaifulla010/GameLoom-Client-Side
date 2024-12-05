import { useEffect, useState } from "react";
import "animate.css/animate.css";
import ComingSoonGamesCard from "../ComingSoonGamesCard/ComingSoonGamesCard";

const ComingSoonGames = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/comingSoonGames")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="font-1 mt-36">
      <h1
        className="text-5xl font-extrabold text-center text-orange-600 border w-[600px] ml-[450px] p-2 rounded-xl border-orange-200 bg-orange-50 animate__animated animate__rubberBand animate__infinite"
        style={{ animationDuration: "4s" }}
      >
        Upcoming Games Spotlight
      </h1>

      <div className="grid grid-cols-3 ml-10 mt-16 gap-y-16">
        {games.map((game) => (
          <ComingSoonGamesCard key={game._id} game={game}></ComingSoonGamesCard>
        ))}
      </div>
    </div>
  );
};

export default ComingSoonGames;
