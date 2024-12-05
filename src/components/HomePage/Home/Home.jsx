import Banner from "../Banner/Banner";
import ComingSoonGames from "../ComingSoonGames/ComingSoonGames";
import HighestRatedGames from "../HighestRatedGames/HighestRatedGames";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HighestRatedGames></HighestRatedGames>
      <ComingSoonGames></ComingSoonGames>
    </div>
  );
};

export default Home;
