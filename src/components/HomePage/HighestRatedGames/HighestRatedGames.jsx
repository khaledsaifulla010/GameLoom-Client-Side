import { useLoaderData } from "react-router-dom";


const HighestRatedGames = () => {

    const highratedGames = useLoaderData()
    console.log(highratedGames);

    return (
      <div className="font-1 mt-16 mb-72">
        <h1 className="text-5xl font-extrabold text-center">Highest Rated Games {highratedGames.length} </h1>
      </div>
    );
};

export default HighestRatedGames;