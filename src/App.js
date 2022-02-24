import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext, useState, createContext } from "react";
// PAGES
import Home from "./pages/Home";
import Fav from "./pages/Fav";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// CONTEXT
// import { SelectCityContext } from "./components/WeatherCard";
// import { WeatherContext } from "./pages/Home";
// CSS
import "./App.css";

export const FavContext = createContext();

function App() {
  // const selectCityContext = useContext(SelectCityContext);
  // const weatherContext = useContext(WeatherContext);
  const [fav, setFav] = useState([]);
  // const [city, setCity] = useState("Paris");
  // const [weather, setWeather] = useState({});
  // const [temp, setTemp] = useState("");

  const addFav = (cityName) => {
    if (fav.length < 3) {
      setFav((prevFav) => [...prevFav, cityName]);
    } else {
      return alert("You can't have more than three cities in your favorites");
    }
  };

  const favValue = {
    fav: fav,
    // city: city,
    addFav: addFav,
  };

  // const value = {
  //   weather: weather,
  //   temp: temp,
  //   city: city,
  // };

  return (
    // <WeatherContext.Provider value={value}>
    <FavContext.Provider value={favValue}>
      {console.log(fav)}
      <BrowserRouter>
        <Header />
        {/* <div>
        <h1>What's the Weather like Today?</h1>
      </div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fav" component={Fav} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </FavContext.Provider>
    // </WeatherContext.Provider>
  );
}

export default App;
