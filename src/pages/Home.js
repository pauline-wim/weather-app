import { useForm } from "react-hook-form";
import React, { useState, useEffect, createContext } from "react";
// COMPONENTS
import WeatherCard from "../components/WeatherCard";
// CSS
import styled from "styled-components";

export const WeatherContext = createContext();

function Home() {
  const [city, setCity] = useState("");
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");
  const [weather, setWeather] = useState({});
  const [temp, setTemp] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCity(data.userEntry);
    console.log(data.userEntry);
    // getWeather();
  };

  // const getWeather = () => {
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=1e16d4d808acf38429a267a69416f852`
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
  }, [city]);

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
        console.log(`Error while fetching weather for ${city}`, err);
      });
  }, [lon, lat, city]);
  // };

  const value = {
    weather: weather,
    temp: temp,
    city: city,
  };

  return (
    <WeatherContext.Provider value={value}>
      <HomeSection>
        <h1>Where is the sun?</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="search" {...register("userEntry", { required: true })} />
          <input className="submitBtn" type="submit" value="Search" />
        </form>
        {city && lon ? <WeatherCard /> : null}
      </HomeSection>
    </WeatherContext.Provider>
  );
}

const HomeSection = styled.div`
  height: 65vh;
  text-align: center;
  .submitBtn {
    cursor: pointer;
  }
`;

export default Home;
