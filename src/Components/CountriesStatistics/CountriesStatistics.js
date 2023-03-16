import "./CountriesStatistics.css";
import Filter from "./Filter";
import { useStatics } from "../../Context/StaticsProvider";
import { useState } from "react";
import CountryCard from "./CountryCard";
const CountriesStatistics = () => {
  const { data } = useStatics();
  const [filteredCountries, setFilteredCountries] = useState([
    ...data.Countries,
  ]);
  return (
    <>
      <div className="countries-container">
        <Filter setFiltered={setFilteredCountries} />
      </div>
      <div className="countries-container">
        {filteredCountries.map((element) => {
          return (
            <CountryCard
              name={element.Country}
              key={element.ID}
              deathes={element.TotalDeaths}
              recoverd={element.TotalRecovered}
              confirmed={element.TotalConfirmed}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountriesStatistics;
