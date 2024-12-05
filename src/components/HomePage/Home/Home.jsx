import Banner from "../Banner/Banner";
import ComingSoonGames from "../ComingSoonGames/ComingSoonGames";
import HighestRatedGames from "../HighestRatedGames/HighestRatedGames";
import TopPlayerGameReview from "../TopPlayerGameReview/TopPlayerGameReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HighestRatedGames></HighestRatedGames>
      <ComingSoonGames></ComingSoonGames>
      <TopPlayerGameReview></TopPlayerGameReview>
    </div>
  );
};

export default Home;
