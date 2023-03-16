import StaticsProvider from "./Context/StaticsProvider";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <StaticsProvider>
      <Home />
    </StaticsProvider>
  );
}

export default App;
