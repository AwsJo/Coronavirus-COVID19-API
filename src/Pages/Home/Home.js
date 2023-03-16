import CountriesStatistics from "../../Components/CountriesStatistics/CountriesStatistics";
import GlobalStatistics from "../../Components/GlobalStatisticsContainer/GlobalStatistics";
import Header from "../../Components/Header/Header";
import { useStatics } from "../../Context/StaticsProvider";
import "./Home.css";
const Home = () => {
  const { data, error, loading } = useStatics();
  return (
    <>
      <Header />
      <main>
        <div className=".container">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              {error && <h2 className="error">Something Went Wrong</h2>}
              {data &&
                (data.success === false ? (
                  // The api gives an wrong response if the user call it multiple time in short time period and the catch can't catch it
                  <h2 className="error">Please don't refresh frequently</h2>
                ) : (
                  <>
                    <GlobalStatistics />
                    <CountriesStatistics />
                  </>
                ))}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
