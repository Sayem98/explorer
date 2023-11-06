import InfoCard from "./components/InfoCard";
import LatestTransaction from "./components/LatestTransaction";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <SearchBar />
        <InfoCard />
        <LatestTransaction />
      </div>
    </>
  );
}

export default App;
