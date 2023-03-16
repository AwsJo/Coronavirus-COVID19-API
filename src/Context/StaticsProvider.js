import { useContext, createContext } from "react";
import useFetch from "../Hooks/useFetch";
const StaticsContext = createContext();
export const useStatics = () => {
  return useContext(StaticsContext);
};
const StaticsProvider = ({ children }) => {
  const { data, error, loading } = useFetch(
    "https://api.covid19api.com/summary"
  );
  const statics = {
    data: data,
    error: error,
    loading: loading,
  };

  return (
    <StaticsContext.Provider value={statics}>
      {children}
    </StaticsContext.Provider>
  );
};

export default StaticsProvider;
