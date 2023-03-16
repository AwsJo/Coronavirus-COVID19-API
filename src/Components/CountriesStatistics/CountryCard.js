const CountryCard = ({ name, deathes, recoverd, confirmed }) => {
  return (
    <>
      <div className="country-card">
        <h3>{name}</h3>
        <p>Total Cases: {confirmed}</p>
        <p>Total Deathes: {deathes}</p>
        <p>Total recoverd: {recoverd}</p>
      </div>
    </>
  );
};

export default CountryCard;
