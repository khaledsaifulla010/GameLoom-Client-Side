import Banner from "../Banner/Banner";
import ComingSoonGames from "../ComingSoonGames/ComingSoonGames";
import HighestRatedGames from "../HighestRatedGames/HighestRatedGames";
import TopPlayerGameReview from "../TopPlayerGameReview/TopPlayerGameReview";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
<Helmet>
  <title>GameLoom || Home</title>
</Helmet>

      <Banner></Banner>
      <HighestRatedGames></HighestRatedGames>
      <ComingSoonGames></ComingSoonGames>
      <TopPlayerGameReview></TopPlayerGameReview>
    </div>
  );
};

export default Home;
