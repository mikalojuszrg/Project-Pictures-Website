import { FavouriteProvider } from "./contexts/FavouriteContext";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <>
      <FavouriteProvider>
        <Routes />
      </FavouriteProvider>
    </>
  );
};

export default App;
