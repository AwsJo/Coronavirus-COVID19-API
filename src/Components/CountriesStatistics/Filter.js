import { useEffect, useState } from "react";
import { useStatics } from "../../Context/StaticsProvider";

const Filter = ({ setFiltered }) => {
  const { data } = useStatics();

  const filterCountries = () => {
    let tempCountries = data.Countries;
    if (search !== "") {
      tempCountries = tempCountries.filter((e) => {
        return e.Country.toLowerCase().includes(search.toLowerCase());
      });
    }
    if (arrange !== "") {
      tempCountries = tempCountries.sort((a, b) => {
        return a[`${according}`] - b[`${according}`];
      });
      if (arrange == "descending") {
        tempCountries = tempCountries.reverse();
      }
    }
    setFiltered([...tempCountries]);
  };
  const [showThiredFilter, setShowThiredFilter] = useState("false");
  const [search, setSearch] = useState("");
  const [arrange, setArrange] = useState("");
  const [according, setAccording] = useState("TotalConfirmed");
  useEffect(() => {
    filterCountries();
  }, [search, arrange, according]);
  return (
    <>
      <input
        className="search"
        placeholder="Search By Country Name"
        defaultValue={search}
        onChange={(e) => {
          setSearch(e.target.value);
          filterCountries();
        }}
      />

      <select
        name="arrange"
        id="arrange"
        defaultValue={showThiredFilter}
        onChange={(e) => {
          setShowThiredFilter(true);
          setArrange(e.target.value);
        }}
      >
        <option value="false" disabled className="disabled">
          Arrange
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>

      {showThiredFilter !== "false" && (
        <select
          name="according"
          id="according"
          defaultValue="TotalConfirmed"
          onChange={(e) => {
            setAccording(e.target.value);
          }}
        >
          <option value="TotalConfirmed">Total Cases</option>
          <option value="TotalDeaths">Total Deaths</option>
          <option value="TotalRecovered">Total Recoverd</option>
        </select>
      )}
    </>
  );
};

export default Filter;
