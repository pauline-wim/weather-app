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
      {weatherContext.weather ? (
        <p>{weatherContext.weather.description}</p>
      ) : null}
      <p>{weatherContext.temp}</p>
    </Card>
  );
}

const Card = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 20px auto;
  width: 50vw;
`;

export default WeatherCard;
