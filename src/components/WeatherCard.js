import { useContext, useState, createContext } from "react";
// Context
import { WeatherContext } from "../pages/Home";
// CSS
import styled from "styled-components";

function WeatherCard() {
  const weatherContext = useContext(WeatherContext);
  const [fav, setFav] = useState([]);
  //   console.log(weatherContext.weather);

  const handleClick = () => {
    if (fav.length < 3) {
      setFav((prevFav) => [...prevFav, weatherContext.city]);
    } else {
      return alert("You can't have more than three cities in your favorites");
    }
  };

  return (
    <Card>
      {console.log(fav, fav.length)}
      <div className="contentWrapper">
        <div className="weatherInfo">
          <h1>{weatherContext.city}</h1>
          <p className="temp">{weatherContext.temp}°</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherContext.weather.icon}@2x.png`}
            alt="icon weather"
          />
          {weatherContext.weather ? (
            <p>{weatherContext.weather.description}</p>
          ) : null}
        </div>
        <input
          className="addToFav"
          type="button"
          value="+"
          onClick={handleClick}
        />
      </div>
    </Card>
  );
}

const Card = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 400px;
  height: 360px;
  margin: 30px auto 0;
  display: flex;
  justify-content: flex-end;
  .contentWrapper {
    /* border: 2px solid green; */
    display: flex;
    gap: 70px;
    justify-content: space-between;
    .weatherInfo {
      /* margin-right: 80px; */
      /* border: 2px solid red; */
      margin: auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* padding: auto; */
      h1 {
        margin-top: 0;
        font-size: 40px;
      }
      p {
        padding: 0;
        margin: 0;
      }
      .temp {
        padding-left: 20px;
        font-size: 80px;
      }
    }
    .addToFav {
      margin: 10px;
      font-size: 20px;
      border: 1px solid black;
      border-radius: 50%;
      background-color: transparent;
      height: 40px;
      width: 40px;
      cursor: pointer;
    }
  }
`;

export default WeatherCard;
