import { useStatics } from "../../Context/StaticsProvider";
import "./GlobalStatistics.css";
import StatisticCard from "./StatisticCard";
const GlobalStatistics = () => {
  const { data } = useStatics();
  return (
    <div className="container">
      <div className="globalstatistic-container">
        <h2>Global Statistics</h2>

        <div className="card-contaier">
          <StatisticCard
            title={"Total Cases"}
            number={data.Global.TotalConfirmed}
          />
          <StatisticCard
            title={"Total Deathes"}
            number={data.Global.TotalDeaths}
          />
          <StatisticCard
            title={"Total Recoverd"}
            number={data.Global.TotalRecovered}
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalStatistics;
