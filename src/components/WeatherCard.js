import { useContext } from "react";
// Context
import { WeatherContext } from "../pages/Home";
// CSS
import styled from "styled-components";

function WeatherCard() {
  const weatherContext = useContext(WeatherContext);
  //   console.log(weatherContext.weather);
  return (
    <Card>
      <h1>{weatherContext.city}</h1>
      <p className="temp">{weatherContext.temp}°</p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherContext.weather.icon}@2x.png`}
        alt="icon weather"
      />
      {weatherContext.weather ? <p>{weatherContext.weather.main}</p> : null}
    </Card>
  );
}

const Card = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 20px auto;
  padding: 0 0 20px;
  width: 50vw;
  p {
    padding: 0;
    margin: 0;
  }
  .temp {
    padding-left: 20px;
    font-size: 70px;
  }
`;

export default WeatherCard;
