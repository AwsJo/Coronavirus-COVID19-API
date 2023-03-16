const StatisticCard = ({ title, number }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h3>{number}</h3>
    </div>
  );
};

export default StatisticCard;
