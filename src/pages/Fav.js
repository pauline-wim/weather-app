import { useContext, useEffect, useState } from "react";
// import { FavContext } from "../components/WeatherCard";
// CONTEXT
import { FavContext } from "../App";
// CSS
import styled from "styled-components";

function Fav() {
  const favContext = useContext(FavContext);
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");
  const [weather, setWeather] = useState({});
  const [temp, setTemp] = useState("");
  // const city = favContext[0]?.city;

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${favContext.fav[0]}&appid=1e16d4d808acf38429a267a69416f852`
    )
      .then((res) => res.json())
      .then((res) => {
        setlat(res[0].lat);
        setlon(res[0].lon);
        // console.log(res);
        // console.log(res[0].lat, res[0].lon);
      })
      .catch((err) => {
        console.log("Error while fetching city lon&lat", err);
      });
  }, [favContext.fav[0]]);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1e16d4d808acf38429a267a69416f852`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeather(res.weather[0]);
        setTemp(Math.floor(res.main.temp));
        // console.log(res);
      })
      .catch((err) => {
        console.log(`Error`, err);
      });
  }, [lat, lon]);

  return (
    <FavSection>
      {/* {console.log(favContext.fav[0])} */}
      <h1>Favorites</h1>
      {favContext.fav[0] ? (
        <div className="favCard">
          <h1>{favContext.fav[0]}</h1>
          <p className="temp">{temp}°</p>
          <p className="descript">{weather.description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="icon weather"
          />
        </div>
      ) : null}
      {favContext.fav[1] ? (
        <div>
          <h1 className="favCard">{favContext.fav[1]}</h1>
        </div>
      ) : null}
      {favContext.fav[2] ? (
        <div>
          <h1 className="favCard">{favContext.fav[2]}</h1>
        </div>
      ) : null}
    </FavSection>
  );
}

const FavSection = styled.div`
  height: 65vh;
  text-align: center;
  .favCard {
    border: 2px solid black;
    border-radius: 10px;
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .temp {
    margin: 0;
    padding: 0;
    font-size: 50px;
  }
  img,
  .descript {
    margin: 0;
    padding: 0;
  }
`;

export default Fav;
