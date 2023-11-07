import InfoCard from "../components/InfoCard";
import LatestTransaction from "../components/LatestTransaction";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <SearchBar />
      <InfoCard />
      <LatestTransaction />
    </div>
  );
}

export default Home;
